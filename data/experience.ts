export type ExperienceEntry = {
  id: string;
  dates: string;
  company: string;
  location?: string;
  role: string;
  responsibilities: string[];
  status: "placeholder" | "verified";
};

export const experience: ExperienceEntry[] = [
  {
    id: "lil-big-things-head-of-delivery",
    dates: "2026–Present",
    company: "Lil Big Things",
    location: "Remote",
    role: "Head of Delivery",
    responsibilities: [
      "Lead and mentor 4+ engineers and designers, standardizing Agile/Scrum sprint workflows, code reviews, and delivery.",
      "Architected an invite-only counseling MVP delivered in 10 weeks—20% ahead of schedule—with zero critical post-launch regressions.",
      "Built a client portal for real-time video, call scheduling, and content streaming, plus role-based admin onboarding with secure controls.",
      "Centralized resource tracking in a dashboard that improves team visibility across client accounts.",
    ],
    status: "verified",
  },
  {
    id: "lil-big-things-software-development-lead",
    dates: "Mar 2025–2026",
    company: "Lil Big Things",
    location: "Remote",
    role: "Software Development Lead",
    responsibilities: [
      "Standardized frontend SOPs and automated SEO and event tracking, reducing QA cycles and deployment errors.",
      "Built a reusable UI library and technical evaluation framework, improving stakeholder sign-off and design-to-code delivery.",
      "Led a four-person team to first place at the FastGen Hackathon with an AI SEO engine built within 48 hours.",
    ],
    status: "verified",
  },
  {
    id: "lil-big-things-frontend-developer-webflow-architecture-specialist",
    dates: "Jul 2021–Mar 2025",
    company: "Lil Big Things",
    location: "Remote",
    role: "Frontend Developer & Webflow Architecture Specialist",
    responsibilities: [
      "Built modular REST API and custom JavaScript pipelines for real-time, bidirectional CRM sync.",
      "Reached Core Web Vitals targets of LCP < 2.5s and CLS < 0.1.",
      "Delivered dynamic multi-facet filtering, a DOM-parsed table of contents, and GSAP micro-animations.",
    ],
    status: "verified",
  },
  {
    id: "search-homes-india-full-stack-software-engineer-intern",
    dates: "Jan 2021–Jul 2021",
    company: "Search HomesIndia Pvt. Ltd",
    role: "Full Stack Software Engineer Intern",
    responsibilities: [
      "Built a real estate platform with Python, Django, PostgreSQL, and Heroku.",
      "Added multi-parameter indexing and search filtering to reduce property query latency.",
    ],
    status: "verified",
  },
];
