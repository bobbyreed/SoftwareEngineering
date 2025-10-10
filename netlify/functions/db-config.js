// Shared database configuration and utilities
const { neon } = require('@neondatabase/serverless');

// CORS headers for all responses
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
};

// Get database client
function getDB() {
    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
        throw new Error('DATABASE_URL environment variable is not set');
    }

    return neon(DATABASE_URL);
}

// Standard response helpers
function successResponse(data, statusCode = 200) {
    return {
        statusCode,
        headers,
        body: JSON.stringify({
            success: true,
            ...data
        })
    };
}

function errorResponse(error, statusCode = 500) {
    console.error('Error:', error);
    return {
        statusCode,
        headers,
        body: JSON.stringify({
            success: false,
            error: error.message || 'An error occurred'
        })
    };
}

function handleOptions() {
    return {
        statusCode: 200,
        headers,
        body: ''
    };
}

module.exports = {
    getDB,
    headers,
    successResponse,
    errorResponse,
    handleOptions
};
