import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, GraduationCap, Briefcase, Code, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import { personalInfo, experienceList, projectsList, skillCategories, achievementsAndCertifications } from '../data/portfolioData';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page fade-in">
      {/* 1. Hero Intro */}
      <Hero />

      {/* 2. Career Objective Banner / Editorial Quote */}
      <section className="career-objective-section">
        <div className="container">
          <div className="objective-box">
            <span className="objective-tag font-editorial">Career Objective & Vision</span>
            <blockquote className="objective-quote">
              "{personalInfo.careerObjective}"
            </blockquote>
            <div className="objective-author">
              <span className="author-name">— {personalInfo.name}</span>
              <span className="author-role">{personalInfo.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Experience Teaser */}
      <section className="section-padding home-experience-preview">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Professional History</span>
              <h2 className="section-main-title">Hands-on Internship Experience</h2>
              <p className="section-description">
                Bridging modern full-stack development (React, REST APIs) with enterprise low-code systems (Zoho Creator) across 3 distinct industry roles.
              </p>
            </div>
            <Link to="/experience" className="btn btn-secondary view-all-btn">
              <span>All 3 Experiences</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="experience-list-timeline">
            {experienceList.slice(0, 2).map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>

          <div className="section-footer-cta">
            <Link to="/experience" className="link-editorial">
              <span>Explore all internships, detailed workflows & responsibilities</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section className="section-padding home-projects-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-eyebrow">Portfolio Works</span>
              <h2 className="section-main-title">Featured Solutions & Prototyping</h2>
              <p className="section-description">
                Impact-driven applications spanning cloud healthcare digitisation and AI judicial accessibility.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary view-all-btn">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="projects-grid">
            {projectsList.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Capabilities & Skills Matrix Teaser */}
      <section className="section-padding home-skills-section">
        <div className="container">
          <div className="skills-editorial-box">
            <div className="skills-box-left">
              <span className="section-eyebrow">Core Expertise</span>
              <h2 className="section-main-title">Technical Domains & Tools</h2>
              <p className="skills-box-text">
                From object-oriented programming in Java and Python to low-code enterprise automation and DBMS architecture, my toolkit is structured for agility and problem solving.
              </p>

              <div className="key-skills-checkmarks">
                <div className="check-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Full-Stack Development (React.js, REST APIs)</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Zoho Creator Cloud Workflows & Deluge</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Data Structures & Algorithmic Problem Solving</span>
                </div>
                <div className="check-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>Relational Database Management & Normalization</span>
                </div>
              </div>

              <Link to="/skills" className="btn btn-primary" style={{ marginTop: '24px' }}>
                <span>Explore Technical Matrix</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="skills-box-right">
              <div className="skill-mini-cards">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="mini-category-card">
                    <h4 className="mini-cat-title">{cat.title}</h4>
                    <div className="mini-tags-row">
                      {cat.skills.map((s, sIdx) => (
                        <span key={sIdx} className="mini-skill-pill">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Editorial CTA Banner */}
      <section className="section-padding-sm home-cta-banner">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-eyebrow font-editorial">Let's Connect</span>
              <h2 className="cta-headline">Interested in collaborating or discussing an opportunity?</h2>
              <p className="cta-text">
                I am actively seeking software development roles, internships, and project collaborations where I can contribute and scale impactful solutions.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                <span>Learn More About Me</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
