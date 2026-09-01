import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate clean client-side submission & construct mailto
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subjectEncoded = encodeURIComponent(formData.subject || 'Portfolio Inquiry for Aazeen Fathima');
    const bodyEncoded = encodeURIComponent(
      `Hello Aazeen,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <div className="contact-form-card">
      <div className="form-card-header">
        <h3 className="form-card-title">Send a Direct Message</h3>
        <p className="form-card-subtitle">
          Interested in discussing internship opportunities, projects, or collaborations? Fill out the form or reach out directly.
        </p>
      </div>

      {submitted ? (
        <div className="form-success-state">
          <div className="success-icon-box">
            <CheckCircle2 size={40} />
          </div>
          <h4 className="success-title">Thank You, {formData.name || 'Friend'}!</h4>
          <p className="success-text">
            Your inquiry has been drafted. Since this is a static client-side demo form, you can also launch your email client immediately with your filled details.
          </p>
          <div className="success-actions">
            <button
              type="button"
              onClick={handleMailtoDirect}
              className="btn btn-primary"
            >
              <Mail size={16} />
              <span>Open in Default Mail Client</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="btn btn-secondary"
            >
              Reset Form
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form-element">
          <div className="form-grid-two">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Full Name <span className="req-star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="req-star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. eleanor@example.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject <span className="req-star">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Software Developer Opportunity / Project Inquiry"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message <span className="req-star">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your note or opportunity details here..."
              className="form-textarea"
            ></textarea>
          </div>

          <div className="form-submit-row">
            <button
              type="submit"
              disabled={isSending}
              className="btn btn-primary form-submit-btn"
            >
              {isSending ? (
                <span>Preparing Note...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleMailtoDirect}
              className="btn btn-secondary"
              title="Compose directly in your system email client"
            >
              <Mail size={16} />
              <span>Launch Mailto:</span>
            </button>
          </div>

          <div className="form-notice-box">
            <Sparkles size={14} className="notice-icon" />
            <span>
              Direct recipient: <strong>{personalInfo.email}</strong> · Typical response within 24 hours.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
