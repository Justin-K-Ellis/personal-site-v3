import type { IconType } from "react-icons";
import type { ProjectRole, TechBadge } from "./types";

export interface Contact {
  name: string;
  url: string;
  Icon: IconType;
}

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

export interface Tech {
  name: string;
  icon: IconType;
  color: string;
}
