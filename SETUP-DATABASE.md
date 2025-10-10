# Database Setup Instructions

## Step 1: Set up Neon Database

1. Go to your Neon database console: https://console.neon.tech
2. Select your project for this course website
3. Click on "SQL Editor" or "Query"
4. Copy and paste the contents of `database-schema.sql` into the editor
5. Click "Run" to create the tables

## Step 2: Configure Netlify Environment Variables

1. Go to your Netlify site dashboard
2. Navigate to: **Site settings** → **Environment variables**
3. Add a new environment variable:
   - **Key**: `DATABASE_URL`
   - **Value**: Your Neon database connection string (should look like: `postgresql://user:password@host/database?sslmode=require`)

You can find your connection string in Neon under "Connection Details" → "Connection string"

## Step 3: Install Dependencies

Run the following command in your project directory:

```bash
npm install
```

This will install the `@neondatabase/serverless` package.

## Step 4: Deploy to Netlify

1. Commit all changes to your repository
2. Push to GitHub (Netlify will auto-deploy if linked)
3. Or manually deploy through Netlify dashboard

## Step 5: Test the API

Once deployed, you can test the endpoints:

- **Register Student**: `POST /.netlify/functions/register-student`
- **Get Students**: `GET /.netlify/functions/get-students`
- **Delete Student**: `DELETE /.netlify/functions/delete-student`
- **Mark Attendance**: `POST /.netlify/functions/mark-attendance`
- **Get Attendance**: `GET /.netlify/functions/get-attendance?date=2025-10-10`
- **Get History**: `GET /.netlify/functions/get-attendance-history`

## API Endpoints Reference

### Register Student
```http
POST /.netlify/functions/register-student
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "fullName": "John Doe",
  "rawCardData": "%B6039..."
}
```

### Get All Students
```http
GET /.netlify/functions/get-students
```

### Delete Student
```http
DELETE /.netlify/functions/delete-student
Content-Type: application/json

{
  "id": 1
}
```

### Mark Attendance (Present)
```http
POST /.netlify/functions/mark-attendance
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "date": "2025-10-10"
}
```

### Mark Attendance (Absent)
```http
DELETE /.netlify/functions/mark-attendance
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "date": "2025-10-10"
}
```

### Get Attendance for Date
```http
GET /.netlify/functions/get-attendance?date=2025-10-10
```

### Get Attendance History
```http
GET /.netlify/functions/get-attendance-history
```

## Database Schema

### students table
- `id` (SERIAL PRIMARY KEY)
- `first_name` (VARCHAR 100)
- `last_name` (VARCHAR 100)
- `full_name` (VARCHAR 200)
- `raw_card_data` (TEXT, optional)
- `registered_date` (TIMESTAMP WITH TIME ZONE)

### attendance table
- `id` (SERIAL PRIMARY KEY)
- `student_id` (INTEGER, references students.id)
- `attendance_date` (DATE)
- `timestamp` (TIMESTAMP WITH TIME ZONE)

## Migration from localStorage

The updated HTML pages will automatically use the database API when deployed. The localStorage code has been replaced with fetch() calls to the serverless functions.

No data migration script is needed - you can re-register students using the card swiper as before, but now it will store in the database instead of localStorage.
