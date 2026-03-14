import type { ProjectCardInterface } from "../types/interfaces";

export const projects: ProjectCardInterface[] = [
  {
    name: "Japan Events",
    role: ["Project Lead", "Fullstack Engineer"],
    description:
      "An app that indexes events from around Japan and let's users find them with a rich search interface, save interesting events, and anonymously share them.",
    repoLink: "https://github.com/Event-Curator/event-curator",
    deploymentLink: "https://eventsjp.com/",
    stack: [
      "React",
      "React Router",
      "Express",
      "PostgreSQL",
      "Knex.js",
      "Firebase auth",
      "Tailwind",
    ],
  },
  {
    name: "Recipe Wrangler",
    role: ["Fullstack Engineer"],
    description:
      "Allows users to search for recipes, creates check lists for ingredients and cooking directions. Logged in users can also save recipes and create their own.",
    repoLink: "https://github.com/Justin-K-Ellis/recipe_wrangler_client",
    deploymentLink: "https://recipe-wrangler-client.vercel.app/home",
    stack: [
      "TypeScript",
      "Next",
      "Express",
      "PostgreSQL",
      "Firebase auth",
      "Spoonacular API",
    ],
  },
  {
    name: "Washoku Walker",
    role: ["Fullstack Engineer"],
    description:
      "Helps users find great restaurants in Japan. Users who want to find a specific food can get a selection of restaurants by dish and area, or get a list of highly-rated restaurants near them.",
    repoLink: "https://github.com/Justin-K-Ellis/Washoku-Walker",
    deploymentLink: "https://washoku-walker.onrender.com/",
    stack: [
      "TypeScript",
      "JavaScript",
      "Vue",
      "Express",
      "PostgreSQL",
      "Google Places API",
      "Tailwind",
      "daisyUI",
    ],
  },
  {
    name: "Personal Site (this site)",
    role: ["Fullstack Engineer"],
    description:
      "My personal site for sharing my projects, tech stack and info about me.",
    repoLink: "#",
    deploymentLink: "#",
    stack: ["TypeScript", "Next", "next-intl", "Tailwind", "shadcn/ui"],
  },
  {
    name: "Course Managment",
    role: ["Fullstack Engineer"],
    description:
      "A fullstack learning management system that allows users to create, read, update, and delete information about courses, instructors, and students.",
    repoLink: "https://github.com/Justin-K-Ellis/course-management",
    stack: [
      "JavaScript",
      "React",
      "React Router",
      "Express",
      "PostgreSQL",
      "Tailwind",
    ],
  },
  {
    name: "Nagano Quest",
    role: ["Frontend Engineer"],
    description:
      "A fun little choose your own adventure game that takes users through Nagano Prefecture, Japan.",
    repoLink: "https://github.com/Justin-K-Ellis/NaganoQuest.js",
    deploymentLink: "https://nagano-quest-js.vercel.app/",
    stack: ["JavaScript", "React", "React Router", "Tailwind"],
  },
];
