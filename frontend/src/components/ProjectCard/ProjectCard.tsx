import type { ProjectCardInterface } from "../../types/interfaces";
import Badge from "../Badge/Badge";

interface ProjectCardProps {
  project: ProjectCardInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card bg-base-100 card-md shadow-sm md:w-1/3">
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Repo</button>
          {project.deploymentLink && (
            <button className="btn btn-primary">Deployment</button>
          )}
          <div className="flex gap-1 flex-wrap">
            {project.stack.map((tech) => (
              <Badge text={tech} key={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
