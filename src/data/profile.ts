// Single source of truth for all site content.
// Items marked `placeholder: true` (or containing "TODO") still need real content.

import { Gauge, MonitorSmartphone, Server, Users, Workflow, Wrench, type LucideIcon } from "lucide-react";

export const profile = {
  name: "Naoki Takami",
  location: "Vancouver, BC",
  role: "Backend Engineer (PHP / Laravel)",
  headline: "I build reliable, high-traffic backend systems with PHP & Laravel.",
  summary:
    "9+ years building and operating web systems — including the backend of a mobile game that passed 2 million downloads in its first month. I’ve led a small development team in Canada and coordinated a 20-engineer offshore team in Vietnam.",
  status: "Canadian Permanent Resident — no sponsorship required.",
  email: "naoki.takami.0120@gmail.com",
  linkedin: "https://www.linkedin.com/in/naoki-takami/",
  github: "https://github.com/naoki-takami0120",
};

export type Project = {
  period: string; // e.g. "2021 – 2023 · Pace Creative" (shown above the title)
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  skills: string[];
  image?: string; // put images in /public/projects/
  imageAlt?: string; // describe the image if it carries information; leave empty if decorative
  link?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  // Newest first (left to right on desktop).
  {
    period: "2021 – 2023 · Pace Creative",
    title: "Client Websites at Pace Creative",
    subtitle: "Custom WordPress themes & plugins for a Vancouver agency",
    description:
      "I developed and maintained custom WordPress themes and plugins in PHP for 10+ client websites, working with project managers and designers in English. I also led a small developer team, running team meetings and helping teammates solve technical problems.",
    highlights: ["10+ client websites", "Custom themes & plugins", "Led a small dev team"],
    skills: ["PHP", "WordPress", "JavaScript", "HTML/CSS"],
    image: "/projects/pace-creative.svg",
    imageAlt: "Pace Creative logo",
  },
  {
    period: "2017 – 2021 · Freelance",
    title: "Freelance Backend Projects",
    subtitle: "Laravel + DDD rebuild · jQuery → Vue.js migration",
    description:
      "geechs job, a job site for freelance IT engineers: I joined the tech lead as a backend engineer to rebuild the site with Laravel and Domain-Driven Design, which made it easier to maintain and reduced bugs. An EPARK salon site: I replaced jQuery with Vue.js, starting with the slowest page, the top page, and cut its load time by 40%.",
    highlights: ["40% faster page load", "Laravel + DDD rebuild", "Easier maintenance, fewer bugs"],
    skills: ["PHP", "Laravel", "DDD", "Vue.js"],
  },
  {
    period: "2014 – 2017 · CLINKS",
    title: "Sengoku Night Blood",
    subtitle: "Backend for a mobile game (iOS / Android)",
    description:
      "A free-to-play romance game from Marvelous, KADOKAWA and Otomate. I joined during pre-launch development and worked on its PHP backend through the May 2017 launch, using Redis/Memcached caching and database sharding so it could handle 2M downloads in under a month.",
    highlights: ["2M downloads in under a month", "600K pre-registrations", "Redis/Memcached caching & DB sharding"],
    skills: ["PHP", "MySQL", "Redis", "Memcached", "Shell scripts"],
    image: "/projects/sengoku-night-blood.jpg",
  },
  {
    period: "2014 – 2017 · CLINKS",
    title: "Dragon League X / A",
    subtitle: "Backend for a real-time team battle game (iOS / Android)",
    description:
      "The mobile versions of Asobism's real-time 5-vs-5 team battle RPG, whose original GREE version had 850K registered users. Every two weeks I added new battle skills through the backend API, fixed bugs, and took each release from testing to production. As team leader, I also reviewed the team's code.",
    highlights: ["New battle skills every 2 weeks", "Testing to production deploys", "Team lead & code reviews"],
    skills: ["PHP", "Backend API", "Shell scripts"],
    image: "/projects/dragon-league.jpg",
    imageAlt: "Dragon League X key art",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon; // decorative line icon from lucide-react (https://lucide.dev/icons)
};

export const services: Service[] = [
  { title: "Backend APIs", icon: Server, description: "Designing and building REST APIs and web backends with Laravel and CakePHP." },
  { title: "Performance & Scale", icon: Gauge, description: "Caching, query tuning and sharding for systems under heavy load." },
  { title: "Refactoring Legacy Code", icon: Wrench, description: "Applying DDD to make large codebases maintainable and stable." },
  { title: "Frontend Integration", icon: MonitorSmartphone, description: "Vue.js and JavaScript frontends that work cleanly with the backend." },
  { title: "Automation & DevOps", icon: Workflow, description: "Provisioning with Ansible, CI with Jenkins, scripted deployments." },
  { title: "Team & Project Leadership", icon: Users, description: "Leading developers and coordinating offshore teams with Jira and Scrum." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string; // their current title
  company: string; // where we worked together (shown as "Worked with me at …"), not their current employer
  photo?: string; // e.g. "/testimonials/jane.jpg" (file in /public/testimonials/) — only with their permission
  linkedin?: string; // their LinkedIn profile URL; links their name
  placeholder?: boolean;
};

// In `quote`, wrap the key phrase in *asterisks* to show it in italics.

// From LinkedIn recommendations (May 2023). Excerpts are verbatim; "…" marks omitted text.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Naoki is the kind of programmer that *any designer would be happy to work with*. … When he zeroes in on any problem or complication, he won't rest until he is able to solve it, aiming for a clean and elegant solution.",
    name: "Jorge D. Gonzalez",
    role: "Visual Designer",
    company: "Pace Creative",
    linkedin: "https://www.linkedin.com/in/jorge-d-gonzalez/",
    photo: "/testimonials/jorge.jpeg",
  },
  {
    quote:
      "He consistently demonstrated strong technical skills and *a deep understanding of both front-end and back-end development*. He also possesses excellent communication skills, making it easy to work with him on any project.",
    name: "John Lee",
    role: "Graphic Designer",
    company: "Pace Creative",
    linkedin: "https://www.linkedin.com/in/johnldesign/",
    photo: "/testimonials/john.jpeg",
  },
  {
    quote:
      "He is highly skilled in PHP, HTML and has consistently developed *high-quality, front and back-end web and application solutions* for the team. He is also a good listener and always being patient and helpful to the UX designers.",
    name: "Lok Law",
    role: "UX Designer",
    company: "Pace Creative",
    linkedin: "https://www.linkedin.com/in/lok-law/",
    photo: "/testimonials/lok.jpeg",
  },
];

export const techStack: { category: string; items: string[] }[] = [
  { category: "Backend", items: ["PHP", "Laravel", "CakePHP", "Python", "MySQL", "Redis", "Memcached"] },
  { category: "Frontend", items: ["JavaScript", "Vue.js", "jQuery", "HTML/CSS", "WordPress"] },
  { category: "Infrastructure & Tools", items: ["Ansible", "Jenkins", "Selenium", "Git", "Jira"] },
  { category: "Practices", items: ["Domain-Driven Design", "Agile/Scrum", "Code Review"] },
];

export type HistoryItem = {
  period: string;
  title: string;
  org: string;
  place: string;
  points: string[];
};

// Newest first, by start year (work and education interleaved).
export const history: HistoryItem[] = [
  {
    period: "2023 – 2026",
    title: "Technical Project Manager / PMO",
    org: "TANAAKK",
    place: "Japan",
    points: ["Managed 3 concurrent projects with a 20-engineer offshore team in Vietnam."],
  },
  {
    period: "2021 – 2023",
    title: "Web Developer",
    org: "Pace Creative",
    place: "Vancouver, Canada",
    points: ["Built custom WordPress themes and plugins for 10+ client sites; led a small dev team."],
  },
  {
    period: "2020 – 2022",
    title: "Diploma, Web and Mobile App Development (Co-op)",
    org: "Cornerstone International Community College",
    place: "Vancouver, Canada",
    points: [],
  },
  {
    period: "2017 – 2021",
    title: "Web Developer (Self-employed)",
    org: "Freelance",
    place: "Tokyo / Vancouver",
    points: ["DDD refactoring, jQuery → Vue.js migration (40% faster load), Ansible automation."],
  },
  {
    period: "2014 – 2017",
    title: "Backend Developer",
    org: "CLINKS Inc.",
    place: "Japan",
    points: ["Ran a game backend for 2M users as team lead and code reviewer."],
  },
  {
    period: "2010 – 2014",
    title: "B.Sc. Information Science and Technology",
    org: "Sophia University",
    place: "Tokyo, Japan",
    points: [],
  },
];
