const { getDB, successResponse, errorResponse, handleOptions } = require('./db-config');

exports.handler = async (event, context) => {
    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleOptions();
    }

    // Accept POST for marking present, DELETE for marking absent
    if (event.httpMethod !== 'POST' && event.httpMethod !== 'DELETE') {
        return errorResponse(new Error('Method not allowed'), 405);
    }

    try {
        const { firstName, lastName, date, isLate } = JSON.parse(event.body);

        if (!firstName || !lastName || !date) {
            return errorResponse(new Error('Missing required fields'), 400);
        }

        const sql = getDB();

        // Find student
        const student = await sql`
            SELECT id, full_name
            FROM students
            WHERE first_name = ${firstName} AND last_name = ${lastName}
        `;

        if (student.length === 0) {
            return errorResponse(new Error('Student not registered'), 404);
        }

        const studentId = student[0].id;
        const late = isLate === true || isLate === 'true';

        if (event.httpMethod === 'POST') {
            // Mark present (insert or update attendance record)
            // Use ON CONFLICT to update if already exists
            const result = await sql`
                INSERT INTO attendance (student_id, attendance_date, is_late)
                VALUES (${studentId}, ${date}, ${late})
                ON CONFLICT (student_id, attendance_date)
                DO UPDATE SET is_late = ${late}, timestamp = CURRENT_TIMESTAMP
                RETURNING id, timestamp, is_late
            `;

            const status = late ? 'late' : 'present';
            return successResponse({
                message: `${student[0].full_name} marked ${status}`,
                attendance: result[0]
            });

        } else {
            // Mark absent (delete attendance record)
            const result = await sql`
                DELETE FROM attendance
                WHERE student_id = ${studentId} AND attendance_date = ${date}
                RETURNING id
            `;

            return successResponse({
                message: `${student[0].full_name} marked absent`,
                deleted: result.length > 0
            });
        }

    } catch (error) {
        return errorResponse(error);
    }
};
