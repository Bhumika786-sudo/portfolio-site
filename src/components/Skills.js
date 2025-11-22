import React from 'react';
import './Skills.css';

function Skills({ skills }) {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="skills-description">{skills.description}</p>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>💻 Languages</h3>
            <ul>
              {skills.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>🚀 Frameworks</h3>
            <ul>
              {skills.frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>🛠️ Tools</h3>
            <ul>
              {skills.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>🔒 Security</h3>
            <ul>
              {skills.security.map((sec, index) => (
                <li key={index}>{sec}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h3>🗄️ Databases</h3>
            <ul>
              {skills.databases.map((db, index) => (
                <li key={index}>{db}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;