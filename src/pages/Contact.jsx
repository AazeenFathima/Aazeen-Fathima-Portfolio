import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, FileDown, ArrowUpRight, MessageSquare, Clock, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page fade-in">
      <PageHeader
        eyebrow="Initiate Conversation"
        title="Let's connect & build something impactful."
        subtitle="Open for software engineering opportunities, internships, technical discussions, and innovative projects."
      />

      <section className="section-padding contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Contact Info & Channels */}
            <div className="contact-channels-col">
              <div className="contact-info-card">
                <span className="section-eyebrow">Direct Channels</span>
                <h2 className="channels-title">Get in Touch</h2>
                <p className="channels-desc">
                  Whether you have an inquiry regarding a developer position, an internship opening, or a collaborative venture, feel free to reach out across any of the channels below.
                </p>

                <div className="channel-cards-list">
                  {/* Email Card */}
                  <a href={`mailto:${personalInfo.email}`} className="channel-card">
                    <div className="channel-icon-box">
                      <Mail size={20} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Email Address</span>
                      <strong className="channel-value">{personalInfo.email}</strong>
                    </div>
                    <ArrowUpRight size={18} className="channel-arrow" />
                  </a>

                  {/* Phone Card */}
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-card">
                    <div className="channel-icon-box">
                      <Phone size={20} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">Phone / WhatsApp</span>
                      <strong className="channel-value">{personalInfo.phone}</strong>
                    </div>
                    <ArrowUpRight size={18} className="channel-arrow" />
                  </a>

                  {/* LinkedIn Card */}
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon-box">
                      <Linkedin size={20} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">LinkedIn Profile</span>
                      <strong className="channel-value">linkedin.com/in/{personalInfo.linkedinUsername}</strong>
                    </div>
                    <ArrowUpRight size={18} className="channel-arrow" />
                  </a>

                  {/* GitHub Card */}
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="channel-card">
                    <div className="channel-icon-box">
                      <Github size={20} />
                    </div>
                    <div className="channel-details">
                      <span className="channel-label">GitHub Repository</span>
                      <strong className="channel-value">github.com/{personalInfo.githubUsername}</strong>
                    </div>
                    <ArrowUpRight size={18} className="channel-arrow" />
                  </a>
                </div>

                {/* Location & Availability Note */}
                <div className="availability-box">
                  <div className="avail-item">
                    <MapPin size={16} className="avail-icon" />
                    <div>
                      <strong>Location:</strong>
                      <span>{personalInfo.location} (Open to Onsite & Remote)</span>
                    </div>
                  </div>
                  <div className="avail-item">
                    <Clock size={16} className="avail-icon" />
                    <div>
                      <strong>Response Time:</strong>
                      <span>Within 24 Hours</span>
                    </div>
                  </div>
                </div>

                {/* Download Resume Action */}
                <div className="contact-resume-cta">
                  <div>
                    <h4>Looking for my complete resume?</h4>
                    <p>Get the official 1-page PDF document summarizing education, credentials & experience.</p>
                  </div>
                  <a
                    href={personalInfo.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="btn btn-secondary"
                  >
                    <FileDown size={16} />
                    <span>View & Download Resume PDF</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
