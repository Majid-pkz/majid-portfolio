export interface Exhibit {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  visual: "screenshot" | "travel" | "weather" | "qualification";
  image?: string;
  imageAlt?: string;
  institution?: string;
  subtitle?: string;
  liveUrl?: string;
  sourceUrl?: string;
  demoNote?: string;
  story: { title: string; text: string }[];
}

export const profile = {
  name: "Majid Pourkazemi",
  role: "Software development graduate",
  location: "Sydney, Australia",
  email: "majid.computing@gmail.com",
  github: "https://github.com/Majid-pkz",
  linkedin: "https://www.linkedin.com/in/majid-pourkazemi/",
};

export const projects: Exhibit[] = [
  {
    id: "staff-pantry",
    title: "Staff Pantry",
    category: "Full stack · Internal ordering",
    description: "Employee ordering with a basket, sales cycles, and an administrator workspace.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Turso"],
    visual: "screenshot",
    image: "/projects/staff-pantry.webp",
    imageAlt: "Staff Pantry application catalogue showing the fictional product range",
    liveUrl: "https://staff-pantry-demo.vercel.app/",
    sourceUrl: "https://github.com/Majid-pkz/employee-order-system",
    story: [
      { title: "The problem", text: "A staff-sales workflow needs a clear product list, ordering deadlines, quantity limits, and a practical way for administrators to prepare fulfilment." },
      { title: "What I built", text: "A volunteer project with employee sign-in, a product catalogue and basket, order editing before the deadline, and an administrator workspace for accounts, products, sales cycles, and PDF exports." },
      { title: "Recent engineering work", text: "The 2026 version adds authenticated ownership checks, validated quantities, transactional order handling, and an isolated public demonstration using fictional accounts and inventory. It is deployed on Vercel with hosted libSQL storage through Turso." },
    ],
  },
  {
    id: "travelmate",
    title: "TravelMate",
    category: "Full stack · Travel planning",
    description: "Create, discover, and join trips, with accounts, profiles, and photo uploads.",
    technologies: ["React", "GraphQL", "Express", "MongoDB"],
    visual: "travel",
    image: "/projects/travelmate.webp",
    imageAlt: "Ocean landscape imagery from the original TravelMate application",
    liveUrl: "https://travelmate-mule.onrender.com/",
    sourceUrl: "https://github.com/Majid-pkz/travelmate-deployment/tree/modernize-2026",
    demoNote: "The free API may need to wake up after inactivity. Leave the demo open if live data takes time to appear.",
    story: [
      { title: "The idea", text: "Help travellers find people heading to similar destinations and organise a trip together." },
      { title: "What I built", text: "A React application connected to an Express, GraphQL, and MongoDB backend. Users can create accounts and profiles, search destinations, organise or join trips, and upload profile and trip photos." },
      { title: "Original work and 2026 improvements", text: "The original 2023 application remains in the repository history. Recent work modernised the frontend to React and Vite, updated dependencies, improved form and profile flows, added server-side ownership checks, and made uploaded photos persistent. The portfolio deployment uses Render." },
    ],
  },
  {
    id: "laundry-weather",
    title: "Laundry Weather Planner",
    category: "Web fundamentals · Live API",
    description: "A weather dashboard that suggests practical windows for drying washing outside.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather"],
    visual: "weather",
    liveUrl: "https://simpal-laundry-dashboard.majid-computing.workers.dev/",
    sourceUrl: "https://github.com/Majid-pkz/Simpal-Weather-Dashboard/tree/updated2026",
    story: [
      { title: "The problem", text: "A general weather forecast does not directly answer when it might be useful to hang washing outside." },
      { title: "What I built", text: "A responsive dashboard in plain JavaScript, HTML, and CSS. It searches cities, uses OpenWeather forecast data, and compares rain probability, humidity, temperature, and wind to suggest laundry windows. A labelled sample-data mode supports exploration." },
      { title: "Original work and 2026 improvements", text: "The original dashboard is preserved on main. The updated2026 branch adds the laundry-planning experience and a Cloudflare Worker that keeps the API key on the server. Recommendations use simple planning rules; they are not a scientific drying model." },
    ],
  },
];

export const qualifications: Exhibit[] = [
  {
    id: "software-technology",
    title: "Software Technology",
    category: "Qualification · Degree",
    description: "A foundation in programming, software design, and database development.",
    technologies: ["Programming", "Software design", "Databases"],
    visual: "qualification",
    institution: "Macquarie University",
    subtitle: "Bachelor of Information Technology",
    story: [{ title: "Qualification", text: "Completed a Bachelor of Information Technology specialising in Software Technology at Macquarie University. This study provides the academic foundation behind my development work." }],
  },
  {
    id: "full-stack-bootcamp",
    title: "Full Stack Web Development",
    category: "Qualification · Boot camp",
    description: "Practical web development training across frontend and backend technologies.",
    technologies: ["Frontend", "Backend", "APIs"],
    visual: "qualification",
    institution: "University of Sydney",
    subtitle: "Full Stack Web Development Boot Camp",
    story: [{ title: "Qualification", text: "Completed the University of Sydney Full Stack Web Development Boot Camp in 2023. The training strengthened my practical experience building web applications and connecting interfaces to backend services." }],
  },
  {
    id: "certificate-it",
    title: "Information Technology",
    category: "Qualification · Certificate III",
    description: "Foundational information technology training, completed through TAFE NSW.",
    technologies: ["IT fundamentals", "Completed 2020"],
    visual: "qualification",
    institution: "TAFE NSW",
    subtitle: "Certificate III in Information Technology",
    story: [{ title: "Qualification", text: "Completed Certificate III in Information Technology at TAFE NSW in 2020, before continuing into university study and practical web development training." }],
  },
];
