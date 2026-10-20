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

export interface Service {
  title: string;
  description: string;
  proof: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  websites?: { name: string; url: string }[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
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
    "I'm Mamy Jean — a computer science student at BINUS University. I work with Laravel, React and TypeScript to take products from the first commit to a production server.",
  about: [
    "I'm a computer science student at BINUS University in Indonesia, originally from Madagascar. I started on the backend — my team placed 3rd at a national full-stack hackathon in Madagascar, where I built the API in Symfony — and I've since worked across the whole stack.",
    "Today I split my time between coursework and client work at PBM Agency, where I build and optimise landing pages, run A/B tests, wire up analytics and automate deployments. I care about the unglamorous parts: load time, tracking that is actually correct, and releases that don't need babysitting.",
    "I'm based in UTC+7, which overlaps with Asia-Pacific working hours and European mornings.",
  ],
};

export const openTo = ["Remote roles", "Freelance projects"];

export const education = {
  institution: "BINUS University",
  degree: "Bachelor of Computer Science",
  status: "Second year",
  period: "2025 — Present",
};

export const facts = [
  { value: "04", label: "Products shipped and live" },
  { value: "03", label: "Client sites optimised at PBM Agency" },
  { value: "3rd", label: "Place, national full-stack hackathon" },
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
    liveUrl: "https://e2526-wads-b4cc.csbihub.id/",
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

export const services: Service[] = [
  {
    title: "Landing pages & conversion work",
    description:
      "Pages built to be measured: fast first load, clean tracking and variants you can test against each other.",
    proof:
      "A/B-tested variants routed with Cloudflare Workers; Meta Pixel, Microsoft Clarity and custom event tracking.",
  },
  {
    title: "Full-stack web applications",
    description:
      "Dashboards, internal tools and platforms — data model, API and interface delivered as one piece.",
    proof: "Laravel or Node.js back ends, React and Next.js front ends, PostgreSQL or MySQL.",
  },
  {
    title: "E-commerce & integrations",
    description:
      "Storefronts that take real payments and ship real orders, including the third-party APIs in between.",
    proof: "Bagisto on Laravel with Duitku payments and a custom Biteship shipping integration.",
  },
  {
    title: "Performance & deployment",
    description:
      "Making existing sites quicker, and making releases boring through automation.",
    proof:
      "Core Web Vitals, asset optimisation and deferred scripts; GitHub Actions deploys to Linux servers over SSH.",
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
    websites: [
      { name: "Fullbright Indonesia", url: "https://toefl.fullbrightindonesia.org/" },
      { name: "Next Level", url: "https://nextlevel.pbmagency.id/" },
      { name: "Hariyanto Chung Courses", url: "https://course.hariyantochung.com" },
    ],
    tags: ["Laravel", "React", "TypeScript", "Inertia.js", "Cloudflare Workers", "GitHub Actions", "A/B testing"],
  },
  {
    id: "exp-ecommerce",
    role: "Full-Stack E-Commerce Developer",
    company: "Fashion E-Commerce Project",
    period: "2026",
    description: [
      "Developed a full-stack fashion e-commerce platform with Laravel and Bagisto.",
      "Implemented the Vue.js storefront and the product, cart, checkout and order workflows.",
      "Integrated Duitku as the payment gateway and built a custom Biteship integration for shipping rates and delivery workflows.",
      "Configured and deployed the application on a production VPS.",
    ],
    tags: ["Laravel", "Bagisto", "Vue.js", "MySQL", "Duitku", "Biteship", "VPS"],
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
    items: ["TypeScript", "JavaScript", "PHP", "Python", "Go", "Java"],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Laravel",
      "Symfony",
      "Vue.js",
      "Node.js (Express, Fastify)",
      "Tailwind CSS",
      "Redux Toolkit",
      "Prisma",
    ],
  },
  {
    category: "Data & infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Docker",
      "AWS (S3, EC2, Lambda)",
      "Cloudflare Workers",
      "GitHub Actions",
      "Linux / VPS",
      "Vercel",
    ],
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
