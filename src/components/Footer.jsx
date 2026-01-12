import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="mailto:anuhea@umich.edu">
              <FaEnvelope style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Email
            </a>
            <a href="https://github.com/anujtaosf" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anuhea-tao/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              LinkedIn
            </a>
          </div>
          <div style={{
            marginTop: 'var(--spacing-sm)',
            fontSize: 'var(--text-sm)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-md)',
            flexWrap: 'wrap'
          }}>
            <span>© 2025 Anuhea Tao</span>
            <span>•</span>
            <span>✨ Built with Claude Sonnet 4.5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
