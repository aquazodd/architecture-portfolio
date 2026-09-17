"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import { projects, ProjectType } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

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

export default function WorkPage() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectType | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <main className="work-page">
      <Navigation />

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

        <div className="work-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
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
      </section>

      <section className="work-projects">
        {filteredProjects.map((project, index) => (
          <div
            key={project.slug}
            className={`work-project-item work-project-item-${index + 1}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </section>
    </main>
  );
}