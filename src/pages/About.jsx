import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, BookOpen, CheckCircle, FileDown, ArrowRight, Heart, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { personalInfo, educationHistory, achievementsAndCertifications } from '../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <div className="about-page fade-in">
      <PageHeader
        eyebrow="Biography & Background"
        title="Engineering with purpose, curiosity, and code."
        subtitle="Discover my academic path, career aspirations, and development philosophy."
      />

      {/* Main Bio Section */}
      <section className="section-padding about-bio-section">
        <div className="container">
          <div className="about-bio-grid">
            {/* Left: Portrait Card */}
            <div className="about-portrait-col">
              <div className="about-image-card">
                <img
                  src={personalInfo.profileImage}
                  alt="Aazeen Fathima M"
                  className="about-profile-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${import.meta.env.BASE_URL}assets/favicon.svg`;
                  }}
                />
                <div className="about-contact-quick">
                  <div className="quick-info-row">
                    <MapPin size={15} />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="quick-info-row">
                    <Mail size={15} />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="quick-info-row">
                    <Phone size={15} />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
              </div>

              <div className="about-resume-download-box">
                <h4>Official Resume</h4>
                <p>Download a comprehensive overview of academic credentials, internships, and technical competencies.</p>
                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FileDown size={16} />
                  <span>View & Download PDF Resume</span>
                </a>
              </div>
            </div>

            {/* Right: Narrative Bio */}
            <div className="about-narrative-col">
              <span className="section-eyebrow">Personal Narrative</span>
              <h2 className="about-narrative-title">Hello, I'm Aazeen Fathima.</h2>

              <div className="narrative-paragraphs">
                <p>
                  I am a Computer Science undergraduate at <strong>PSGR Krishnammal College for Women</strong>, driven by an eagerness to build software that is not only logically robust but solves tangible operational problems.
                </p>
                <p>
                  My journey in technology combines formal computer science foundations — algorithms, relational database systems, and object-oriented architecture — with real-world software engineering across full-stack web development and rapid low-code cloud enterprise platforms like Zoho Creator.
                </p>
                <p>
                  Having undertaken three internships spanning full-stack web applications at <strong>ZINLU</strong>, healthcare low-code systems at <strong>FCPA International Services</strong>, and enterprise exposure at <strong>ELGI Equipments Limited</strong>, I have cultivated a holistic understanding of how code interacts with real business workflows.
                </p>
              </div>

              {/* Career Objective Box */}
              <div className="about-objective-callout">
                <span className="callout-tag font-editorial">Career Objective</span>
                <p className="callout-text">
                  "{personalInfo.careerObjective}"
                </p>
              </div>

              {/* Development Pillars */}
              <div className="about-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-num">01</div>
                  <h4 className="pillar-title">Analytical Precision</h4>
                  <p className="pillar-desc">Deep emphasis on clean data structures, relational integrity, and structured algorithm design.</p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">02</div>
                  <h4 className="pillar-title">User-Centric Architecture</h4>
                  <p className="pillar-desc">Crafting responsive frontends and intuitive workflows that reduce friction for end-users.</p>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">03</div>
                  <h4 className="pillar-title">Adaptive Agility</h4>
                  <p className="pillar-desc">Comfortable shifting seamlessly between codebases in Java, React, Python, and Deluge scripting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="section-padding-sm about-education-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Academic Journey</span>
              <h2 className="section-main-title">Education & Qualifications</h2>
              <p className="section-description">
                Building a rigorous foundation in computational theory, software design, and scientific mathematics.
              </p>
            </div>
          </div>

          <div className="education-cards-grid">
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="edu-icon-badge">
                  <GraduationCap size={22} />
                </div>
                <div className="edu-content">
                  <div className="edu-top-meta">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-status-badge">{edu.status}</span>
                  </div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-location">{edu.location}</p>
                  <p className="edu-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="section-padding about-achievements-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Milestones</span>
              <h2 className="section-main-title">Certifications & Achievements</h2>
              <p className="section-description">
                Specialized programs, innovation accelerators, and verified technical credentials.
              </p>
            </div>
          </div>

          <div className="achievements-grid">
            {achievementsAndCertifications.map((item, idx) => (
              <div key={idx} className="achievement-card">
                <div className="achievement-header">
                  <Award size={20} className="achievement-icon" />
                  <span className="achievement-year">{item.year}</span>
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-org">{item.organization}</p>
                <span className="achievement-type-tag">{item.type}</span>
                <p className="achievement-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="about-next-cta">
            <h3>Explore how I apply this background in real projects</h3>
            <div className="next-cta-actions">
              <Link to="/experience" className="btn btn-primary">
                <span>View Internship Experience</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                <span>View Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
