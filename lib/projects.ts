export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string; // image used in cards
  heroImage?: string; // large header image for modal (fallback to thumbnail)
  technologies: string[];
  links: {
    website?: string;
    source?: string;
    demo?: string;
    docs?: string;
  };
  role?: string;
  company?: string;
  type?: "personal" | "work" | "freelance" | "academic";
  period?: { start: string; end?: string };
  tags?: string[];
  highlights?: string[]; // optional bullets to showcase key aspects
};

export const projects: Project[] = [
  {
    id: "DuoDate",
    title: "DuoDate",
    summary:
      "Created a collaborative app with React 18, TypeScript, and Firebase, enabling couples to plan and sync experiences in real time.",
    description:
      "• Implemented offline-first architecture with TanStack Query + Firestore, ensuring seamless use without connectivity.\n• Built interactive features (spinning wheel, memory diary) with React + Firebase, enhancing engagement.",
    thumbnail: "/DuoDate.png",
    heroImage: "/DuoDate.png",
    technologies: [
      "TypeScript",
      "React.js",
      "React 18",
      "Firebase",
      "Firestore",
      "TanStack Query",
    ],
    links: {
      website: "#",
      source: "#",
    },
    role: "Full‑stack Developer",
    type: "personal",
    period: { start: "Sep 2025", end: "Present" },
    tags: ["Realtime", "Offline-first", "Collaboration"],
    highlights: [
      "Realtime sync for shared planning and experiences",
      "Offline-first with TanStack Query + Firestore",
      "Interactive features: spinning wheel, memory diary",
    ],
  },
  {
    id: "Figer",
    title: "FIGR",
    summary:
      "Developed a budgeting app with React, TypeScript, and Supabase, automating subscription tracking and reconciliation.",
    description:
      "• Built real-time dashboards with Supabase Edge Functions, improving financial visibility for users.\n• Designed a mobile-first UI with Tailwind + shadcn-ui, ensuring responsiveness across devices.",
    thumbnail: "/Figer.png",
    technologies: ["TypeScript", "React.js", "Supabase", "TailwindCSS", "shadcn/ui"],
    links: { website: "#", source: "#" },
    role: "Full‑stack Developer",
    company: "",
    type: "work",
    period: { start: "May 2025", end: "Aug 2025" },
    tags: ["Budgeting", "Realtime", "Mobile-first"],
  },
  {
    id: "ml-pipeline",
    title: "ML Inference Pipeline",
    summary:
      "Containerized pipeline for batch + realtime inference with monitoring and rollbacks.",
    description:
      "Built a resilient service with blue/green deployment strategy, metrics, and tracing. Included dataset versioning and configurable preprocessing stages.",
    thumbnail: "/placeholder.svg?height=250&width=310",
    technologies: ["Python", "Docker", "PostgreSQL"],
    links: { source: "#" },
    role: "Backend Engineer",
    type: "freelance",
    period: { start: "2022" },
    tags: ["MLOps", "Observability", "CI/CD"],
  },
];

