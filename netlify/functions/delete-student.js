const { getDB, successResponse, errorResponse, handleOptions } = require('./db-config');

exports.handler = async (event, context) => {
    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleOptions();
    }

    // Only accept DELETE requests
    if (event.httpMethod !== 'DELETE') {
        return errorResponse(new Error('Method not allowed'), 405);
    }

    try {
        const { id } = JSON.parse(event.body);

        if (!id) {
            return errorResponse(new Error('Student ID is required'), 400);
        }

        const sql = getDB();

        // Delete student (attendance records will cascade delete)
        const result = await sql`
            DELETE FROM students
            WHERE id = ${id}
            RETURNING id
        `;

        if (result.length === 0) {
            return errorResponse(new Error('Student not found'), 404);
        }

        return successResponse({
            message: 'Student deleted successfully'
        });

    } catch (error) {
        return errorResponse(error);
    }
};
