const { getDB, successResponse, errorResponse, handleOptions } = require('./db-config');

exports.handler = async (event, context) => {
    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleOptions();
    }

    // Only accept GET requests
    if (event.httpMethod !== 'GET') {
        return errorResponse(new Error('Method not allowed'), 405);
    }

    try {
        const { date } = event.queryStringParameters || {};

        if (!date) {
            return errorResponse(new Error('Date parameter is required'), 400);
        }

        const sql = getDB();

        // Get all students and their attendance status for the date
        const attendance = await sql`
            SELECT
                s.id,
                s.first_name,
                s.last_name,
                s.full_name,
                a.timestamp,
                a.is_late,
                CASE WHEN a.id IS NOT NULL THEN true ELSE false END as present
            FROM students s
            LEFT JOIN attendance a ON s.id = a.student_id AND a.attendance_date = ${date}
            ORDER BY s.last_name, s.first_name
        `;

        // Calculate statistics
        const presentCount = attendance.filter(s => s.present).length;
        const absentCount = attendance.filter(s => !s.present).length;

        return successResponse({
            date,
            attendance,
            stats: {
                total: attendance.length,
                present: presentCount,
                absent: absentCount
            }
        });

    } catch (error) {
        return errorResponse(error);
    }
};
