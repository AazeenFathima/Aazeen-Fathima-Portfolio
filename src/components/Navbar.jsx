import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`masthead-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container masthead-inner">
        {/* Brand / Monogram */}
        <Link to="/" className="brand-logo" aria-label="Aazeen Fathima Homepage">
          <span className="brand-initials">AF</span>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-tag">Portfolio & Research</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Actions (Resume & Mobile Toggle) */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            className="btn btn-secondary nav-resume-btn"
            title="View & Download Aazeen's Resume"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-brand-meta">
            <span className="mobile-brand-title">{personalInfo.name}</span>
            <span className="mobile-brand-subtitle">{personalInfo.role}</span>
          </div>

          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} className="mobile-nav-arrow" />
              </NavLink>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              type="application/pdf"
              className="btn btn-primary mobile-resume-btn"
            >
              <FileDown size={16} />
              <span>View & Download Resume</span>
            </a>
            <div className="mobile-contact-snippet">
              <span>{personalInfo.email}</span>
              <span>{personalInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
