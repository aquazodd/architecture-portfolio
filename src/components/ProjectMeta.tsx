import { Project } from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
};

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const items = [
    { label: "YEAR", value: project.year },
    { label: "LOCATION", value: project.location },
    { label: "ROLE", value: project.role },
  ].filter((item) => item.value);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="project-page-meta">
      {items.map((item) => (
        <div key={item.label}>
          <span>{item.label}</span>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
