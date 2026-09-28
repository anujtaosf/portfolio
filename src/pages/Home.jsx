import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { projects, categories, projectLinkProps } from "../data/projectsData";
import { skills } from "../data/skillsData";
import { sketchbook } from "../data/sketchbookData";
import ProfilePic from "../assets/portraits/profile_pic_oval.png";

const filters = [["all", "All"], ...Object.entries(categories).map(([key, c]) => [key, c.label])];
const projectBySlug = (slug) => projects.find((p) => p.slug === slug);

function Home() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-copy">
        <h1 id="hero-title">Hi, I'm Anuhea.</h1>
        <p className="hero-statement">
          I build hardware for robots in service of the{" "}
          <span className="scribble">
            communities
            <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9 C 40 3, 80 12, 120 6 S 180 4, 198 8" />
            </svg>
          </span>{" "}
          I care about.
        </p>
        <p className="hero-intro">
          Hands-on robotics systems engineer skilled in PCB design, sensor
          integration, and hardware debugging. Seeking to invent and refine novel
          electro-mechanical devices, drawing on my background in robotics,
          motors and system integration.
        </p>
        <Link to="/" state={{ scrollTo: "projects" }} className="text-link">
          View my work <span aria-hidden="true">↓</span>
        </Link>
        </div>
        <img className="hero-portrait" src={ProfilePic} alt="Portrait of Anuhea Tao" />
      </section>

      <section id="skills" className="container skills-strip" aria-labelledby="skills-title">
        <h2 id="skills-title" className="skills-label">Skills <span>· pick one to see it in a project</span></h2>
        <ul className="skill-list">
          {skills.map((s) => {
            const project = projectBySlug(s.slug);
            const linkProps = projectLinkProps(project);
            const Tag = linkProps.href ? "a" : Link;
            return (
              <li key={s.label}>
                <Tag {...linkProps} className="skill">
                  <span className="skill-name">{s.label}</span>
                  <span className="skill-project">{project.title} <span aria-hidden="true">{linkProps.href ? "↗" : "→"}</span></span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="projects" className="container section" aria-labelledby="projects-title">
        <header className="section-head">
          <h2 id="projects-title">Projects</h2>
          <p className="section-note">
            Devices and software tools I've taken from idea to prototype, and
            sometimes all the way to deployment.
          </p>
        </header>
        <div className="filters" role="group" aria-label="Filter projects by category">
          {filters.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className="filter"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {shown.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="sketchbook" className="container section sketchbook" aria-labelledby="sketchbook-title">
        <header className="section-head">
          <h2 id="sketchbook-title">Sketchbook</h2>
        </header>
        {sketchbook.map((group) => (
          <div key={group.title} className={`sketch-group accent-${group.accent}`}>
            <div className="sketch-group-head">
              <h3 className="kicker"><span className="dot" aria-hidden="true" />{group.title}</h3>
              <p>{group.description}</p>
            </div>
            <ul className="sketch-grid">
              {group.images.map((src, i) => (
                <li key={src}>
                  <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${group.title} piece ${i + 1}, open full size`}>
                    <img src={src} alt="" loading="lazy" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default Home;
