import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Terminal, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SkillBadge from '../components/SkillBadge';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <div className="skills-page fade-in">
      <PageHeader
        eyebrow="Competencies & Matrix"
        title="Technical skills, tooling & core proficiencies."
        subtitle="A structured taxonomy of programming languages, system engineering concepts, low-code platforms, and cloud tools."
      />

      <section className="section-padding skills-overview-section">
        <div className="container">
          {/* 4 Core Category Cards Grid */}
          <div className="skills-categories-grid">
            {skillCategories.map((category, idx) => (
              <SkillBadge key={idx} category={category} />
            ))}
          </div>

          {/* Technical Proficiency Summary Table / Matrix */}
          <div className="skills-matrix-callout">
            <div className="matrix-header">
              <Terminal size={22} className="matrix-icon" />
              <div>
                <h3 className="matrix-title">How I Apply These Technologies</h3>
                <p className="matrix-desc">Mapping technical theoretical principles to concrete application scenarios</p>
              </div>
            </div>

            <div className="application-matrix-grid">
              <div className="matrix-item">
                <h4 className="matrix-item-title">Enterprise Low-Code & Cloud</h4>
                <p>
                  Deploying Zoho Creator schemas, Deluge script triggers, custom validation workflows, and role-based permissions that automate manual hospital and office tasks.
                </p>
              </div>

              <div className="matrix-item">
                <h4 className="matrix-item-title">Full-Stack & Frontend</h4>
                <p>
                  Building clean, modular React.js user interfaces with state management, semantic HTML5, CSS variables, and seamless REST API connectivity.
                </p>
              </div>

              <div className="matrix-item">
                <h4 className="matrix-item-title">Algorithms & Data Structures</h4>
                <p>
                  Analyzing algorithmic time and space complexities, solving computational problems in Java/C++, and ensuring scalable data retrieval.
                </p>
              </div>

              <div className="matrix-item">
                <h4 className="matrix-item-title">Relational Databases & Data Mining</h4>
                <p>
                  Designing normalized relational models, executing complex SQL queries, and utilizing data mining principles for structured pattern discovery.
                </p>
              </div>
            </div>

            <div className="skills-bottom-cta">
              <Link to="/experience" className="btn btn-primary">
                <span>View Internships in Action</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Request a Technical Conversation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
