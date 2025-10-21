-- Migration: Add is_late field to attendance table
-- Run this if you already have the attendance table created
-- Date: 2025-10-10

-- Add is_late column to attendance table
ALTER TABLE attendance
ADD COLUMN IF NOT EXISTS is_late BOOLEAN DEFAULT false;

-- Add comment to document the field
COMMENT ON COLUMN attendance.is_late IS 'True if student was marked late, false if on time';

-- Update any existing records to be on-time by default (already done by DEFAULT false)
-- This is just for clarity
UPDATE attendance SET is_late = false WHERE is_late IS NULL;
