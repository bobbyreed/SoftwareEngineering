const { getDB, successResponse, errorResponse, handleOptions } = require('./db-config');

exports.handler = async (event, context) => {
    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return handleOptions();
    }

    // Only accept POST requests
    if (event.httpMethod !== 'POST') {
        return errorResponse(new Error('Method not allowed'), 405);
    }

    try {
        const { firstName, lastName, fullName, rawCardData } = JSON.parse(event.body);

        // Validate required fields
        if (!firstName || !lastName || !fullName) {
            return errorResponse(new Error('Missing required fields'), 400);
        }

        const sql = getDB();

        // Check if student already exists
        const existing = await sql`
            SELECT id, first_name, last_name, full_name
            FROM students
            WHERE first_name = ${firstName} AND last_name = ${lastName}
        `;

        if (existing.length > 0) {
            return errorResponse(new Error('Student already registered'), 409);
        }

        // Insert new student
        const result = await sql`
            INSERT INTO students (first_name, last_name, full_name, raw_card_data)
            VALUES (${firstName}, ${lastName}, ${fullName}, ${rawCardData || null})
            RETURNING id, first_name, last_name, full_name, registered_date
        `;

        return successResponse({
            student: result[0],
            message: 'Student registered successfully'
        }, 201);

    } catch (error) {
        return errorResponse(error);
    }
};
