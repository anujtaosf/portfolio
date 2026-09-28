function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <ul className="footer-links">
          <li><a href="mailto:anuhea@umich.edu">Email</a></li>
          <li><a href="https://github.com/anujtaosf" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/anuhea-tao/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
        <p className="footer-meta">© {new Date().getFullYear()} Anuhea Tao · Built with Claude</p>
      </div>
    </footer>
  );
}

export default Footer;
