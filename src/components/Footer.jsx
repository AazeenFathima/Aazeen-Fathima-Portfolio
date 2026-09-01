import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer">
      <div className="container">
        {/* Upper Editorial Banner */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-brand-monogram">AF</div>
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-role">{personalInfo.role}</p>
            <p className="footer-bio">
              Committed to engineering scalable software, low-code automations, and purposeful digital experiences with analytical precision.
            </p>
            <div className="footer-location">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About & Objective</Link></li>
              <li><Link to="/experience">Internship Experience</Link></li>
              <li><Link to="/projects">Featured Projects</Link></li>
              <li><Link to="/skills">Technical Skills</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <div className="footer-contact-list">
              <a href={`mailto:${personalInfo.email}`} className="footer-contact-item">
                <Mail size={16} />
                <span>{personalInfo.email}</span>
                <ArrowUpRight size={14} className="hover-arrow" />
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="footer-contact-item">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
                <ArrowUpRight size={14} className="hover-arrow" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <Linkedin size={16} />
                <span>LinkedIn / {personalInfo.linkedinUsername}</span>
                <ArrowUpRight size={14} className="hover-arrow" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <Github size={16} />
                <span>GitHub / {personalInfo.githubUsername}</span>
                <ArrowUpRight size={14} className="hover-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved. Designed with editorial elegance.
          </p>
          <div className="footer-back-to-top">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="back-to-top-btn"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <span className="arrow-up">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
