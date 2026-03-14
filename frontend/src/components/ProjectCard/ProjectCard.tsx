import type { ProjectCardInterface } from "../../types/interfaces";
import arrayToString from "../../../../backend/src/lib/arrayToString";

interface ProjectCardProps {
  project: ProjectCardInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const role = arrayToString(project.role);

  return (
    <div className="card bg-base-200 card-md shadow-sm md:w-1/4 border border-base-300">
      <div className="card-body">
        <h2 className="card-title text-center">{project.name}</h2>
        <p className="font-light">{role}</p>
        <p>{project.description}</p>
        <div className="justify-end card-actions">
          <a href={project.repoLink} target="_blank">
            <button className="btn btn-primary">Repo</button>
          </a>
          {project.deploymentLink && (
            <a href={project.deploymentLink} target="_blank">
              <button className="btn btn-primary">Deployment</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
