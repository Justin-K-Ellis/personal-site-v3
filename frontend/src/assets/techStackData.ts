import {
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGithub,
  SiHono,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { PiDatabase } from "react-icons/pi";
import type { Tech } from "../types/interfaces";

export const languages: Tech[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-amber-300",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-sky-500",
  },
  {
    name: "SQL",
    icon: PiDatabase,
    color: "text-slate-600",
  },
];

export const frontend: Tech[] = [
  {
    name: "React.js",
    icon: SiReact,
    color: "text-blue-400",
  },
  {
    name: "React Router",
    icon: SiReactrouter,
    color: "text-rose-600",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
];

export const backend: Tech[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-lime-400",
  },
  {
    name: "express.js",
    icon: SiExpress,
    color: "text-black",
  },
  {
    name: "Hono",
    icon: SiHono,
    color: "text-orange-400",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-800",
  },
  {
    name: "Drizzle",
    icon: SiDrizzle,
    color: "text-lime-500",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "text-black",
  },
];

export const tools: Tech[] = [
  {
    name: "git",
    icon: SiGit,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-black",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "text-violet-500",
  },
  {
    name: "Notion",
    icon: SiNotion,
    color: "text-black",
  },
];
