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
        const sql = getDB();

        // Get summary of all attendance dates
        const history = await sql`
            SELECT
                a.attendance_date,
                COUNT(DISTINCT a.student_id) as present_count,
                (SELECT COUNT(*) FROM students) as total_students
            FROM attendance a
            GROUP BY a.attendance_date
            ORDER BY a.attendance_date DESC
        `;

        return successResponse({
            history
        });

    } catch (error) {
        return errorResponse(error);
    }
};
