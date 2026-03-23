import type { ProjectRole, TechBadge } from "./types";

export interface NavBarLink {
  text: string;
  url: string;
}

export interface Project {
  id: number;
  name: string;
  role: ProjectRole[];
  description: string;
  repoLink: string;
  deploymentLink?: string;
  stack: TechBadge[];
}
