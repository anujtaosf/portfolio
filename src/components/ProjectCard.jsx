import { Link } from "react-router-dom";
import { categories, projectYear, projectLinkProps } from "../data/projectsData";

function ProjectCard({ project }) {
  const category = categories[project.category];
  const linkProps = projectLinkProps(project);
  const Tag = linkProps.href ? "a" : Link;

  return (
    <Tag {...linkProps} className={`project-card accent-${category.accent}`}>
      <p className="kicker">
        <span className="dot" aria-hidden="true" />
        {category.label}
      </p>
      <div className="project-card-media">
        <img src={project.image} alt={project.imageAlt || ""} loading="lazy" />
      </div>
      <div className="project-card-title">
        <h3>{project.title}</h3>
        <span className="arrow" aria-hidden="true">↗</span>
      </div>
      <p className="project-card-desc">{project.description}</p>
      <p className="meta">
        {project.tags.slice(0, 3).join(" · ")} · {projectYear(project.date)}
      </p>
    </Tag>
  );
}

export default ProjectCard;
