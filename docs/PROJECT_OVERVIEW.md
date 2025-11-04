# Software Engineering Course - Project Overview

**Course**: CSCI 5403 - Software Engineering
**Type**: Graduate-level, 8-week intensive
**Semester**: Spring 2025

## Project Purpose

This repository contains the complete course website for a graduate-level Software Engineering course, including:
- Interactive HTML lecture presentations covering modern software development practices
- Student attendance management system with card swipe authentication
- Course materials, assignments, and project guidelines
- Live PostgreSQL database integration for attendance tracking

## Technology Stack

### Frontend
- **HTML5/CSS3**: Presentation slides and pages
- **JavaScript**: Interactive slide controls, theme switching, attendance tracking
- **Custom Presentation Framework**: `/js/presentation.js` with keyboard navigation and timer features

### Backend & Database
- **PostgreSQL**: Primary database system (via Neon serverless)
- **Netlify**: Hosting platform with serverless functions
- **@neondatabase/serverless**: PostgreSQL connection library

### Styling
- **Blueprint Theme**: `/styles/presentation.css` with modern gradient design
- **Fonts**: Space Grotesk (headings) & IBM Plex Sans (body text)
- **Color Palette**: Sky Blue (#0EA5E9) + Purple (#8B5CF6) gradient theme
- **Theme Support**: Light/dark mode toggle with keyboard shortcut ('t')

## Project Structure

```
SoftwareEngineering/
├── index.html                    # Course homepage with lecture grid
├── pages/
│   ├── lectures/                # Lecture HTML slides (15 lectures)
│   │   ├── 1Welcome.html
│   │   ├── 2Agile.html
│   │   ├── 3ProjectManagement.html
│   │   ├── 4CICD.html
│   │   ├── 5SoftwareArchitecture.html
│   │   ├── 6VibeCoding.html
│   │   ├── 7CloudbasedSoftware.html
│   │   ├── 8VibeCodingPresentations.html
│   │   ├── 9Microservices.html
│   │   ├── 10Security.html
│   │   ├── 11ReliableProgramming.html
│   │   ├── 12Testing.html
│   │   ├── 13DevOps.html
│   │   ├── 14FinalReview.html
│   │   └── 15Final.html
│   ├── attendance.html          # Daily attendance tracking (card swipe)
│   ├── attendance-overview.html # Visual 15-class attendance grid
│   ├── register-students.html   # Student roster management
│   ├── adminPanel.html          # Admin controls
│   └── lecture-template.html    # Template for new lectures
├── js/
│   ├── presentation.js          # Slide navigation, theme toggle, timers
│   └── classroom-auth.js        # Instructor card swipe authentication
├── styles/
│   ├── presentation.css         # Blueprint theme with gradient design
│   └── lecture-tracking-styles.css
├── images/
│   └── favicon.png
├── netlify/
│   └── functions/               # Serverless API endpoints
│       ├── db-config.js
│       ├── register-student.js
│       ├── get-students.js
│       ├── mark-attendance.js
│       └── get-attendance-overview.js
├── docs/
│   ├── PROJECT_OVERVIEW.md      # This file
│   ├── LECTURE_CONTROLS_UX_GUIDE.md
│   ├── assignmentSheets/        # CI/CD and Vibe Coding assignments
│   └── maintenance/             # Database and attendance system docs
└── package.json                 # Node dependencies
```

## Course Content Overview

### Week 1
- **Lecture 1**: Welcome and Course Introduction
  - Course overview and expectations
  - Software engineering fundamentals
  - Development environment setup

- **Lecture 2**: Agile Development
  - Agile principles and values
  - Scrum framework
  - Sprint planning and execution
  - **Activity**: Agile simulation exercise

### Week 2
- **Lecture 3**: Project Management
  - Project planning and estimation
  - Team collaboration strategies
  - Version control best practices
  - **Activity**: Project planning workshop

- **Lecture 4**: CI/CD Pipelines
  - Continuous Integration principles
  - Continuous Deployment strategies
  - GitHub Actions and automation
  - Real-world examples: Netflix, Meta, Spotify
  - **Assignment**: Build your own CI/CD pipeline

### Week 3
- **Lecture 5**: Software Architecture
  - Architectural patterns and principles
  - Monolithic vs. distributed systems
  - Design patterns and best practices

- **Lecture 6**: Vibe Coding Introduction
  - Modern development workflows
  - AI-assisted development
  - Project kickoff
  - **Assignment**: Vibe Coding project begins

### Week 4
- **Lecture 7**: Cloud-based Software Development
  - Cloud platforms (AWS, Azure, GCP)
  - Serverless architecture
  - Infrastructure as Code
  - Scalability and deployment strategies

- **Lecture 8**: Vibe Coding Presentations
  - Student project presentations
  - Peer feedback and discussion

### Week 5
- **Lecture 9**: Microservices Architecture
  - Service-oriented architecture
  - API design and REST principles
  - Container orchestration
  - Communication patterns

- **Lecture 10**: Security in Software Engineering
  - OWASP Top 10 vulnerabilities
  - Secure coding practices
  - Authentication and authorization
  - Dependency management

### Week 6
- **Lecture 11**: Reliable Programming
  - Error handling strategies
  - Logging and monitoring
  - Debugging techniques
  - Code quality and maintainability

- **Lecture 12**: Testing
  - Unit testing, integration testing, E2E testing
  - Test-driven development (TDD)
  - Testing frameworks and best practices
  - Code coverage and quality metrics

### Week 7
- **Lecture 13**: DevOps Practices
  - DevOps culture and principles
  - Infrastructure automation
  - Monitoring and observability
  - Incident response

- **Lecture 14**: Final Review
  - Course recap and key takeaways
  - Final exam preparation
  - Career guidance and next steps

### Week 8
- **Lecture 15**: Final Exam

## Database Schema

### Attendance Database (Production)

The live attendance tracking system uses a PostgreSQL database (via Neon serverless) with the following schema:

#### students Table
```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    full_name VARCHAR(200) NOT NULL,
    card_data TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(first_name, last_name)
);
```

**Purpose**: Stores student roster information parsed from card swipe data.

**Key Features**:
- Unique constraint on first_name + last_name combination
- `card_data` stores raw card swipe pattern for debugging
- `full_name` denormalized for display performance

#### attendance Table
```sql
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
    attendance_date DATE NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_late BOOLEAN DEFAULT false,
    UNIQUE(student_id, attendance_date)
);
```

**Purpose**: Records daily attendance for each student with late/on-time status.

**Key Features**:
- One record per student per date (enforced by unique constraint)
- `is_late` boolean flag for attendance status
- `timestamp` captures exact swipe time
- Cascading delete maintains referential integrity

## Key Features

### Presentation System
- **Keyboard Navigation**: Arrow keys, Home, End, Space bar
- **Auto-Hide Controls**: 2-second inactivity delay for distraction-free viewing
- **Timer System**: Countdown timers for in-class exercises with audio alerts
- **Slide Counter**: Current/total slides with navigation buttons
- **Theme Toggle**: Light/dark mode switcher (keyboard: 't')
- **Fullscreen Mode**: Press 'f' key for immersive presentation
- **Smooth Transitions**: CSS-based slide animations with fade effects

### Attendance Management
- **Card Swipe Registration**: Automatic parsing of student ID cards (`^LASTNAME/FIRSTNAME^` pattern)
- **Instructor Authentication**: Card-based access control for admin pages (8-hour session)
- **Live Attendance Tracking**: Real-time present/late/absent marking with visual feedback
- **Attendance Overview Grid**: 15-class visual grid with color-coded status (green/yellow/gray)
- **Date-based History**: View and edit attendance for any past or future date
- **Export Functionality**: CSV export for roster and attendance data
- **Database Integration**: PostgreSQL backend via Neon serverless with WebSocket connections

### Course Content Features
All lectures include:
- Real-world industry examples (Netflix, Spotify, Meta, etc.)
- Interactive exercises with timer-based activities
- Hands-on assignments (CI/CD pipeline, Vibe Coding project)
- Modern development practices and tools
- Security best practices and OWASP guidelines

## Development Setup

### Prerequisites
- Node.js and npm (for local development and Netlify CLI)
- Git (for version control)
- Modern web browser (Chrome, Firefox, Edge)
- Code editor (VS Code recommended)
- GitHub account (for CI/CD assignment)

### Local Development
```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Run local dev server with Netlify CLI
npx netlify dev

# Access at http://localhost:8888
```

### Environment Variables
For attendance system functionality, configure in Netlify:
```bash
DATABASE_URL=postgresql://user:password@host/database
```

### Database Setup
The attendance database is hosted on Neon (serverless PostgreSQL). For local development:
1. Create a Neon account at neon.tech
2. Create a new project and database
3. Run the schema creation scripts from `/docs/maintenance/database/`
4. Add `DATABASE_URL` to Netlify environment variables

## Course Pedagogy

### Learning Approach
- **Theory + Practice**: Each lecture combines software engineering principles with real-world applications
- **Progressive Complexity**: Builds from Agile basics to advanced DevOps and microservices
- **Industry Examples**: Real case studies from Netflix, Spotify, Meta, and other tech companies
- **Hands-on Projects**: CI/CD pipeline implementation and Vibe Coding project
- **Modern Tools**: GitHub Actions, cloud platforms, containerization, AI-assisted development

### Assessment Methods
- Hands-on assignments (CI/CD pipeline, Vibe Coding project)
- In-class exercises and collaborative activities
- Attendance tracking (15 classes)
- Project presentations
- Final exam

### Unique Features
- **Blueprint Theme**: Modern gradient design with sky blue and purple color palette
- **Auto-Hide Controls**: Distraction-free presentation mode with intelligent UI
- **Real-World Focus**: Industry practices from leading tech companies
- **AI Integration**: Vibe Coding project explores AI-assisted development
- **Card Swipe System**: Professional attendance tracking with authentication

## File Naming Conventions

### Lecture Files
- Format: `{Number}{Title}.html`
- Example: `4CICD.html`, `2Agile.html`, `10Security.html`
- Title case for multi-word titles: `3ProjectManagement.html`

### Assignment Submissions
Students submit assignments via GitHub repositories:
- **CI/CD Assignment**: GitHub repository with working pipeline
- **Vibe Coding Project**: GitHub repository with documented project
- Screenshots and documentation as required per assignment sheet

## Best Practices for Future Updates

### Adding New Lectures
1. Copy `pages/lecture-template.html` as starting point
2. Update title, lecture number, and slide count
3. Add entry to `index.html` lecture grid with appropriate availability date
4. Include timer buttons for timed exercises
5. Follow existing slide structure patterns:
   - Title slide with lecture number
   - Learning objectives
   - Content slides with demo-box, exercise-box, etc.
   - Summary/review slide
6. Use consistent CSS classes (demo-box, exercise-box, activity-box, tip-box, warning-box)
7. Test auto-hide controls and keyboard navigation

### Modifying Lecture Content
- Maintain consistent styling with Blueprint theme
- Include real-world industry examples where possible
- Add interactive exercises with timers for engagement
- Test all code examples and commands before committing
- Ensure slide transitions work smoothly

### Accessibility
- All slides use semantic HTML
- Color contrast meets WCAG AA standards
- Keyboard navigation fully supported
- Screen reader friendly structure

## Support & Resources

### Student Resources
- Course website: Lecture materials and slides available online
- GitHub: Assignment submission and CI/CD pipeline hosting
- Assignment sheets: `/docs/assignmentSheets/` for detailed project requirements
- D2L: Grade tracking and submission links

### Technical Support
- **Netlify Deployment**: Automatic deployment via git push to main branch
- **Database Issues**: Check Neon dashboard for connection status
- **Attendance System**: Contact instructor for access issues
- **GitHub Actions**: Consult assignment sheet for CI/CD troubleshooting

### Documentation
- **PROJECT_OVERVIEW.md**: This file - architecture and course overview
- **LECTURE_CONTROLS_UX_GUIDE.md**: Guide for implementing auto-hide controls
- **docs/maintenance/**: Database setup and maintenance guides
- **docs/assignmentSheets/**: CI/CD and Vibe Coding assignment instructions

## Deployment

### Production Environment
- **Platform**: Netlify
- **URL**: Configured via Netlify domain settings
- **Branch**: `main` (auto-deploys on push)
- **Build Command**: N/A (static site)
- **Publish Directory**: `/` (root)

### Serverless Functions
- **Directory**: `netlify/functions/`
- **Runtime**: Node.js
- **Database**: Neon PostgreSQL (serverless)
- **Environment Variables**: `DATABASE_URL` configured in Netlify dashboard

## License

Educational use - Course materials for CSCI 5403

---

**Last Updated**: January 2025
**Maintainer**: Course Instructor
**Repository**: /home/bobby/repos/SoftwareEngineering
