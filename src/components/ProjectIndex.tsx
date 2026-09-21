"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { Project } from "@/data/projects";

type ProjectIndexProps = {
  projects: Project[];
};

const PREVIEW_WIDTH = 320;
const PREVIEW_HEIGHT = 220;
const EDGE = 16;

export default function ProjectIndex({ projects }: ProjectIndexProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.5 });

  // Places the preview beside the cursor, kept inside the viewport.
  // `jump` snaps it into place so it doesn't fly in from the corner.
  const place = (clientX: number, clientY: number, jump = false) => {
    const nextX = Math.min(
      clientX + 28,
      window.innerWidth - PREVIEW_WIDTH - EDGE
    );

    const nextY = Math.min(
      Math.max(clientY - PREVIEW_HEIGHT / 2, EDGE),
      window.innerHeight - PREVIEW_HEIGHT - EDGE
    );

    x.set(nextX);
    y.set(nextY);

    if (jump) {
      springX.jump(nextX);
      springY.jump(nextY);
    }
  };

  const handleFocus = (
    event: React.FocusEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    // No cursor to follow, so park the preview at the right of the row.
    const rect = event.currentTarget.getBoundingClientRect();

    place(
      window.innerWidth - PREVIEW_WIDTH - 60,
      rect.top + rect.height / 2,
      true
    );

    setActiveSlug(slug);
  };

  return (
    <section className="work-index">
      <ul
        className="index-list"
        data-hovering={activeSlug !== null}
        onMouseEnter={(event) =>
          place(event.clientX, event.clientY, true)
        }
        onMouseMove={(event) => place(event.clientX, event.clientY)}
        onMouseLeave={() => setActiveSlug(null)}
      >
        {projects.map((project) => (
          <li
            key={project.slug}
            className="index-row"
            data-active={activeSlug === project.slug}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="index-link"
              onMouseEnter={() => setActiveSlug(project.slug)}
              onFocus={(event) => handleFocus(event, project.slug)}
              onBlur={() => setActiveSlug(null)}
            >
              <span className="project-number">{project.number}</span>

              <span className="index-title">{project.title}</span>

              <span className="index-category">
                {project.category || project.type}
              </span>

              <span className="index-year">{project.year || "—"}</span>

              {project.heroImage && (
                <span className="index-thumb">
                  <Image
                    src={project.heroImage}
                    alt=""
                    fill
                    sizes="96px"
                    className="index-thumb-image"
                  />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        className="index-preview"
        aria-hidden="true"
        data-visible={activeSlug !== null}
        style={{
          x: reduceMotion ? x : springX,
          y: reduceMotion ? y : springY,
          width: PREVIEW_WIDTH,
          height: PREVIEW_HEIGHT,
        }}
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="index-preview-item"
            data-active={activeSlug === project.slug}
          >
            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt=""
                fill
                sizes={`${PREVIEW_WIDTH}px`}
                className="index-preview-image"
              />
            ) : (
              <span>IMAGE COMING SOON</span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
