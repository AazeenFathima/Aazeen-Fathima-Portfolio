import React from 'react';
import { Layers, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <article className={`project-editorial-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}>
      {/* Project Visual / Mockup */}
      <div className="project-visual-container">
        <div className="project-visual-frame">
          <img
            src={project.image}
            alt={`${project.title} Preview Illustration`}
            className="project-mockup-img"
            loading="lazy"
          />
        </div>
        <div className="project-platform-badge">
          <Layers size={13} />
          <span>{project.platform}</span>
        </div>
      </div>

      {/* Project Details */}
      <div className="project-info-container">
        <div className="project-meta-eyebrow">
          <span className="project-category-tag">{project.category}</span>
          <span className="project-status-tag">{project.status}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle font-editorial">{project.subtitle}</p>

        <p className="project-description">{project.description}</p>

        {/* Key Architectural & Impact Points */}
        <div className="project-points-box">
          <h4 className="points-title">Key Architectural Highlights & Contributions:</h4>
          <ul className="project-points-list">
            {project.points.map((point, pIdx) => (
              <li key={pIdx} className="point-item">
                <CheckCircle size={15} className="point-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="project-tech-stack">
          {project.techStack.map((tech, tIdx) => (
            <span key={tIdx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
