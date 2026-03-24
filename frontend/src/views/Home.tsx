import Hero from "../components/Hero/Hero";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Title from "../components/Title/Title";
import { projects } from "../assets/projectData";
import { languages, frontend, backend, tools } from "../assets/techStackData";
import TechContainer from "../components/TechContainer/TechContainer";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Projects */}
      <Title text="Projects" />
      <div
        id="project-container"
        className="flex justify-center mx-auto mt-6 gap-6 flex-col md:flex-row md:flex-wrap"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <div className="divider" />
      {/* Tech Stack */}
      <Title text="Tech Stack" />
      {/* Languages */}
      <TechContainer htmlId="languages" subtitle="Languages" tech={languages} />
      {/* Frontend */}
      <TechContainer
        htmlId="frontend-tech"
        subtitle="Frontend"
        tech={frontend}
      />
      {/* Backend */}
      <TechContainer htmlId="backend-tech" subtitle="Backend" tech={backend} />
      {/* Tools */}
      <TechContainer htmlId="tools" subtitle="Tooling, etc." tech={tools} />
    </>
  );
}
