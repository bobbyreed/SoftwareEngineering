# Assignment: CI/CD Pipeline with GitHub Pages

## Assignment Overview

In this assignment, you will learn how to use GitHub Pages as a Continuous Integration/Continuous Deployment (CI/CD) pipeline for rapid prototyping. You'll deploy a provided website template, make modifications, and observe how GitHub automatically builds and deploys your changes. This simulates real-world software deployment workflows.

**Focus:** Version Control, CI/CD, Deployment Pipeline

---

## Learning Objectives

By completing this assignment, you will:
- Understand CI/CD concepts through hands-on experience
- Use Git for version control and collaboration
- Deploy applications using GitHub Pages
- Experience automated build and deployment processes
- Practice iterative development and deployment

---

## Prerequisites

- [ ] GitHub account (create at [github.com](https://github.com))
- [ ] Git installed on your computer
- [ ] Text editor (VS Code, Notepad++, or any editor)
- [ ] No HTML/CSS knowledge required - all code provided

---

## Part 1: Repository Setup and Initial Deployment (25 points)

### Step 1.1: Create Your Repository (10 points)
1. Log into GitHub
2. Click the **"+"** icon → **"New repository"**
3. **Repository name:** `[your-username].github.io` 
   - ⚠️ Replace [your-username] with your actual GitHub username
   - This special naming enables automatic deployment
4. Set to **Public**
5. ✅ Check "Add a README file"
6. Click **"Create repository"**

### Step 1.2: Clone Repository Locally (5 points)
```bash
# In your terminal/command prompt:
git clone https://github.com/[your-username]/[your-username].github.io.git
cd [your-username].github.io
```

### Step 1.3: Add Starter Code (10 points)
Create the following files in your repository folder:

**File 1: `index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <h1>Your Name</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="hero">
            <h2>Welcome to My Portfolio</h2>
            <p>I'm a software engineering student learning CI/CD with GitHub Pages</p>
            <div class="stats">
                <div class="stat-card">
                    <h3>5+</h3>
                    <p>Projects Completed</p>
                </div>
                <div class="stat-card">
                    <h3>10+</h3>
                    <p>Technologies Learned</p>
                </div>
                <div class="stat-card">
                    <h3>100%</h3>
                    <p>Passion for Learning</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Your Name. Deployed with GitHub Pages</p>
        <p class="deploy-info">Last deployed: <span id="deploy-date">Check commit history</span></p>
    </footer>
</body>
</html>
```

**File 2: `about.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <h1>Your Name</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="content">
            <h2>About Me</h2>
            <div class="about-grid">
                <div class="about-card">
                    <h3>🎓 Education</h3>
                    <p>Software Engineering Student</p>
                    <p>University Name, Expected Graduation: 2026</p>
                </div>
                <div class="about-card">
                    <h3>💻 Skills</h3>
                    <p>Languages: Python, Java, JavaScript</p>
                    <p>Tools: Git, GitHub, VS Code</p>
                    <p>Currently Learning: CI/CD, DevOps</p>
                </div>
                <div class="about-card">
                    <h3>🎯 Goals</h3>
                    <p>Master software deployment processes</p>
                    <p>Build scalable applications</p>
                    <p>Contribute to open source</p>
                </div>
                <div class="about-card">
                    <h3>🚀 Interests</h3>
                    <p>Cloud Computing</p>
                    <p>Automation</p>
                    <p>Machine Learning</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Your Name. Deployed with GitHub Pages</p>
        <p class="deploy-info">Last deployed: <span id="deploy-date">Check commit history</span></p>
    </footer>
</body>
</html>
```

**File 3: `projects.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects - Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <h1>Your Name</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="content">
            <h2>My Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>🌐 Project 1: This Website</h3>
                    <p>A portfolio website deployed using GitHub Pages CI/CD pipeline</p>
                    <p class="tech-stack">Tech: HTML, CSS, Git, GitHub Pages</p>
                    <a href="https://github.com/[your-username]/[your-username].github.io" class="project-link">View Repository</a>
                </div>
                <div class="project-card">
                    <h3>🔧 Project 2: Calculator App</h3>
                    <p>A simple calculator application built with Python</p>
                    <p class="tech-stack">Tech: Python, Tkinter</p>
                    <a href="#" class="project-link">Coming Soon</a>
                </div>
                <div class="project-card">
                    <h3>📊 Project 3: Data Analyzer</h3>
                    <p>Data analysis tool for CSV file processing</p>
                    <p class="tech-stack">Tech: Java, JavaFX</p>
                    <a href="#" class="project-link">Coming Soon</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Your Name. Deployed with GitHub Pages</p>
        <p class="deploy-info">Last deployed: <span id="deploy-date">Check commit history</span></p>
    </footer>
</body>
</html>
```

**File 4: `style.css`**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

/* Navigation */
nav {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h1 {
    color: #667eea;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: #667eea;
}

/* Main Content */
main {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 2rem;
}

.hero {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.hero h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
}

/* Stats Cards */
.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.stat-card {
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    color: white;
}

.stat-card h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

/* Content Sections */
.content {
    background: white;
    border-radius: 10px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.content h2 {
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;
}

/* About Grid */
.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.about-card {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.about-card h3 {
    color: #667eea;
    margin-bottom: 1rem;
}

.about-card p {
    margin-bottom: 0.5rem;
    color: #666;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.project-card h3 {
    color: #333;
    margin-bottom: 1rem;
}

.project-card p {
    color: #666;
    margin-bottom: 1rem;
}

.tech-stack {
    font-size: 0.9rem;
    color: #667eea;
    font-weight: 500;
}

.project-link {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: opacity 0.3s;
}

.project-link:hover {
    opacity: 0.9;
}

/* Footer */
footer {
    text-align: center;
    padding: 2rem;
    color: white;
    margin-top: 4rem;
}

.deploy-info {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    nav ul {
        gap: 1rem;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
    
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }
}
```

---

## Part 2: Initial Deployment (25 points)

### Step 2.1: Commit and Push Your Code (10 points)
```bash
# Stage all files
git add .

# Commit with descriptive message
git commit -m "Initial deployment: Add portfolio website"

# Push to GitHub (this triggers the CI/CD pipeline)
git push origin main
```

### Step 2.2: Enable GitHub Pages (10 points)
1. Go to your repository on GitHub.com
2. Click **Settings** → **Pages** (left sidebar)
3. Source: **Deploy from a branch**
4. Branch: **main** → **/ (root)**
5. Click **Save**

### Step 2.3: Monitor Deployment (5 points)
1. Go to the **Actions** tab in your repository
2. Watch the yellow dot turn green (deployment in progress → complete)
3. Visit `https://[your-username].github.io` after ~5 minutes
4. **Screenshot your live website** for submission

---

## Part 3: Iterative Development and CI/CD Practice (30 points)

You will now make THREE iterations to practice the CI/CD workflow. Each change will automatically trigger a new deployment.

### Iteration 1: Personalization (10 points)
**Required Changes:**
1. Replace all instances of "Your Name" with your actual name
2. Update the university name in `about.html`
3. Add your actual graduation year

**Deployment Process:**
```bash
git add .
git commit -m "Iteration 1: Personalize content"
git push origin main
```

**Verify:** Check Actions tab → Wait for green checkmark → Refresh your website

### Iteration 2: Add Build Information (10 points)
Create a new file: `deploy-info.json`
```json
{
    "version": "1.0.0",
    "lastUpdated": "2025-01-20",
    "environment": "production",
    "author": "Your Name",
    "buildTool": "GitHub Pages",
    "autoDeployEnabled": true
}
```

**Then update** `projects.html` - Add this as a fourth project card:
```html
<div class="project-card">
    <h3>⚙️ CI/CD Pipeline Status</h3>
    <p>This site uses GitHub Pages for automatic deployment</p>
    <p class="tech-stack">Status: Auto-deploying on push to main branch</p>
    <a href="deploy-info.json" class="project-link">View Deploy Info</a>
</div>
```

**Deploy:**
```bash
git add .
git commit -m "Iteration 2: Add deployment information"
git push origin main
```

### Iteration 3: Feature Branch Workflow (10 points)
Practice using branches (common in CI/CD workflows):

```bash
# Create and switch to a new branch
git checkout -b feature/add-contact

# Create contact.html (copy the code below)
# Make your changes...

# Commit changes
git add contact.html
git commit -m "Add contact page"

# Push feature branch
git push origin feature/add-contact
```

**New file: `contact.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <h1>Your Name</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    </nav>

    <main>
        <section class="content">
            <h2>Contact Me</h2>
            <div class="about-card">
                <h3>📧 Get In Touch</h3>
                <p>Email: your.email@university.edu</p>
                <p>GitHub: github.com/[your-username]</p>
                <p>LinkedIn: linkedin.com/in/your-profile</p>
                <p>Office Hours: Tuesdays 2-4 PM</p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Your Name. Deployed with GitHub Pages</p>
    </footer>
</body>
</html>
```

**Merge via Pull Request:**
1. Go to GitHub.com → Your repository
2. Click "Compare & pull request"
3. Add description: "Adds contact page to website"
4. Click "Create pull request"
5. Click "Merge pull request" → "Confirm merge"
6. Watch the automatic deployment trigger!

**Update navigation on all other pages** to include the Contact link, then push again.

---

## Part 4: CI/CD Documentation and Reflection (20 points)

### Create `CI-CD-REPORT.md` in your repository:
```markdown
# CI/CD Pipeline Report

## Student Information
- Name: [Your Name]
- Date: [Current Date]
- Repository: https://github.com/[username]/[username].github.io
- Live URL: https://[username].github.io

## Deployment History
Check the Actions tab for complete deployment history.

### Iteration Summary
1. **Initial Deployment**
   - Commit: [commit hash]
   - Time to Deploy: [X minutes]
   - Status: Success/Failed

2. **Iteration 1: Personalization**
   - Commit: [commit hash]
   - Changes Made: [List changes]
   - Deployment Time: [X minutes]

3. **Iteration 2: Deploy Info**
   - Commit: [commit hash]
   - Changes Made: [List changes]
   - Deployment Time: [X minutes]

4. **Iteration 3: Feature Branch**
   - PR Number: #1
   - Branch: feature/add-contact
   - Deployment triggered by: Pull Request merge

## CI/CD Understanding

### What is CI/CD?
[Your explanation in 2-3 sentences]

### Benefits Observed
1. [Benefit 1 you noticed]
2. [Benefit 2 you noticed]
3. [Benefit 3 you noticed]

### Challenges Faced
[Any issues you encountered and how you solved them]

### Real-World Application
[How would this apply to larger software projects? 3-4 sentences]

## Screenshots
- [ ] Initial deployment
- [ ] GitHub Actions tab showing successful builds
- [ ] Live website after final iteration
```

Commit and push this report:
```bash
git add CI-CD-REPORT.md
git commit -m "Add CI/CD pipeline report"
git push origin main
```

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Repository Setup** | 10 | Correctly named repo, proper structure |
| **Initial Code Setup** | 15 | All starter files correctly added |
| **GitHub Pages Activation** | 10 | Successfully enabled and accessible |
| **Iteration 1** | 10 | Personalization deployed successfully |
| **Iteration 2** | 10 | Deploy info added and visible |
| **Iteration 3** | 10 | Feature branch → PR → Merge workflow |
| **Actions/CI History** | 15 | Multiple successful deployments shown |
| **CI/CD Report** | 20 | Complete documentation with screenshots |
| **Total** | 100 | |

### Bonus Points (Optional)
- Add GitHub Actions badge to README (+5)
- Create custom GitHub Action workflow file (+10)
- Add automated testing workflow (+10)

---

## Submission Requirements

### Submit on Course LMS:
1. **GitHub Repository URL:** `https://github.com/[username]/[username].github.io`
2. **Live Website URL:** `https://[username].github.io`
3. **Screenshots:**
   - Your GitHub Actions tab showing successful deployments
   - Your live website
   - Your pull request (from Iteration 3)
4. **Text file** with all your commit hashes (get with `git log --oneline`)

**Due Date:** [Insert Date]  
**Late Policy:** -10% per day

---

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| Site shows 404 | Wait 10 minutes, check repository name matches username |
| CSS not loading | Check exact filename `style.css` and path in HTML |
| Changes not showing | Hard refresh (Ctrl+F5), check Actions tab for build status |
| Build failing | Check Actions tab for error messages |
| Old content showing | Browser cache - try incognito mode |

---

## Understanding the Pipeline

### What's Happening Behind the Scenes?
1. **Push** → You push code to GitHub
2. **Trigger** → GitHub detects changes in main branch
3. **Build** → GitHub Pages builds your static site
4. **Deploy** → Site is deployed to GitHub's servers
5. **Live** → Available at your URL worldwide

### Why This Matters in Software Engineering
- **Automation:** No manual deployment needed
- **Consistency:** Same process every time
- **Visibility:** See deployment status and history
- **Rollback:** Can revert to previous versions
- **Collaboration:** Team members can deploy through PRs

---

## Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Understanding GitHub Actions](https://docs.github.com/en/actions/learn-github-actions)
- [Git Branching Tutorial](https://learngitbranching.js.org/)

## Questions?
- Check the troubleshooting guide
- Visit office hours
- Post in course forum with your repository link

Good luck with your first CI/CD pipeline! 🚀