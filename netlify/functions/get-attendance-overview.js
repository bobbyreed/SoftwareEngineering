const { getDB, successResponse, errorResponse, handleOptions } = require('./db-config');

// Class dates from the course schedule (15 total lectures)
const CLASS_DATES = [
    '2025-10-24', // Class 1: Welcome
    '2025-10-29', // Class 2: Agile
    '2025-10-31', // Class 3: Project Management
    '2025-11-05', // Class 4: CI/CD
    '2025-11-07', // Class 5: Software Architecture
    '2025-11-12', // Class 6: Vibe Coding
    '2025-11-14', // Class 7: Cloud-Based Software
    '2025-11-19', // Class 8: Vibe Coding Presentations
    '2025-11-21', // Class 9: Microservices
    '2025-11-26', // Class 10: Security & Privacy
    '2025-12-03', // Class 11: Reliable Programming
    '2025-12-05', // Class 12: Testing
    '2025-12-10', // Class 13: DevOps
    '2025-12-12', // Class 14: Final Review
    '2025-12-17'  // Class 15: Final Exam
];

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

        // Get all students
        const students = await sql`
            SELECT id, first_name, last_name, full_name
            FROM students
            ORDER BY last_name, first_name
        `;

        // Get all attendance records for all class dates
        const allAttendance = await sql`
            SELECT
                student_id,
                attendance_date,
                is_late,
                timestamp
            FROM attendance
            WHERE attendance_date = ANY(${CLASS_DATES})
            ORDER BY attendance_date
        `;

        // Build attendance overview for each student
        const overview = students.map(student => {
            // Create array of 15 class periods
            const attendance = CLASS_DATES.map((date, index) => {
                const record = allAttendance.find(a => {
                    // Convert database date to YYYY-MM-DD string for comparison
                    const dbDate = a.attendance_date instanceof Date
                        ? a.attendance_date.toISOString().split('T')[0]
                        : a.attendance_date;

                    return a.student_id === student.id && dbDate === date;
                });

                return {
                    classNumber: index + 1,
                    date: date,
                    status: record
                        ? (record.is_late ? 'late' : 'present')
                        : 'absent',
                    timestamp: record ? record.timestamp : null
                };
            });

            // Calculate stats
            const presentCount = attendance.filter(a => a.status === 'present').length;
            const lateCount = attendance.filter(a => a.status === 'late').length;
            const absentCount = attendance.filter(a => a.status === 'absent').length;

            return {
                id: student.id,
                firstName: student.first_name,
                lastName: student.last_name,
                fullName: student.full_name,
                attendance: attendance,
                stats: {
                    present: presentCount,
                    late: lateCount,
                    absent: absentCount,
                    total: CLASS_DATES.length
                }
            };
        });

        return successResponse({
            students: overview,
            classDates: CLASS_DATES,
            totalClasses: CLASS_DATES.length
        });

    } catch (error) {
        return errorResponse(error);
    }
};
