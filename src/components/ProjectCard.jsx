import VideoDemo from './VideoDemo.jsx'

export default function ProjectCard({ project, children }) {
  return (
    <article className="project" id={project.id}>
      <div className="project-head">
        <div>
          <h3>{project.name}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <span className="project-period">{project.period}</span>
      </div>

      <p className="project-summary">{project.summary}</p>
      <p className="project-description">{project.description}</p>
      <VideoDemo videoId={project.videoId} thumbnail={project.thumbnail} title={project.name} vertical={project.videoVertical} />

      <ul className="project-highlights">
        {project.highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <div className="tech-tags">
        {project.tech.map((t) => (
          <span className="tech-tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      {project.links?.length > 0 && (
        <div className="hero-cta" style={{ marginTop: 20 }}>
          {project.links.map((link) => (
            <a className="btn" key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      )}

      {children && <div className="project-demo">{children}</div>}
    </article>
  )
}


