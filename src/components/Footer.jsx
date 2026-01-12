import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/anujtaosf" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anuhea-tao/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
