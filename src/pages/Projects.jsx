import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projectsList } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page fade-in">
      <PageHeader
        eyebrow="Portfolio & Systems"
        title="Featured technical projects & architectural prototypes."
        subtitle="Explore key projects demonstrating cloud low-code application development, AI solution blueprints, and database optimization."
      />

      <section className="section-padding projects-list-section">
        <div className="container">
          <div className="projects-showcase-flow">
            {projectsList.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Academic & Prototyping Notes Callout */}
          <div className="project-methodology-card">
            <div className="methodology-badge">
              <FolderGit2 size={16} />
              <span>Project Approach</span>
            </div>
            <h3 className="methodology-title">How I Build Solutions</h3>
            <div className="methodology-steps-grid">
              <div className="methodology-step">
                <span className="step-number">01</span>
                <h4>Requirement Deconstruction</h4>
                <p>Translating ambiguous business & user challenges into structured technical scopes and entity relationship diagrams.</p>
              </div>
              <div className="methodology-step">
                <span className="step-number">02</span>
                <h4>Rapid Architecture</h4>
                <p>Selecting the optimal stack — whether custom React.js frontends, relational schemas, or rapid low-code Deluge scripts.</p>
              </div>
              <div className="methodology-step">
                <span className="step-number">03</span>
                <h4>Testing & Documentation</h4>
                <p>Enforcing input validation, role-based security controls, and clear technical documentation for long-term scalability.</p>
              </div>
            </div>

            <div className="methodology-cta">
              <Link to="/contact" className="btn btn-primary">
                <span>Inquire About Collaboration</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/skills" className="btn btn-secondary">
                <span>View My Technical Skills</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
