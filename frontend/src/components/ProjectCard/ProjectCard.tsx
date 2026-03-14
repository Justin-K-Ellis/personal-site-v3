import type { ProjectCardInterface } from "../../types/interfaces";
import Badge from "../Badge/Badge";

interface ProjectCardProps {
  project: ProjectCardInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card bg-base-200 card-md shadow-sm md:w-1/4 border border-base-300">
      <div className="card-body">
        <h2 className="card-title text-center">{project.name}</h2>
        <p className="font-light">{project.role}</p>
        <p>{project.description}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Repo</button>
          {project.deploymentLink && (
            <button className="btn btn-primary">Deployment</button>
          )}
        </div>
      </div>
    </div>
  );
}
