-- Database Schema for CSCI 5403 Classroom Management
-- Run this in your Neon database console to set up the tables

-- Students table
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    full_name VARCHAR(200) NOT NULL,
    raw_card_data TEXT,
    registered_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(first_name, last_name)
);

-- Attendance table
CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    attendance_date DATE NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_late BOOLEAN DEFAULT false,
    UNIQUE(student_id, attendance_date)
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance(attendance_date);
CREATE INDEX IF NOT EXISTS idx_students_name ON students(last_name, first_name);

-- View for easy attendance reporting
CREATE OR REPLACE VIEW attendance_report AS
SELECT
    a.attendance_date,
    s.first_name,
    s.last_name,
    s.full_name,
    a.timestamp
FROM attendance a
JOIN students s ON a.student_id = s.id
ORDER BY a.attendance_date DESC, s.last_name, s.first_name;
