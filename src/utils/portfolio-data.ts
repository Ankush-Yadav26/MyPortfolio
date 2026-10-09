export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;

export const PHILOSOPHY_ITEMS = [
  {
    title: "Scalable Architecture",
    description:
      "I design modular systems that stay maintainable as products and teams grow.",
    emoji: "💡",
  },
  {
    title: "Performance Engineering",
    description:
      "From bundle strategy to API response times, every layer is optimized for speed.",
    emoji: "⚡",
  },
  {
    title: "Clean Maintainable Code",
    description:
      "Readable patterns, consistent structure, and strong foundations help teams ship faster.",
    emoji: "🧩",
  },
  {
    title: "User-Centered Interfaces",
    description:
      "I create intuitive interfaces that feel polished and solve real user problems clearly.",
    emoji: "🎨",
  },
];

export const STATS = [
  { label: "Projects Completed", value: "8+" },
  { label: "APIs Integrated", value: "60+" },
  { label: "Code Quality", value: "97%" },
  { label: "Experience", value: "1+ Years" },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
  "Framer Motion",
  "Docker",
  "Git",
  "AWS",
];

export const SKILL_CONNECTIONS: [string, string][] = [
  ["React", "Next.js"],
  ["React", "TypeScript"],
  ["Next.js", "Node.js"],
  ["Node.js", "Express"],
  ["Express", "MongoDB"],
  ["Node.js", "PostgreSQL"],
  ["TypeScript", "Tailwind"],
  ["React", "Framer Motion"],
  ["Node.js", "Docker"],
  ["Docker", "AWS"],
  ["Git", "React"],
  ["AWS", "Next.js"],
];

export const PROJECTS = [
  {
    tag: "fullstack",
    title: "MediCare Platform",
    description:
      "A full-stack healthcare appointment platform with doctor listings, patient bookings, secure authentication, Stripe payments, and admin dashboard.",
    image: "/medicare-screenshot.png",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe", "+3"],
    demo: "https://medi-care-gray.vercel.app",
    code: "https://github.com/Ankush-Yadav26/MediCare",
  },
  {
    tag: "fullstack",
    title: "MediKiosk",
    description:
      "An intelligent healthcare triage platform that structures patient symptoms and prescriptions into a doctor-ready brief in under 90 seconds. Features a Doctor Portal, Patient Sign-In, Google-rated consultation booking, and real-time clinical triage powered by AI.",
    image: "/medikiosk-screenshot.jpg",
    stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Tailwind CSS", "+3"],
    demo: "#",
    code: "https://github.com/Ankush-Yadav26/MediKiosk",
  },
  {
    tag: "fullstack",
    title: "Let The Crowd Decide",
    description:
      "A real-time crowd polling platform where users can create polls, share them, and watch results take shape live. Features live poll tracking, expiry management, top-choice analytics, and a clean minimalist UI designed for high engagement.",
    image: "/letcrowddecide-screenshot.jpg",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "REST API", "+2"],
    demo: "https://let-the-crowd-decide.vercel.app/",
    code: "https://github.com/Ankush-Yadav26/Let-The-Crowd-Decide",
  },
];



export const TESTIMONIALS = [
  {
    quote:
      "Working with Ankush was exceptional. He delivered a high-performance dashboard that improved team productivity by 40%.",
    name: "Ashi Kashyap",
    role: "Full Stack Developer",
  },
  {
    quote:
      "Strong technical depth and design sense. The final product felt fast, polished, and exactly aligned with our vision.",
    name: "Varis",
    role: "Full Stack Developer",
  },
  {
    quote:
      "Clear communication, clean code, and premium execution. I would absolutely work with him again on future products.",
    name: "Anmol",
    role: "Java Developer",
  },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Ankush-Yadav26" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ankush-yadav-678a02282/" },
  { label: "Twitter", href: "https://x.com" },
];
