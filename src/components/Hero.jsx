import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileDown, MapPin, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Editorial Content */}
          <div className="hero-content fade-in">
            <div className="hero-eyebrow">
              <span className="hero-status-dot"></span>
              <span>Available for Software Development Roles & Internships</span>
            </div>

            <h1 className="hero-headline">
              Engineering <span className="font-editorial text-accent">scalable</span> digital solutions with analytical precision.
            </h1>

            <p className="hero-subtext">
              I am <strong>{personalInfo.name}</strong>, a Computer Science student and aspiring Software Developer. I specialize in full-stack web development, enterprise low-code platforms (Zoho Creator), and business process optimization.
            </p>

            {/* Key Value Highlights */}
            <div className="hero-highlights">
              <div className="hero-pill">
                <CheckCircle2 size={16} className="pill-icon" />
                <span>3 Practical Internships (Full-Stack & Zoho)</span>
              </div>
              <div className="hero-pill">
                <CheckCircle2 size={16} className="pill-icon" />
                <span>Wadhwani Ignite AI Innovator</span>
              </div>
              <div className="hero-pill">
                <CheckCircle2 size={16} className="pill-icon" />
                <span>DSA Certified & CS Honours</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <Link to="/experience" className="btn btn-primary">
                <span>View Experience</span>
                <ArrowRight size={16} />
              </Link>

              <Link to="/projects" className="btn btn-secondary">
                <span>Featured Projects</span>
              </Link>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                className="btn btn-secondary hero-resume-btn"
                title="View & Download Resume"
              >
                <FileDown size={16} />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Metadata Snippet */}
            <div className="hero-meta-bar">
              <div className="hero-meta-item">
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </div>
              <span className="meta-divider">•</span>
              <div className="hero-meta-item">
                <Code2 size={14} />
                <span>React, Zoho Creator, Java, Python</span>
              </div>
            </div>
          </div>

          {/* Right Portrait Frame */}
          <div className="hero-portrait-wrapper fade-in">
            <div className="portrait-frame">
              <div className="portrait-backdrop"></div>
              <div className="portrait-image-box">
                <img
                  src={personalInfo.profileImage}
                  alt="Aazeen Fathima M - Software Developer"
                  className="portrait-img"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image missing
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/favicon.svg";
                  }}
                />
              </div>

              {/* Floating Editorial Badges */}
              <div className="floating-badge top-right">
                <Sparkles size={16} className="badge-sparkle" />
                <div>
                  <strong>B.Sc Computer Science</strong>
                  <span>PSGR Krishnammal</span>
                </div>
              </div>

              <div className="floating-badge bottom-left">
                <Layers size={16} className="badge-layer" />
                <div>
                  <strong>Zoho Creator & Full Stack</strong>
                  <span>Enterprise Process Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
