import type { ProjectRole, TechBadge } from "./types";

export interface LinkInterface {
  text: string;
  url: string;
}

export interface ProjectCardInterface {
  name: string;
  role: ProjectRole[];
  description: string;
  repoLink: string;
  deploymentLink?: string;
  stack: TechBadge[];
}
