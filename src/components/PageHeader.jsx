import React from 'react';
import './PageHeader.css';

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="page-header-banner">
      <div className="container">
        <div className="page-header-content">
          {eyebrow && <span className="page-header-eyebrow">{eyebrow}</span>}
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
