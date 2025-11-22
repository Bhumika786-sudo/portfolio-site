import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Bhumika Verma. Built with React & Docker.</p>
        <p className="footer-tagline">Full-Stack Web Development @ Red River College Polytechnic</p>
      </div>
    </footer>
  );
}

export default Footer;