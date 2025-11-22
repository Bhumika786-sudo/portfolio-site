import React from 'react';
import './Resources.css';

function Resources({ resources }) {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2>Helpful Resources</h2>
        <div className="resources-grid">
          {resources.map(resource => (
            <div key={resource.id} className="resource-card">
              <img src={resource.image} alt={resource.title} className="resource-icon" />
              <h3>{resource.title}</h3>
              <p>{resource.summary}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                Visit Resource →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;