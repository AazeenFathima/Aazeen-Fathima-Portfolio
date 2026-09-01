import React from 'react';
import { Code2, Layout, Cpu, Wrench, Sparkles, Check } from 'lucide-react';
import './SkillBadge.css';

export default function SkillBadge({ category }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={20} />;
      case 'Layout':
        return <Layout size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'Wrench':
        return <Wrench size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <div className="skill-category-card">
      <div className="skill-category-header">
        <div className="skill-cat-icon-box">
          {getIcon(category.icon)}
        </div>
        <div className="skill-cat-meta">
          <h3 className="skill-cat-title">{category.title}</h3>
          <p className="skill-cat-desc">{category.description}</p>
        </div>
      </div>

      <div className="skills-grid-list">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-detail-item">
            <div className="skill-item-top">
              <span className="skill-name">{skill.name}</span>
              {skill.level && (
                <span className={`skill-level-tag level-${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              )}
            </div>
            {skill.desc && <p className="skill-item-desc">{skill.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
