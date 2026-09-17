import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <Navigation />

      <section className="project-hero">
        {project.category && (
          <p className="eyebrow">{project.category}</p>
        )}

        <h1>{project.title}</h1>

        {(project.year || project.location || project.role) && (
          <div className="project-page-meta">
            {project.year && (
              <div>
                <span>YEAR</span>
                <p>{project.year}</p>
              </div>
            )}

            {project.location && (
              <div>
                <span>LOCATION</span>
                <p>{project.location}</p>
              </div>
            )}

            {project.role && (
              <div>
                <span>ROLE</span>
                <p>{project.role}</p>
              </div>
            )}
          </div>
        )}
      </section>

      <section className="project-large-image">
        {project.hasHeroImage && project.heroImage ? (
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="90vw"
            className="project-large-image-content"
            preload
          />
        ) : (
          <span>HERO IMAGE</span>
        )}
      </section>

      {project.description && (
        <section className="project-introduction">
          <p className="eyebrow">PROJECT DESCRIPTION</p>

          <div>
            <p>{project.description}</p>
          </div>
        </section>
      )}

      {project.sections.map((section, index) => (
        <section className="project-section" key={section.id}>
          <div className="project-section-label">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{section.title}</span>
          </div>

          <div className="project-section-content">
            {section.description && (
              <p className="project-section-description">
                {section.description}
              </p>
            )}

            {section.images.length > 0 ? (
              <div className="project-section-images">
                {section.images.map((image, imageIndex) => (
                  <div className="project-section-image" key={image}>
                    <Image
                      src={image}
                      alt={`${project.title} — ${section.title} ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 700px) 100vw, 45vw"
                      className="project-section-image-content"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="project-placeholder project-section-empty">
                PROJECT CONTENT
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="project-back">
        <Link href="/work">
          ← Back to work
        </Link>
      </section>

      <section className="project-footer">
        <Footer />
      </section>
    </main>
  );
}
