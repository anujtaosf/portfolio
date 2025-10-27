import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Email
            </a>
          </div>
          <p className="footer-quote">"Building technology that serves people."</p>
          <p>&copy; {currentYear} Anuhea Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
