import type { Project } from "../../types/interfaces";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const role = project.role.join(", ");

  return (
    <div className="card bg-base-200 card-md shadow-sm hover:shadow-lg md:w-1/4 border border-base-300">
      <div className="card-body">
        <h2 className="card-title text-center">{project.name}</h2>
        <p className="font-light">{role}</p>
        <p>{project.description}</p>
        <div className="justify-end card-actions">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white"
          >
            Repo
          </a>
          {project.deploymentLink && (
            <a
              href={project.deploymentLink}
              target="_blank"
              className="btn btn-primary text-white"
            >
              Deployment
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
