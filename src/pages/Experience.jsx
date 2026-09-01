import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, CheckCircle2, Building, Terminal, Database, Code } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ExperienceCard from '../components/ExperienceCard';
import { experienceList } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-page fade-in">
      <PageHeader
        eyebrow="Industry & Work History"
        title="Practical software development & enterprise internships."
        subtitle="Chronological track record of building production web frontends, low-code cloud workflows, and business automation systems."
      />

      <section className="section-padding experience-timeline-section">
        <div className="container">
          {/* Summary Metric Strip */}
          <div className="experience-metric-strip">
            <div className="metric-strip-card">
              <span className="metric-num font-serif">03</span>
              <span className="metric-label">Industry Internships</span>
              <p className="metric-sub">Full Stack, Low-Code, & Industrial Exposure</p>
            </div>

            <div className="metric-strip-card">
              <span className="metric-num font-serif">React & REST</span>
              <span className="metric-label">Full Stack Integration</span>
              <p className="metric-sub">Component design, API wiring & error handling</p>
            </div>

            <div className="metric-strip-card">
              <span className="metric-num font-serif">Zoho Deluge</span>
              <span className="metric-label">Cloud Automation</span>
              <p className="metric-sub">Healthcare records & process optimization</p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="timeline-container">
            {experienceList.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>

          {/* Internship Takeaways Summary Callout */}
          <div className="experience-summary-callout">
            <div className="callout-header">
              <Terminal size={22} className="callout-icon" />
              <h3>Engineering Methodology & Work Ethic</h3>
            </div>
            <p>
              Through every role, my approach centers on proactive communication, thorough unit & endpoint testing, structured documentation, and writing maintainable code that aligns with real organizational goals.
            </p>
            <div className="callout-actions">
              <Link to="/projects" className="btn btn-primary">
                <span>See Projects Built</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Discuss an Opportunity</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
