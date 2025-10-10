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

        // Get all students ordered by last name
        const students = await sql`
            SELECT
                id,
                first_name,
                last_name,
                full_name,
                registered_date
            FROM students
            ORDER BY last_name, first_name
        `;

        // Get count of students registered today
        const today = await sql`
            SELECT COUNT(*) as count
            FROM students
            WHERE DATE(registered_date) = CURRENT_DATE
        `;

        return successResponse({
            students,
            total: students.length,
            registeredToday: parseInt(today[0].count)
        });

    } catch (error) {
        return errorResponse(error);
    }
};
