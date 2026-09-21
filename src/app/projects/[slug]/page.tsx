import { ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import PageTransition from "@/components/PageTransition";
import ProjectMeta from "@/components/ProjectMeta";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

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
    <PageTransition>
      <main className="project-page">
        <section className="project-hero">
          {project.category && (
            <p className="eyebrow">{project.category}</p>
          )}

          <h1>{project.title}</h1>

          <ProjectMeta project={project} />
        </section>

        <ViewTransition
          name={`project-${project.slug}`}
          share="morph"
          default="none"
        >
          <section className="project-large-image">
            {project.heroImage ? (
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
        </ViewTransition>

        {project.description && (
          <section className="project-introduction">
            <p className="eyebrow">PROJECT DESCRIPTION</p>

            <Reveal>
              <p>{project.description}</p>
            </Reveal>
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

              <Reveal variant="wipe">
                <ImageGallery
                  images={section.images}
                  alt={`${project.title} — ${section.title}`}
                  fit={section.fit}
                />
              </Reveal>
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
    </PageTransition>
  );
}
