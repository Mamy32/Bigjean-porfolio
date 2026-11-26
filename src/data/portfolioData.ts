export interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl: string;
  image: string;
}

export interface Highlight {
  label: string;
  title: string;
  detail: string;
  period?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  websites?: { name: string; url: string }[];
  featured?: { name: string; url: string; summary: string };
  tags: string[];
}

export interface SkillGroup {
  category: string;
  /** Used in projects that are live in production */
  production: string[];
  /** Used in coursework, hackathons and personal projects */
  familiar: string[];
}

export const personalInfo = {
  name: "Mamy Jean",
  role: "Full-Stack Developer",
  email: "mamymanjakamanana32@gmail.com",
  github: "https://github.com/Mamy32",
  location: "Indonesia",
  timeZone: "Asia/Jakarta",
  utcOffset: "UTC+7",
  intro:
    "Computer Science student at BINUS University and Full-Stack Developer specialising in Laravel, React and TypeScript. I build end-to-end web applications — from system architecture and APIs to responsive interfaces and production deployment.",
  coreStack: ["Laravel", "React", "TypeScript"],
  aboutLead:
    "I believe great software is built at the intersection of thoughtful engineering, practical problem-solving and continuous learning.",
  about: [
    "I'm Mamy Jean, a Computer Science student at BINUS University and a full-stack developer, originally from Madagascar and now based in Jakarta, Indonesia.",
    "My work focuses on functional, high-performance web applications built with Laravel, React and TypeScript. I enjoy taking an idea through every stage: designing the backend and APIs, building the interface, and deploying it to production.",
    "Beyond the code, I've optimised website performance, run A/B tests, integrated analytics and used that data to improve user experience on real client sites at PBM Agency. I started on the backend — earning 3rd place nationally at Madagascar's Full-Stack Web Development Hackathon — and I'm now looking to contribute to teams building meaningful products, anywhere in the world.",
  ],
  photo: "/images/mamy-jean.webp",
};

export const openTo = ["Remote roles", "Freelance projects"];

export const education = {
  institution: "BINUS University",
  degree: "Bachelor of Computer Science",
  period: "2025 — Present",
};

export const highlights: Highlight[] = [
  {
    label: "Achievement",
    title: "3rd place, national hackathon",
    detail: "Full-Stack Web Development Hackathon, Madagascar",
    period: "2024",
  },
  {
    label: "Education",
    title: "BINUS University",
    detail: "Bachelor of Computer Science",
    period: "2025 — Present",
  },
  {
    label: "Experience",
    title: "Web Development Intern",
    detail: "PBM Agency — client sites, A/B testing, CI/CD",
    period: "2026",
  },
  {
    label: "Background",
    title: "Global perspective",
    detail: "Madagascar · Indonesia · Remote-ready (UTC+7)",
  },
];

export const facts = [
  { value: "04", label: "Live projects shipped to production" },
  { value: "03", label: "Client websites optimised at PBM Agency" },
  { value: "3rd", label: "Place at a national full-stack hackathon" },
];

export const projects: Project[] = [
  {
    id: "bagisto-ecommerce",
    name: "JFC Fashion",
    type: "E-commerce",
    description:
      "A fashion storefront built on Bagisto and Laravel, covering the full path from catalogue to paid, shipped order.",
    highlights: [
      "Vue.js storefront with product, cart, checkout and order workflows",
      "Duitku payment gateway integration for online checkout",
      "Custom Biteship integration for live shipping-rate calculation",
      "Configured and deployed on a production VPS",
    ],
    tags: ["Laravel", "Bagisto", "Vue.js", "MySQL", "Tailwind CSS", "Duitku", "Biteship"],
    liveUrl: "https://jfcfashion.com/",
    image: "/images/ecom.webp",
  },
  {
    id: "study-planner",
    name: "Study Planner",
    type: "Web application",
    description:
      "A full-stack planning app that helps students organise tasks, manage deadlines and build a study schedule they can keep.",
    highlights: [
      "Tasks, calendar, study timer and analytics in one dashboard",
      "Next.js front end on an Express API",
      "PostgreSQL data layer modelled with Prisma",
    ],
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    liveUrl: "https://wads-final-project-uoei.vercel.app/",
    image: "/images/study-planner.webp",
  },
  {
    id: "shaundju-academy",
    name: "Shaundju Academy",
    type: "Learning platform",
    description:
      "An online education platform that gives students accessible learning resources in a clean, responsive interface.",
    highlights: [
      "Laravel back end with a React front end through Inertia.js",
      "Typed UI in TypeScript, styled with Tailwind CSS",
      "Responsive layout for mobile learners",
    ],
    tags: ["Laravel", "Inertia.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    liveUrl: "https://shaundjuacademy.com/",
    image: "/images/shaundju.webp",
  },
  {
    id: "fcms",
    name: "FCMS",
    type: "Management system",
    description:
      "A fitness centre management system for running a gym day to day: members, trainers, memberships and schedules.",
    highlights: [
      "Laravel REST API consumed by a React front end",
      "Member, trainer and membership-plan management",
      "Class and session scheduling",
    ],
    tags: ["Laravel", "PHP", "React", "REST API", "MySQL", "Tailwind CSS"],
    liveUrl: "https://fcms-b958.vercel.app/",
    image: "/images/fcms.webp",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "exp-pbm",
    role: "Web Development Intern",
    company: "PBM Agency",
    period: "2026",
    description: [
      "Optimised multiple client websites for performance, design, user experience and conversion rate.",
      "Built and maintained landing pages with Laravel, React (Inertia.js), TypeScript and Tailwind CSS.",
      "Ran A/B tests by building and deploying landing page variations, with traffic routing on Cloudflare Workers.",
      "Integrated analytics and tracking: Meta Pixel, Microsoft Clarity and custom event tracking.",
      "Improved Core Web Vitals through asset optimisation and deferred script loading.",
      "Automated releases with GitHub Actions, SSH and Linux servers.",
    ],
    featured: {
      name: "JFC Fashion — E-commerce",
      url: "https://jfcfashion.com/",
      summary:
        "Built a fashion storefront on Laravel and Bagisto with Duitku payments, a custom Biteship shipping-rate integration and a production VPS deployment.",
    },
    websites: [
      { name: "Fullbright Indonesia", url: "https://toefl.fullbrightindonesia.org/" },
      { name: "Next Level", url: "https://nextlevel.pbmagency.id/" },
      { name: "Hariyanto Chung Courses", url: "https://course.hariyantochung.com" },
    ],
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "Inertia.js",
      "Vue.js",
      "Bagisto",
      "MySQL",
      "Cloudflare Workers",
      "GitHub Actions",
    ],
  },
  {
    id: "exp-freelance",
    role: "Freelance Web Developer & Open Source Contributor",
    company: "Self-employed",
    period: "2025",
    description: [
      "Built responsive web applications and landing pages with modern JavaScript frameworks.",
      "Developed full-stack projects with React, Next.js, Laravel and PostgreSQL.",
      "Maintained Git-based workflows and kept improving front-end performance and user experience.",
    ],
    tags: ["React", "Next.js", "Laravel", "TypeScript", "PostgreSQL"],
  },
  {
    id: "exp-hackathon",
    role: "Backend Developer — 3rd place",
    company: "National Full-Stack Web Development Hackathon, Madagascar",
    period: "2024",
    description: [
      "Built the backend application in Symfony and PHP: API design and business logic.",
      "Worked with front-end teammates to deliver a complete web application under time pressure.",
      "Awarded 3rd place among participating teams.",
    ],
    tags: ["Symfony", "PHP", "REST API", "MySQL"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    production: ["TypeScript", "JavaScript", "PHP"],
    familiar: ["Python", "Go", "Java"],
  },
  {
    category: "Frameworks & libraries",
    production: ["Laravel", "React", "Inertia.js", "Vue.js", "Next.js", "Node.js (Express)", "Tailwind CSS", "Prisma"],
    familiar: ["Symfony", "Fastify", "Redux Toolkit"],
  },
  {
    category: "Data & infrastructure",
    production: ["MySQL", "PostgreSQL", "Linux / VPS", "GitHub Actions", "Cloudflare Workers", "Vercel"],
    familiar: ["Docker", "Firebase", "AWS (S3, EC2, Lambda)"],
  },
];

export const marqueeItems = [
  "Laravel",
  "React",
  "TypeScript",
  "Next.js",
  "Inertia.js",
  "Vue.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Cloudflare Workers",
  "GitHub Actions",
];
