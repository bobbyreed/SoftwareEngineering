# Final Exam Review Lecture - Outline
## CSCI 5403 Software Engineering

---

## Lecture Structure Overview
**Total Time:** ~60 minutes
**Format:** Fast-paced review with Q&A opportunities
**Goal:** Synthesize 11 lectures into key exam preparation topics

---

## Part 1: Course Foundation (10 minutes)

### Lecture 1: Welcome & UML Diagrams
- **Course Overview**
  - 8-week intensive software engineering course
  - Focus on practical, industry-relevant skills

- **UML Diagram Types** ⭐ EXAM FOCUS
  - Use Case Diagrams (actors, use cases, relationships)
  - Class Diagrams (classes, attributes, methods, relationships)
  - Sequence Diagrams (objects, lifelines, messages, activation boxes)
  - Activity Diagrams (activities, decisions, flows)
  - When to use each type

- **Software Engineering Fundamentals**
  - Requirements gathering
  - Design principles
  - Tools: draw.io for diagramming

---

## Part 2: Agile & Development Processes (10 minutes)

### Lecture 2: Agile Software Engineering
- **Agile Manifesto** ⭐ EXAM FOCUS
  - 5 core principles (know these!)
  - Individuals and interactions over processes and tools
  - Working software over comprehensive documentation
  - Customer collaboration over contract negotiation
  - Responding to change over following a plan
  - Sustainable development pace

- **User Stories & Scenarios**
  - Format: "As a [user], I want [goal], so that [benefit]"
  - Acceptance criteria
  - Story points and estimation

- **Extreme Programming (XP)**
  - Pair programming
  - Test-driven development (TDD)
  - Continuous integration
  - Simple design
  - Refactoring

- **Scrum Framework** ⭐ EXAM FOCUS
  - Roles: Product Owner, Scrum Master, Development Team
  - Events: Sprint, Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective
  - Artifacts: Product Backlog, Sprint Backlog, Increment
  - Values: Commitment, Courage, Focus, Openness, Respect

### Lecture 4: CI/CD Pipelines
- **CI/CD Concepts** ⭐ EXAM FOCUS
  - Continuous Integration: Automated testing on every commit
  - Continuous Delivery: Code always ready to deploy
  - Continuous Deployment: Automatic production deployment

- **DevSecOps**
  - Security integrated throughout pipeline
  - Shift-left security testing
  - Automated vulnerability scanning

- **DORA Metrics** (Elite Performance Indicators)
  - Deployment frequency
  - Lead time for changes
  - Time to restore service
  - Change failure rate

- **GitHub Actions**
  - Workflow files (.github/workflows)
  - Triggers (push, pull request, schedule)
  - Jobs and steps
  - Automated testing and deployment

---

## Part 3: Software Architecture (12 minutes)

### Lecture 5: Software Architecture Patterns
- **Definition & Importance**
  - System organization and structure
  - High-level decomposition
  - Non-functional requirements

- **Architectural Patterns** ⭐ EXAM FOCUS
  - **Layered Architecture**
    - Presentation, Business Logic, Data Access layers
    - Separation of concerns
    - Maintainability benefits

  - **Client-Server**
    - Request-response model
    - Centralized data management
    - Scalability considerations

  - **Multi-tier Architecture**
    - Presentation tier
    - Application tier
    - Data tier
    - Load balancing

  - **Service-Oriented Architecture (SOA)**
    - Loosely coupled services
    - Service contracts
    - Interoperability

  - **Microservices** (covered in detail in Lecture 9)

- **Technology Stack Decisions**
  - Frontend frameworks
  - Backend languages
  - Database selection
  - Trade-offs and considerations

### Lecture 7: Cloud-based Software
- **Cloud Computing Fundamentals** ⭐ EXAM FOCUS
  - Definition: Remote servers offered for rent
  - Pay-as-you-go model
  - Elastic scaling
  - On-demand provisioning

- **Virtualization**
  - Virtual Machines (VMs)
  - Hypervisors
  - Hardware emulation
  - Complete OS isolation

- **Containers vs VMs** ⭐ EXAM FOCUS
  | Feature | Virtual Machines | Containers |
  |---------|-----------------|------------|
  | Size | Gigabytes | Megabytes |
  | Startup | Minutes | Seconds |
  | OS | Full OS included | Shares host OS |
  | Isolation | Complete | Process-level |
  | Use case | Different OS requirements | Microservices |

- **Docker** ⭐ EXAM FOCUS
  - Dockerfile: Defines container
  - Images: Built from Dockerfiles
  - Containers: Running instances
  - Docker Hub: Registry for sharing
  - Key commands: FROM, WORKDIR, COPY, RUN, EXPOSE, CMD

- **XaaS Models** ⭐ EXAM FOCUS
  - **IaaS (Infrastructure as a Service)**
    - Compute, storage, networking
    - Examples: AWS EC2, Azure VMs
    - You manage: OS, runtime, applications

  - **PaaS (Platform as a Service)**
    - Development frameworks, databases
    - Examples: Heroku, Google App Engine
    - You manage: Applications and data

  - **SaaS (Software as a Service)**
    - Complete applications
    - Examples: Salesforce, Office 365
    - Vendor manages everything

- **Database Architecture Decisions**
  - Multi-tenant: All customers share one database
  - Multi-instance: Each customer has their own database
  - Trade-offs: Cost vs flexibility vs security

- **Scalability** ⭐ EXAM FOCUS
  - Vertical scaling (scale up): Increase server power
  - Horizontal scaling (scale out): Add more servers
  - Auto-scaling policies
  - Load balancing

- **Resilience**
  - Redundancy and replication
  - Active-standby pattern
  - Health monitoring
  - Automatic failover

### Lecture 9: Microservices Architecture
- **Microservices vs Monoliths** ⭐ EXAM FOCUS
  | Aspect | Monolithic | Microservices |
  |--------|-----------|---------------|
  | Structure | Single codebase | Multiple services |
  | Deployment | All-or-nothing | Independent |
  | Scaling | Scale entire app | Scale individual services |
  | Technology | One stack | Polyglot |
  | Failures | Cascading | Isolated |
  | Complexity | Lower initially | Higher distributed complexity |

- **Service Communication** ⭐ EXAM FOCUS
  - **Synchronous**: REST APIs, HTTP requests
  - **Asynchronous**: Message queues (RabbitMQ, Kafka)
  - **Direct**: Service-to-service calls
  - **Indirect**: API Gateway pattern

- **Orchestration vs Choreography** ⭐ EXAM FOCUS
  - **Orchestration**: Central controller directs workflow
  - **Choreography**: Services coordinate through events

- **Data Management**
  - Database per service pattern
  - Eventual consistency
  - SAGA pattern for transactions

- **DevOps Practices**
  - Containerization (Docker)
  - Container orchestration (Kubernetes)
  - Service mesh (Istio)
  - API gateways (Kong)
  - Monitoring and observability

- **Migration Strategy**
  - Strangler Fig pattern
  - Gradual migration from monolith

---

## Part 4: Modern Development Practices (8 minutes)

### Lecture 6: Vibe Coding (AI-Driven Development)
- **What is Vibe Coding?**
  - AI-assisted development using natural language
  - Describe desired outcome, AI generates code
  - Rapid prototyping and iteration

- **Core Technologies**
  - Large Language Models (GPT-4, Claude, Gemini)
  - Multimodal AI (text, voice, images)
  - Conversational memory systems
  - RLHF (Reinforcement Learning with Human Feedback)

- **AI-Native IDEs**
  - Cursor
  - Replit
  - GitHub Copilot
  - Voice-controlled coding (Serenade, Superwhisper)

- **Impact on Product Management**
  - Rapid prototyping (weeks → hours)
  - Democratized creation (non-technical PMs can build)
  - Iterative discovery (real-time feedback)

- **New Skills Required** ⭐ EXAM FOCUS
  - AI Literacy: Understanding ML fundamentals, bias, limitations
  - Prompt Engineering: Clear, concise, comprehensive prompts
  - Data Fluency: Analytical thinking, data pipelines
  - Human-AI Orchestration: Knowing what to delegate
  - Strategic Storytelling: Communicating AI concepts

- **Limitations & Cautions**
  - Unpredictable code output
  - Security vulnerabilities (25-70% of AI code)
  - Debugging challenges
  - Not suitable for production-critical systems initially

- **Best Use Cases**
  - Prototyping
  - Experimentation
  - Proof of concepts
  - Learning and exploration

---

## Part 5: Security & Privacy (10 minutes)

### Lecture 10: Security and Privacy
- **CIA Triad** ⭐ EXAM FOCUS
  - **Confidentiality**: Only authorized access
  - **Integrity**: Data accuracy and trustworthiness
  - **Availability**: Systems accessible when needed

- **Common Attacks** ⭐ EXAM FOCUS (Know examples!)

  - **SQL Injection**
    - Attack: Malicious SQL in user input
    - Example: `admin' OR '1'='1`
    - Prevention: Parameterized queries, input validation

  - **Cross-Site Scripting (XSS)**
    - Attack: Inject malicious scripts into web pages
    - Types: Stored, Reflected, DOM-based
    - Prevention: Input sanitization, Content Security Policy

  - **Session Hijacking**
    - Attack: Steal session tokens/cookies
    - Methods: Packet sniffing, XSS
    - Prevention: HTTPS, secure cookies, session timeouts

  - **Denial of Service (DoS/DDoS)**
    - Attack: Overwhelm system with traffic
    - Impact: System unavailability
    - Prevention: Rate limiting, CDN, auto-scaling

  - **Brute Force Attacks**
    - Attack: Try many password combinations
    - Prevention: Account lockout, MFA, CAPTCHA

  - **Phishing**
    - Attack: Social engineering to steal credentials
    - Prevention: User education, email filtering

- **Authentication** ⭐ EXAM FOCUS
  - Password-based (know best practices)
  - Multi-factor authentication (MFA)
  - Biometric authentication
  - Federated identity (OAuth, SSO)

- **Authorization** ⭐ EXAM FOCUS
  - Role-Based Access Control (RBAC)
  - Access Control Lists (ACLs)
  - Principle of least privilege

- **Encryption** ⭐ EXAM FOCUS
  - **Symmetric**: Same key for encrypt/decrypt (AES)
  - **Asymmetric**: Public/private key pair (RSA)
  - **HTTPS/TLS**: Secure communication
  - **Data states**: In transit, at rest, in use

- **Privacy Regulations** ⭐ EXAM FOCUS
  - **GDPR** (European Union)
    - User rights: Access, rectification, erasure, portability
    - Consent requirements
    - Data breach notification
    - Privacy by design
  - **CCPA** (California)
  - **LGPD** (Brazil)

- **OWASP Top 10**
  - Know the most critical web application security risks
  - Real-world breach examples (Target, Equifax, Facebook)

---

## Part 6: Quality & Reliability (10 minutes)

### Lecture 11: Reliable Programming
- **Quality Attributes** ⭐ EXAM FOCUS
  - **Reliability**: System performs consistently
  - **Security**: Protection from threats
  - **Availability**: Uptime percentage (e.g., 99.99%)
  - **Usability**: User experience quality
  - **Responsiveness**: Speed of system response
  - **Maintainability**: Ease of updates and fixes
  - **Resilience**: Recovery from failures
  - **Scalability**: Handle increased load

- **Three Pillars of Reliable Programming** ⭐ EXAM FOCUS
  1. **Fault Avoidance**: Write better code
  2. **Input Validation**: Prevent bad data
  3. **Failure Management**: Handle errors gracefully

- **Complexity Management**
  - **Coupling**: Dependencies between modules (LOW is better)
  - **Cohesion**: Related functionality grouped (HIGH is better)
  - Guard clauses for early returns
  - Avoid deep nesting

- **Design Patterns** ⭐ EXAM FOCUS
  - **Creational**: Singleton, Factory, Builder
  - **Structural**: Adapter, Decorator, Facade
  - **Behavioral**: Observer, Strategy, Command
  - Know when to use each

- **Refactoring & Code Smells**
  - Long methods
  - Duplicate code
  - Large classes
  - Long parameter lists
  - Divergent change

- **Input Validation** ⭐ EXAM FOCUS
  - Built-in functions
  - Type coercion and checking
  - Regular expressions (regex)
  - Whitelist vs blacklist approaches
  - Format string vulnerabilities

- **Exception Handling**
  - Try-catch blocks
  - Specific exception types
  - Logging errors
  - User-friendly error messages
  - Fail gracefully

- **Failure Management Strategies**
  - Auto-save functionality
  - Transaction rollback
  - Graceful degradation
  - Circuit breaker pattern
  - External service failure handling
  - Logging and monitoring

- **Real-World Example**
  - Netflix: 99.99% availability through microservices, redundancy, chaos engineering

---

## Part 7: Integration & Synthesis (5 minutes)

### How Everything Connects
- **DevOps Pipeline Example**
  ```
  Code → CI/CD (GitHub Actions) → Containers (Docker)
  → Orchestration (Kubernetes) → Cloud (AWS/Azure/GCP)
  → Microservices → Monitoring & Security
  ```

- **Modern Software Stack**
  - Frontend: React/Vue/Angular
  - Backend: Node.js/Python/Java microservices
  - Containers: Docker
  - Orchestration: Kubernetes
  - Cloud: AWS/Azure/GCP
  - Database: SQL/NoSQL (multi-tenant or multi-instance)
  - CI/CD: GitHub Actions
  - Monitoring: Prometheus, Grafana
  - Security: OWASP practices, encryption, MFA

- **Key Decision Points** ⭐ EXAM FOCUS
  1. Monolithic vs Microservices?
  2. IaaS vs PaaS vs SaaS?
  3. Multi-tenant vs Multi-instance database?
  4. VMs vs Containers?
  5. Vertical vs Horizontal scaling?
  6. Orchestration vs Choreography?
  7. Synchronous vs Asynchronous communication?

---

## Part 8: Exam Preparation Tips (5 minutes)

### What to Focus On
1. **Definitions**: Know precise definitions of key terms
2. **Comparisons**: Understand trade-offs (monolith vs microservices, VMs vs containers)
3. **Diagrams**: Be able to create and interpret UML diagrams
4. **Attacks**: Know how common security attacks work and their prevention
5. **Patterns**: Understand when to apply architectural and design patterns
6. **Scrum**: Know roles, events, artifacts, values
7. **CI/CD**: Understand the pipeline and DevOps practices
8. **Cloud Models**: Distinguish IaaS, PaaS, SaaS responsibilities
9. **Quality Attributes**: Define and apply reliability concepts
10. **Real-World Examples**: Recall case studies (Netflix, Spotify, etc.)

### Study Strategy
- Review lecture slides thoroughly
- Practice drawing UML diagrams
- Write out definitions in your own words
- Create comparison tables for key concepts
- Work through code examples (Dockerfile, GitHub Actions workflow)
- Understand the "why" not just the "what"

### Common Question Types to Expect
- **Definition questions**: "What is microservices architecture?"
- **Comparison questions**: "Compare IaaS and PaaS"
- **Diagram questions**: "Draw a sequence diagram for..."
- **Scenario questions**: "Given this situation, which approach would you choose?"
- **Security questions**: "How does SQL injection work? How to prevent it?"
- **Problem-solving**: "Design a scalable architecture for..."

---

## Q&A Session (Remaining time)

### Open Forum
- Questions on any lecture topics
- Clarification of concepts
- Discussion of exam format
- Review of challenging areas

---

## Key Acronyms to Remember
- **UML**: Unified Modeling Language
- **XP**: Extreme Programming
- **TDD**: Test-Driven Development
- **CI/CD**: Continuous Integration/Continuous Delivery/Deployment
- **DevOps**: Development + Operations
- **DevSecOps**: Development + Security + Operations
- **DORA**: DevOps Research and Assessment
- **SOA**: Service-Oriented Architecture
- **REST**: Representational State Transfer
- **API**: Application Programming Interface
- **VM**: Virtual Machine
- **IaaS**: Infrastructure as a Service
- **PaaS**: Platform as a Service
- **SaaS**: Software as a Service
- **SAGA**: Long-running transaction pattern
- **LLM**: Large Language Model
- **RLHF**: Reinforcement Learning with Human Feedback
- **CIA**: Confidentiality, Integrity, Availability
- **XSS**: Cross-Site Scripting
- **DoS**: Denial of Service
- **DDoS**: Distributed Denial of Service
- **MFA**: Multi-Factor Authentication
- **RBAC**: Role-Based Access Control
- **ACL**: Access Control List
- **GDPR**: General Data Protection Regulation
- **CCPA**: California Consumer Privacy Act
- **OWASP**: Open Web Application Security Project

---

## Resources for Continued Study
- Lecture slides (all 11 lectures)
- UML diagram practice (draw.io)
- Docker documentation and tutorials
- OWASP Top 10 security risks
- Agile Manifesto website
- GitHub Actions documentation
- Cloud provider documentation (AWS, Azure, GCP)

---

**Good luck on your final exam! 🎓**
