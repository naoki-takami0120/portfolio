// Single source of truth for all site content.
// Items marked `placeholder: true` (or containing "TODO") still need real content.

export const profile = {
  name: "Naoki Takami",
  location: "Vancouver, BC",
  role: "Backend Engineer (PHP / Laravel)",
  headline: "I build reliable, high-traffic backend systems with PHP & Laravel.",
  summary:
    "9+ years building and operating web systems — including a game backend serving 2 million registered users. I’ve led a small development team in Canada and coordinated a 20-engineer offshore team in Vietnam.",
  status: "Canadian Permanent Resident — no sponsorship required.",
  email: "naoki.takami.0120@gmail.com",
  linkedin: "https://www.linkedin.com/in/naoki-takami/",
  github: "https://github.com/naoki-takami0120",
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  skills: string[];
  image?: string; // put screenshots in /public/projects/
  link?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Sengoku Night Blood",
    subtitle: "High-traffic social game backend",
    description:
      "Operated and optimized the backend of a social game with 2M registered users and 300K monthly active users.",
    highlights: ["2M registered users", "300K MAU", "Redis/Memcached caching & DB sharding"],
    skills: ["PHP", "MySQL", "Redis", "Memcached"],
    placeholder: true,
  },
  {
    title: "Job Search Platform Refactor",
    subtitle: "Domain-Driven Design & Vue.js migration",
    description:
      "Refactored a job search platform with DDD principles and replaced jQuery with Vue.js on the frontend.",
    highlights: ["40% faster page load", "Improved maintainability"],
    skills: ["PHP", "Vue.js", "DDD", "Ansible"],
    placeholder: true,
  },
  {
    title: "Project Title (TODO)",
    subtitle: "Short descriptor (TODO)",
    description: "One or two sentences describing the problem, your role, and the outcome. (TODO)",
    highlights: ["Key metric (TODO)"],
    skills: ["Laravel", "Vue.js"],
    placeholder: true,
  },
];

export const services = [
  { title: "Backend APIs", description: "Designing and building REST APIs and web backends with Laravel and CakePHP." },
  { title: "Performance & Scale", description: "Caching, query tuning and sharding for systems under heavy load." },
  { title: "Refactoring Legacy Code", description: "Applying DDD to make large codebases maintainable and stable." },
  { title: "Frontend Integration", description: "Vue.js and JavaScript frontends that work cleanly with the backend." },
  { title: "Automation & DevOps", description: "Provisioning with Ansible, CI with Jenkins, scripted deployments." },
  { title: "Team & Project Leadership", description: "Leading developers and coordinating offshore teams with Jira and Scrum." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  placeholder?: boolean;
};

// TODO: replace with the recommendations received on LinkedIn (get permission first).
export const testimonials: Testimonial[] = [
  { quote: "Testimonial text goes here. (TODO)", name: "Colleague Name", role: "Role", company: "Company", placeholder: true },
  { quote: "Testimonial text goes here. (TODO)", name: "Colleague Name", role: "Role", company: "Company", placeholder: true },
  { quote: "Testimonial text goes here. (TODO)", name: "Colleague Name", role: "Role", company: "Company", placeholder: true },
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
