export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  stats?: {
    stars?: number;
    forks?: number;
    views?: string;
  };
  mockupData: {
    title: string;
    image: string;
    metrics: {
      label: string;
      value: string;
      trend?: string;
    }[];
  };
}

export interface SkillGroup {
  category: string;
  items: { name: string; level?: string; iconName?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  websites?: {
    name: string;
    url: string;
  }[];
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

export const personalInfo = {
  name: "Mamy Jean",
  title: "Computer Science Student & Full Stack Engineer",
  tagline:
    "Building high-performance web applications and cloud architectures with a focus on visual polish and system scale.",
  bio: "I am a Computer Science student passionate about building fast, accessible web applications. I focus on modern technologies like React, Next.js, Node.js, and TypeScript, combined with clean design systems and cloud infrastructures.",
  resumeUrl: "#",
  email: "mamymanjakamanana32@gmail.com",
  github: "https://github.com/Mamy32",
  availabilityStatus: "Available for remote work and freelance projects.",
};

export const trustStats = [
  { label: "Years Coding", value: "2+", icon: "Code" },
  { label: "Projects Shipped", value: "18+", icon: "Rocket" },
  { label: "GitHub Commits", value: "1,200+", icon: "GitCommit" },
  { label: "Tech Stack Count", value: "15+", icon: "Cpu" },
];

export const coreStrengths = [
  "Performance-first mindset (Core Web Vitals optimized)",
  "Strong foundation in data structures & algorithms",
  "Experience with scalable database design (SQL/NoSQL)",
  "Responsive and accessible development (WCAG AA)",
  "CI/CD automation & containerized deployments",
  "Typesafe development using TypeScript & strict linting",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Python" },
      { name: "SQL (PostgreSQL)" },
      { name: "Go (Golang)" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js (Express / Fastify)" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "Prisma ORM" },
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      { name: "Git / GitHub Actions" },
      { name: "Docker" },
      { name: "AWS (S3, EC2, Lambda)" },
      { name: "Firebase (Auth, Firestore)" },
      { name: "PostgreSQL" },
      { name: "Vercel / Netlify" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "study-planner",
    title: "Study Planner — Smart Academic Planning",
    description:
      "A full-stack study planning application that helps students organize tasks, manage deadlines, and build optimized study schedules.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    liveUrl: "https://e2526-wads-b4cc.csbihub.id/",
    stats: {
      views: "1.2k",
    },
    mockupData: {
      title: "Study Planner Dashboard",
      image: "/images/study-planner.webp",
      metrics: [
        {
          label: "Active Tasks",
          value: "24",
          trend: "Organized",
        },
        {
          label: "Completed",
          value: "18",
          trend: "+32% this week",
        },
        {
          label: "Study Time",
          value: "14.5h",
          trend: "+2.4h this week",
        },
      ],
    },
  },

  {
    id: "fcms",
    title: "FCMS — Fitness Center Management System",
    description:
      "A full-stack fitness center management system designed to manage members, trainers, memberships, schedules, and gym operations.",
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "React js",
      "REST API",
      "Tailwind CSS",
    ],
    liveUrl: "https://fcms-b958.vercel.app/",
    stats: {
      views: "980",
    },
    mockupData: {
      title: "Fitness Center Management",
      image: "/images/fcms.webp",
      metrics: [
        {
          label: "Members",
          value: "248",
          trend: "+18 this month",
        },
        {
          label: "Active Plans",
          value: "186",
          trend: "75% active",
        },
        {
          label: "Sessions",
          value: "64",
          trend: "+12% this week",
        },
      ],
    },
  },

  {
    id: "shaundju-academy",
    title: "Shaundju Academy — Online Learning Platform",
    description:
      "A modern education platform designed to provide students with accessible learning resources and a professional online learning experience.",
    tags: [
      "Laravel (inertia.js)",
      "PHP",
      "React js",
      "Tailwind CSS",
      "MySQL",
      "typeScript",
      "javascript",
    ],
    liveUrl: "https://shaundjuacademy.com/",
    stats: {
      views: "1.5k",
    },
    mockupData: {
      title: "Shaundju Academy",
      image: "/images/shaundju.webp",
      metrics: [
        {
          label: "Platform",
          value: "Online",
          trend: "Learning",
        },
        {
          label: "Experience",
          value: "Responsive",
          trend: "Mobile Ready",
        },
        {
          label: "Content",
          value: "Courses",
          trend: "Available Online",
        },
      ],
    },
  },
  {
  id: "bagisto-ecommerce",
  title: "Fashion E-Commerce — Bagisto",
  description:
    "A full-stack fashion e-commerce platform built with Bagisto and Laravel, featuring product management, checkout, Duitku payment integration, and custom Biteship shipping integration.",
  tags: [
    "Laravel",
    "Bagisto",
    "Vue.js",
    "PHP",
    "Vite",
    "MySQL",
    "Tailwind CSS",
    "Duitku",
    "Biteship"
  ],
  liveUrl: "https://jfcfashion.com/",
  stats: {
    views: "—"
  },
  mockupData: {
    title: "Fashion E-Commerce Platform",
    image: "/images/ecom.webp",
    metrics: [
      {
        label: "Platform",
        value: "Bagisto",
        trend: "Laravel"
      },
      {
        label: "Payment",
        value: "Duitku",
        trend: "Integrated"
      },
      {
        label: "Shipping",
        value: "Biteship",
        trend: "Integrated"
      }
    ]
  }
},
];

export const experience: ExperienceItem[] = [
{
  id: "exp-1",
  role: "Web Development Intern",
  company: "PBM Agency",
  period: "2026 — Present",

  description: [
    "Optimized multiple client websites to improve performance, design, user experience, and conversion rates.",
    "Developed and maintained landing pages using Laravel, React (Inertia.js), TypeScript, and Tailwind CSS.",
    "Implemented A/B testing by creating and deploying landing page variations to improve conversion performance.",
    "Integrated analytics and tracking tools including Meta Pixel, Microsoft Clarity, and custom event tracking.",
    "Improved website performance through asset optimization, deferred script loading, and Core Web Vitals enhancements.",
    "Configured traffic routing and experimentation using Cloudflare Workers.",
    "Managed deployments using GitHub Actions, SSH, and Linux servers to automate release workflows.",
  ],

  websites: [
    {
      name: "Fullbright Indonesia",
      url: "https://toefl.fullbrightindonesia.org/",
    },
    {
      name: "Next Level",
      url: "https://nextlevel.pbmagency.id/",
    },
    {
      name: "Hariyanto Chung Courses",
      url: "https://course.hariyantochung.com",
    },
  ],

  tags: [
    "Laravel",
    "React",
    "TypeScript",
    "Inertia.js",
    "Tailwind CSS",
    "Cloudflare Workers",
    "GitHub Actions",
    "Linux",
    "A/B Testing",
  ],
},
{
  id: "exp-ecommerce",
  role: "Full-Stack E-Commerce Developer",
  company: "Fashion E-Commerce Project",
  period: "2026",
  description: [
    "Developed a full-stack fashion e-commerce platform using Laravel and Bagisto.",
    "Implemented the Vue.js storefront and integrated product, cart, checkout, and order workflows.",
    "Integrated Duitku as the payment gateway for online checkout.",
    "Implemented custom Biteship shipping integration for delivery rate calculation and shipping workflows.",
    "Worked with MySQL for product, customer, order, and transaction data.",
    "Configured and deployed the application on a production VPS environment."
  ],
  tags: [
    "Laravel",
    "Bagisto",
    "Vue.js",
    "MySQL",
    "Duitku",
    "Biteship",
    "Tailwind CSS",
    "Linux",
    "VPS"
  ]
},
  {
    id: "exp-3",
    role: "Open Source Contributor & Freelance Web Developer",
    company: "Self-Employed",
    period: "2025 — Present",
    description: [
      "Built responsive web applications and landing pages using modern JavaScript frameworks.",
      "Developed personal and academic full-stack projects with React, Next.js, Laravel, and PostgreSQL.",
      "Maintained Git-based workflows and continuously improved frontend performance and user experience.",
    ],
    tags: [
      "React",
      "Next.js",
      "Laravel",
      "TypeScript",
      "PostgreSQL",
      "Git",
      "Tailwind CSS",
    ],
  },

  {
    id: "exp-2",
    role: "Backend Developer",
    company: "National Full-Stack Web Development Hackathon",
    period: "2024",
    description: [
      "Competed in a national full-stack web development hackathon in Madagascar.",
      "Developed the backend application using Symfony and PHP.",
      "Designed backend APIs, implemented business logic, and collaborated with frontend teammates to deliver a complete web application.",
      "Awarded 3rd Place among participating teams.",
    ],
    tags: [
      "Symfony",
      "PHP",
      "REST API",
      "MySQL",
      "Backend Development",
      "Teamwork",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Computer Science",
    institution: "State University of Technology",
    period: "2022 — 2026 (Expected)",
    description: [
      "GPA: 3.8/4.0",
      "Relevant Coursework: Advanced Algorithms, Web Engineering, Database Management Systems, Software Engineering Architecture, Cloud Infrastructure.",
      "Honors: Dean's List, Member of competitive programming team.",
    ],
  },
];