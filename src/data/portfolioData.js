export const personalInfo = {
  name: "Aazeen Fathima M",
  role: "Software Developer | Computer Science Student",
  tagline: "Bridging analytical rigor with low-code efficiency and full-stack software development to engineer purposeful digital solutions.",
  location: "Tamil Nadu, India",
  phone: "+91 9790126515",
  email: "aazeenfathima4@gmail.com",
  linkedin: "https://linkedin.com/in/aazeen-fathima",
  linkedinUsername: "aazeen-fathima",
  github: "https://github.com/aazeenfathima",
  githubUsername: "aazeenfathima",
  resumePath: "/assets/Aazeen_Fathima_Resume.pdf",
  profileImage: "/assets/profile.jpg",
  careerObjective: "To secure a challenging role in software development where I can apply my academic knowledge, practical experience in low-code platforms, and analytical skills to build scalable, efficient, and impactful digital solutions while continuously advancing my professional growth."
};

export const educationHistory = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "PSGR Krishnammal College for Women",
    location: "Coimbatore, India",
    period: "2024 – 2027",
    status: "Undergraduate (Pursuing)",
    description: "Rigorous curriculum focused on software engineering principles, algorithms, database architectures, and distributed systems."
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "CMS Matriculation Higher Secondary School",
    location: "India",
    period: "2023 – 2024",
    status: "Science Stream",
    description: "Specialized in Mathematics, Computer Science, and Physical Sciences with distinguished academic performance."
  },
  {
    degree: "Secondary School Education (10th Grade)",
    institution: "CMS Matriculation Higher Secondary School",
    location: "India",
    period: "2021 – 2022",
    status: "Secondary Certificate",
    description: "Built strong foundations in mathematics, analytical problem solving, and science."
  }
];

export const experienceList = [
  {
    id: "zinlu",
    title: "Full Stack Web Development & Business Optimization Intern",
    company: "ZINLU",
    period: "22 April 2026 – 29 May 2026",
    type: "Internship",
    location: "Remote / Hybrid",
    badge: "Full Stack Engineering",
    highlights: [
      "Gained practical experience in full-stack web development using React.js, implementing responsive UI architectures and component-based frontend designs.",
      "Engineered backend REST APIs, implemented robust server-side business logic, and seamlessly connected client-side applications with relational data layers.",
      "Learned database structuring, data storage/retrieval optimization, and backend–database integration workflows.",
      "Studied real-world enterprise operations — how modern businesses manage enquiries, customer journeys, and internal pipelines — and helped design structured digital solutions for operational challenges.",
      "Conducted rigorous testing and debugging: identified application anomalies, validated API endpoints and frontend interactions, and resolved complex integration bottlenecks.",
      "Authored clean technical documentation, system architectural notes, and comprehensive project deliverables."
    ],
    skills: ["React.js", "REST APIs", "Node.js / Backend Logic", "Database Structuring", "Business Optimization", "API Testing"]
  },
  {
    id: "fcpa",
    title: "Zoho Creator Intern",
    company: "FCPA International Services (Zoho Partner)",
    period: "July 2025 – August 2025",
    type: "Internship",
    location: "Coimbatore, India",
    badge: "Low-Code & Cloud Automation",
    highlights: [
      "Architected and deployed a comprehensive Patient Information Management application utilizing the Zoho Creator low-code enterprise platform.",
      "Configured automated Deluge workflows, complex field validations, and relational data structuring to reduce manual data collection errors.",
      "Collaborated closely with cross-functional technical and healthcare stakeholders to translate complex domain requirements into intuitive cloud solutions.",
      "Gained practical exposure to business process automation, permission-based security models, and enterprise cloud deployment strategies."
    ],
    skills: ["Zoho Creator", "Deluge Scripting", "Cloud Deployment", "Workflow Automation", "Process Optimization", "Data Integrity"]
  },
  {
    id: "elgi",
    title: "Internship Experience",
    company: "ELGI Equipments Limited",
    period: "Internship",
    type: "Industrial Exposure",
    location: "Coimbatore, India",
    badge: "Industry Immersion",
    highlights: [
      "Completed an industry internship at ELGI Equipments Limited, gaining foundational exposure to a world-class engineering, manufacturing, and enterprise business environment.",
      "Observed cross-departmental operations, quality management protocols, and institutional workflow practices."
    ],
    skills: ["Industrial Operations", "Corporate Communication", "Engineering Workflows"]
  }
];

export const projectsList = [
  {
    id: "patient-details-management",
    title: "Patient Details Management Application",
    subtitle: "Low-Code Cloud Healthcare System",
    category: "Low-Code Development",
    platform: "Zoho Creator",
    image: "/assets/projects/zoho-patient.png",
    description: "A secure, enterprise cloud application engineered to streamline patient record keeping, digitize clinical intake workflows, and eliminate manual data entry discrepancies.",
    points: [
      "Developed a centralized cloud-based patient registry enabling healthcare practitioners to access medical histories and consultation logs instantly.",
      "Engineered automated validation rules and dynamic form logic that significantly reduced clerical errors.",
      "Structured optimized relational data retrieval mechanisms, cutting down record lookup times and enhancing administrative productivity."
    ],
    techStack: ["Zoho Creator", "Deluge", "Cloud Database", "Role-Based Access", "Automation Workflows"],
    status: "Completed & Deployed"
  },
  {
    id: "neura-ai-chatbot",
    title: "NEURA — AI Chatbot for Department of Justice",
    subtitle: "Judicial Information & Accessibility Assistant",
    category: "AI & Legal Tech",
    platform: "Wadhwani Ignite Program (AI/Startup)",
    image: "/assets/projects/neura-chatbot.png",
    description: "An AI-powered conversational platform conceptualized to democratize access to justice, deliver plain-language legal guidance, and bridge the public with judicial services.",
    points: [
      "Contributed to the strategic development planning of an AI-powered virtual assistant focused on judicial transparency and public legal service accessibility.",
      "Architected module integration plans for the National Judicial Data Grid (NJDG), automated case status tracking, and eCourts digital portals.",
      "Authored architectural blueprints prioritizing high scalability, structured compliance documentation, and citizen-first intuitive interface interactions."
    ],
    techStack: ["AI Conversational Design", "eCourts / NJDG Integration Planning", "Legal Tech", "System Architecture", "Scalable UX"],
    status: "Startup Initiative / Prototype Blueprint"
  }
];

export const skillCategories = [
  {
    title: "Programming Languages & Algorithms",
    icon: "Code2",
    description: "Foundational and modern programming paradigms with algorithmic problem solving.",
    skills: [
      { name: "Java", level: "Advanced", desc: "Object-oriented architectures & enterprise paradigms" },
      { name: "Python", level: "Proficient", desc: "Data manipulation, automation & scripting" },
      { name: "C & C++", level: "Proficient", desc: "Low-level memory handling & core programming" },
      { name: "Data Structures & Algorithms (DSA)", level: "Advanced", desc: "Complexity optimization, trees, graphs, sorting" }
    ]
  },
  {
    title: "Web & Low-Code Development",
    icon: "Layout",
    description: "Building responsive frontends and rapid cloud enterprise workflows.",
    skills: [
      { name: "React.js", level: "Proficient", desc: "Component architecture, hooks, responsive UI" },
      { name: "Zoho Creator (Low-Code)", level: "Specialist", desc: "Deluge scripting, cloud automation, workflows" },
      { name: "Web Designing Fundamentals", level: "Advanced", desc: "Semantic HTML5, modern CSS3, responsive layout" },
      { name: "Search Engine Optimization (SEO)", level: "Proficient", desc: "Metadata, semantic structure, web performance" }
    ]
  },
  {
    title: "Core Computer Science",
    icon: "Cpu",
    description: "Theoretical grounding and system-level computing fundamentals.",
    skills: [
      { name: "Database Management Systems (DBMS)", level: "Advanced", desc: "Relational modeling, SQL queries, normalization" },
      { name: "Operating Systems", level: "Proficient", desc: "Process scheduling, memory management, file systems" },
      { name: "Data Mining Techniques", level: "Proficient", desc: "Pattern discovery, classification, descriptive analysis" }
    ]
  },
  {
    title: "Tools, Cloud & Platforms",
    icon: "Wrench",
    description: "Modern development toolchains, version control, and cloud environments.",
    skills: [
      { name: "Cloud Deployment", level: "Proficient", desc: "Hosting, environment configurations, continuous delivery" },
      { name: "Workflow Automation", level: "Advanced", desc: "Business process automation & trigger pipelines" },
      { name: "Git & Version Control", level: "Proficient", desc: "Branching workflows, collaboration, GitHub" },
      { name: "Microsoft Office Suite", level: "Expert", desc: "Analytical documentation, Excel analysis & presentations" }
    ]
  }
];

export const achievementsAndCertifications = [
  {
    title: "Wadhwani Ignite Program — Innovation-driven Startup Participant",
    organization: "Wadhwani Foundation",
    year: "2025",
    type: "Innovation & Entrepreneurship",
    description: "Selected participant for high-impact entrepreneurial training, product prototyping (NEURA Legal AI), and market validation methodologies."
  },
  {
    title: "Data Structures and Algorithms Interview Readiness Certification",
    organization: "Technical Assessment Program",
    year: "2024",
    type: "Technical Certification",
    description: "Rigorous credential verifying competence in data structures, time/space complexity analysis, algorithmic optimization, and technical interview problem solving."
  },
  {
    title: "Predictive & Descriptive Data Mining Learnings",
    organization: "Academic Honors & Coursework",
    year: "2024 – 2025",
    type: "Domain Specialization",
    description: "Completed intensive practical modules covering pattern recognition, association rule learning, and predictive modeling techniques."
  },
  {
    title: "Digital Marketing & Cloud Deployment Explorations",
    organization: "Professional Upskilling",
    year: "2024 – 2025",
    type: "Technical Breadth",
    description: "Explored cloud hosting architectures, SEO optimization strategies, and data-driven digital presence methodologies."
  }
];
