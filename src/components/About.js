import React from 'react';
import './About.css';

function About({ bio, email, github, linkedin, image }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <img src={image} alt="Profile" className="profile-image" />
          <div className="about-text">
            <p>{bio}</p>
            <div className="contact-links">
              <a href={`mailto:${email}`}>Email</a>
              <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;