import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle, Briefcase } from 'lucide-react';
import './ExperienceCard.css';

export default function ExperienceCard({ experience, index }) {
  return (
    <article className="experience-card-item">
      {/* Timeline stem indicator */}
      <div className="timeline-marker">
        <div className="marker-dot">
          <Briefcase size={14} />
        </div>
        <div className="marker-line"></div>
      </div>

      {/* Main card box */}
      <div className="experience-card-body">
        <div className="card-header-meta">
          <div className="company-info-group">
            <span className="experience-badge">{experience.badge}</span>
            <h3 className="experience-role-title">{experience.title}</h3>
            <div className="company-row">
              <span className="company-name">
                <Building2 size={16} />
                {experience.company}
              </span>
              <span className="location-tag">
                <MapPin size={14} />
                {experience.location}
              </span>
            </div>
          </div>

          <div className="period-pill">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="experience-highlights-list">
          {experience.highlights.map((item, idx) => (
            <li key={idx} className="highlight-item">
              <CheckCircle size={15} className="highlight-check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Skills learned / applied */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="experience-skills-group">
            <span className="skills-group-label">Applied Core Competencies:</span>
            <div className="skills-pill-row">
              {experience.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
