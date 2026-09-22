/* ============================================================
   PROJECT DATA — single source of truth
   ============================================================
   To add a new project: copy one object below, change the
   values, give it a unique "id" (used in the URL as
   project.html?id=your-id). You do NOT need to create a new
   HTML file — project.html renders every project from here.

   Fields marked optional can be omitted or left as empty
   arrays/strings if you don't have that info yet.
   ============================================================ */

const PROJECTS = [
  {
    id: "health-lanka",
    title: "Health Lanka",
    subtitle: "A healthcare management system designed to streamline patient records and hospital operations.",
    category: "database",
    tags: ["MySQL", "PHP", "HTML/CSS", "JavaScript", "Apache"],
    image: "images/HealthLanka.png",
    badge: "",
    meta: {
      timeline: "4 Months",
      role: "Database Developer",
      status: "Completed",
      team: "3 Members"
    },
    overview: [
      "Health Lanka is a digital healthcare management system built to centralize and simplify hospital workflows. The platform handles patient records, appointment scheduling, and staff coordination, replacing manual paperwork with a secure, database-driven solution.",
      "My role focused on designing and developing the database layer to ensure fast data access, high availability, and data integrity. The system improved hospital efficiency, reduced administrative delays, and gave doctors accurate patient histories instantly.",
      "The goal was a scalable healthcare platform with strong security, smooth integration, and interfaces that work for both medical staff and administrators."
    ],
    features: [
      { title: "Patient Records", description: "Centralized patient database with medical history, prescriptions, and reports." },
      { title: "Appointment Management", description: "Booking and scheduling system with automated reminders and updates." },
      { title: "Doctor Access", description: "Doctors can securely access and update patient records in real time." },
      { title: "Data Security", description: "Role-based access and encryption for sensitive medical data." },
      { title: "Reporting", description: "Analytics dashboards for hospital administrators to track performance." },
      { title: "Hospital Workflow", description: "Digitized staff coordination and resource tracking." }
    ],
    challenges: [
      { title: "Data Accuracy", description: "Real-time synchronization across departments — solved by optimizing queries and using relational integrity constraints." },
      { title: "Security Concerns", description: "Protecting sensitive patient data — applied encryption, authentication, and access-control layers." },
      { title: "Scalability", description: "Needed to support large hospitals — designed indexing and partitioning strategies." }
    ],
    details: {
      client: "Health Lanka Pvt Ltd",
      industry: "Healthcare",
      launch: "August 2024",
      type: "Web Application"
    },
    results: [
      { label: "Efficiency", value: "Reduced paperwork by 70%" },
      { label: "Access Speed", value: "Instant patient data retrieval" },
      { label: "Security", value: "HIPAA-inspired standards applied" }
    ],
    links: { demo: "#", source: "#" }
  },

  {
    id: "planora",
    title: "Planora",
    subtitle: "A wedding-planning web & mobile application designed to simplify event organization for clients and vendors.",
    category: "mobile",
    tags: ["Java (Android)", "SQLite", "PHP", "MySQL", "HTML/CSS", "JavaScript"],
    image: "images/Planora.png",
    badge: "Featured",
    meta: {
      timeline: "6 Months",
      role: "Project Manager & Developer",
      status: "Completed",
      team: "4 Members"
    },
    overview: [
      "Planora is a complete wedding and event-planning solution available as both a web platform and a mobile app. It helps clients manage tasks, discover vendors, and track event progress, while vendors showcase services and packages.",
      "As Project Manager and Developer, I worked on planning, system design, and development of the mobile app — including offline task access using SQLite — and coordinated the web application to keep vendor management consistent in design and functionality.",
      "Planora bridges the gap between clients and vendors with a centralized digital platform for bookings, task management, and event monitoring."
    ],
    features: [
      { title: "Culture-Based Task Lists", description: "Custom task lists based on cultural and traditional event requirements." },
      { title: "Vendor Browsing", description: "Browse and compare vendors with an e-commerce-style interface." },
      { title: "Offline Support", description: "Mobile app supports offline access to event tasks via SQLite." },
      { title: "Client Feedback", description: "Rating and review system to keep vendors accountable." },
      { title: "Task Tracking", description: "Clients manage deadlines and responsibilities in one place." },
      { title: "Web & Mobile Integration", description: "Seamless sync between the web platform and mobile app." }
    ],
    challenges: [
      { title: "Offline Access", description: "Mobile usability without internet — solved with local SQLite storage." },
      { title: "Vendor-Client Coordination", description: "Streamlining listings and bookings — built web dashboards integrated with client-facing mobile features." },
      { title: "Scalability", description: "Supporting many events and vendors — modular backend and database design." }
    ],
    details: {
      client: "Internal Project",
      industry: "Event Management",
      launch: "2025",
      type: "Web & Mobile Application"
    },
    results: [
      { label: "Efficiency", value: "Simplified event task management for clients" },
      { label: "Vendor Visibility", value: "Improved digital presence for vendors" },
      { label: "Usability", value: "Offline support improved client convenience" }
    ],
    links: { demo: "#", source: "#" }
  },

  {
    id: "invoice-hub",
    title: "Invoice Hub",
    subtitle: "A comprehensive invoicing and business management system with real-time analytics, client management, and automated billing.",
    category: "web",
    tags: ["HTML/CSS", "JavaScript", "Firebase", "Node.js"],
    image: "",
    badge: "",
    comingSoon: true,
    overview: [
      "A comprehensive invoicing and business-management system with real-time analytics, client management, and automated billing."
    ],
    links: { demo: "#", source: "#" }
  },

  {
    id: "taskflow-mobile",
    title: "TaskFlow Mobile",
    subtitle: "Android task-management app with offline support, notifications, and team collaboration features.",
    category: "mobile",
    tags: ["Android", "Kotlin", "SQLite", "Firebase"],
    image: "",
    badge: "",
    comingSoon: true,
    overview: [
      "Android task-management app with offline support, notifications, and team collaboration features."
    ],
    links: { demo: "#", source: "#" }
  },

  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-stack e-commerce solution with product management, cart functionality, and payment integration.",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "",
    badge: "",
    comingSoon: true,
    overview: [
      "Full-stack e-commerce solution with product management, cart functionality, and payment integration."
    ],
    links: { demo: "#", source: "#" }
  },

  {
    id: "student-database-system",
    title: "Student Database System",
    subtitle: "Database system for managing student records, grades, and course registrations for educational institutions.",
    category: "database",
    tags: ["MySQL", "PHP", "JavaScript", "Bootstrap"],
    image: "",
    badge: "",
    comingSoon: true,
    overview: [
      "Database system for managing student records, grades, and course registrations for educational institutions."
    ],
    links: { demo: "#", source: "#" }
  }
];
