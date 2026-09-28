import Layout from "../components/Layout";
import {
  summary,
  education,
  experience,
  projects,
  skills,
} from "../data/resumeData";

function Entry({ item }) {
  return (
    <article className="resume-entry">
      <div className="resume-entry-head">
        <h3>
          {item.org}
          {item.location && <span className="resume-loc">, {item.location}</span>}
        </h3>
        <p className="resume-dates">{item.dates}</p>
      </div>
      {item.title && <p className="resume-role">{item.title}</p>}
      {item.detail && <p className="resume-role">{item.detail}</p>}
      <ul>
        {item.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </article>
  );
}

function ResumeSection({ title, items }) {
  return (
    <section className="resume-section">
      <h2 className="rule-heading">{title}</h2>
      {items.map((item) => <Entry key={item.org} item={item} />)}
    </section>
  );
}

function Resume() {
  return (
    <Layout className="container page resume">
      <header className="resume-header">
        <h1 className="page-title">Resume</h1>
        <a
          className="text-link"
          href={`${process.env.PUBLIC_URL}/Anuhea_Tao_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF <span aria-hidden="true">↗</span>
        </a>
      </header>
      <p className="resume-summary">{summary}</p>

      <ResumeSection title="Education" items={education} />
      <ResumeSection title="Experience" items={experience} />
      <ResumeSection title="Organizations & Projects" items={projects} />

      <section className="resume-section">
        <h2 className="rule-heading">Skills</h2>
        <dl className="skills">
          {skills.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Layout>
  );
}

export default Resume;
