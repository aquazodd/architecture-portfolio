import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { Project } from "@/data/projects";

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="work-projects">
      {projects.map((project) => (
        <Reveal key={project.slug} className="work-project-item">
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </section>
  );
}
