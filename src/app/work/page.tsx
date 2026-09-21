"use client";

import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectIndex from "@/components/ProjectIndex";
import { projects, ProjectType } from "@/data/projects";

const filters: {
  label: string;
  value: ProjectType | "all";
}[] = [
  { label: "All", value: "all" },
  { label: "Academic", value: "academic" },
  { label: "Professional", value: "professional" },
  { label: "Internship", value: "internship" },
  { label: "Personal", value: "personal" },
];

type View = "grid" | "index";

const views: { label: string; value: View }[] = [
  { label: "Grid", value: "grid" },
  { label: "Index", value: "index" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectType | "all">("all");

  const [view, setView] = useState<View>("grid");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <PageTransition>
      <main className="work-page">
        <section className="work-page-header">
          <p className="eyebrow">SELECTED WORK</p>

          <div className="work-header-layout">
            <h1>Work</h1>

            <p className="work-introduction">
              A collection of academic, professional, internship and
              personal work exploring architecture, space and the built
              environment.
            </p>
          </div>
        </section>

        <section className="work-filter-section">
          <div className="work-filter-header">
            <span>FILTER</span>

            <span>
              {filteredProjects.length.toString().padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="work-controls">
            <div className="work-filters">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={
                    activeFilter === filter.value
                      ? "filter-button active"
                      : "filter-button"
                  }
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="view-toggle" role="group" aria-label="View">
              <span>VIEW</span>

              {views.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={view === item.value}
                  onClick={() => setView(item.value)}
                  className="view-button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {view === "grid" ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <ProjectIndex projects={filteredProjects} />
        )}
      </main>
    </PageTransition>
  );
}
