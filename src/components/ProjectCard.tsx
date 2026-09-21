import { ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
      <ViewTransition
        name={`project-${project.slug}`}
        share="morph"
        default="none"
      >
        <div className="project-card-image">
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              className="project-card-image-content"
            />
          ) : (
            <div className="project-image-placeholder">
              <span>IMAGE COMING SOON</span>
            </div>
          )}
        </div>
      </ViewTransition>

      <div className="project-card-info">
        <div className="project-card-title">
          <span className="project-number">
            {project.number}
          </span>

          <h2>{project.title}</h2>
        </div>

        <div className="project-card-meta">
          <span className="project-card-category">
            {project.category || project.type}
          </span>

          <span className="project-card-year">
            {project.year || "—"}
          </span>
        </div>
      </div>
    </Link>
  );
}