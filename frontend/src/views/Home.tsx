import Hero from "../components/Hero/Hero";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Title from "../components/Title/Title";
import { projects } from "../assets/projectData";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Projects */}
      <Title text="Projects" />
      <div
        id="project-container"
        className="flex justify-center mx-auto gap-2 flex-col md:flex-wrap"
      >
        {projects.map((project) => (
          <ProjectCard project={project} key={project.repoLink} />
        ))}
      </div>
    </>
  );
}
