import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { projects, categories } from "../data/projectsData";

function Media({ item, figNum }) {
  return (
    <figure className={`fig${item.wide ? " fig-wide" : ""}`}>
      {item.title && <h4 className="fig-title">{item.title}</h4>}
      {item.type === "video" ? (
        <video
          src={item.src}
          controls={!item.autoplay}
          autoPlay={item.autoplay}
          loop={item.autoplay}
          muted={item.autoplay}
          playsInline
          preload="metadata"
          aria-label={item.alt}
        />
      ) : (
        <img src={item.src} alt={item.alt} loading="lazy" />
      )}
      <figcaption>
        <span className="fig-num">fig. {figNum}</span> {item.caption}
      </figcaption>
    </figure>
  );
}

function MediaGrid({ media, startAt }) {
  return (
    <div className={`media-grid${media.length === 1 ? " media-grid-single" : ""}`}>
      {media.map((item, i) => (
        <Media key={`${item.src}-${i}`} item={item} figNum={startAt + i} />
      ))}
    </div>
  );
}

function Quote({ q }) {
  return (
    <figure className="quote">
      <img src={q.headshot} alt="" className="quote-headshot" loading="lazy" />
      <div>
        {q.points ? (
          <ul className="quote-points">
            {q.points.map((p) => <li key={p}>“{p}”</li>)}
          </ul>
        ) : (
          <blockquote>“{q.quote}”</blockquote>
        )}
        <figcaption>
          <strong>{q.name}</strong> · {q.role}
        </figcaption>
      </div>
    </figure>
  );
}

function NoteGroups({ groups }) {
  return (
    <div className="note-groups">
      {groups.map((g) => (
        <div key={g.title} className="note-group">
          <h3>{g.title}</h3>
          {g.subtitle && <p className="note-sub">{g.subtitle}</p>}
          {g.lists.map((list, i) => {
            const List = list.ordered ? "ol" : "ul";
            return (
              <div key={list.heading || i}>
                {list.heading && <h4>{list.heading}</h4>}
                <List>{list.items.map((item) => <li key={item}>{item}</li>)}</List>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Section({ num, label, title, children }) {
  return (
    <section className="detail-section">
      <p className="step">
        <span className="step-num">{String(num).padStart(2, "0")}</span>
        {label}
      </p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Builds the section list for projects without a bespoke case study.
function genericSections(project) {
  const sections = [];
  if (project.motivation) {
    sections.push({ label: "Overview", title: "Why I built it", body: [project.motivation] });
  }
  if (project.media?.length) {
    sections.push({ label: "Process", title: "Built, tested, iterated", media: project.media });
  }
  if (project.stage) {
    sections.push({ label: "Result", title: "Where it landed", body: [project.stage] });
  }
  return sections;
}

function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <Layout className="container page">
        <p className="kicker">404</p>
        <h1 className="page-title">That project isn't here.</h1>
        <Link className="text-link" to="/" state={{ scrollTo: "projects" }}>← All projects</Link>
      </Layout>
    );
  }

  const category = categories[project.category];
  const sections = project.caseStudy || genericSections(project);
  const hasLink = project.link && project.link !== "#";
  const next = projects[(index + 1) % projects.length];
  let fig = 1;

  return (
    <Layout className={`container page project-page accent-${category.accent}`}>
      <Link className="back-link" to="/" state={{ scrollTo: "projects" }}>← All projects</Link>

      <header className="detail-header">
        <p className="kicker">
          <span className="dot" aria-hidden="true" />
          {category.label}
        </p>
        <h1 className="page-title">{project.title}</h1>
        <p className="detail-lede">{project.description}</p>
        <dl className="facts">
          <div><dt>Year</dt><dd>{project.date}</dd></div>
          {project.role && <div><dt>Role</dt><dd>{project.role}</dd></div>}
          <div><dt>Tools / skills</dt><dd>{project.tags.join(" · ")}</dd></div>
        </dl>
      </header>

      <figure className={`detail-hero${project.imageFit === "contain" ? " fit-contain" : ""}`}>
        <img src={project.image} alt={project.imageAlt || project.title} />
      </figure>

      {hasLink && (
        <p className="detail-external">
          <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkLabel || "Visit project"} <span aria-hidden="true">↗</span>
          </a>
        </p>
      )}

      {sections.map((s, i) => {
        const startAt = fig;
        fig += s.media?.length || 0;
        return (
          <Section key={s.title} num={i + 1} label={s.label} title={s.title}>
            {s.body?.map((para, j) => <p key={j} className="detail-body">{para}</p>)}
            {s.groups && <NoteGroups groups={s.groups} />}
            {s.quotes && (
              <div className="quotes">
                {s.quotes.map((q) => <Quote key={q.name} q={q} />)}
              </div>
            )}
            {s.media && <MediaGrid media={s.media} startAt={startAt} />}
            {s.closing && <p className="detail-body">{s.closing}</p>}
          </Section>
        );
      })}

      <nav className="detail-footer" aria-label="Project navigation">
        <Link className="back-link" to="/" state={{ scrollTo: "projects" }}>← All projects</Link>
        <Link className="text-link" to={`/projects/${next.slug}`}>
          Next: {next.title} <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </Layout>
  );
}

export default ProjectDetail;
