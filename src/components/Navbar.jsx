import { Link, NavLink, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const { pathname } = useLocation();
  const onWork = pathname === "/" || pathname.startsWith("/projects");

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main">
        <Link to="/" className="nav-name">
          Anuhea Tao
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className={`nav-link${onWork ? " is-current" : ""}`}
            aria-current={onWork ? "page" : undefined}
          >
            Work
          </Link>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? " is-current" : ""}`}>
            About
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => `nav-link${isActive ? " is-current" : ""}`}>
            Resume
          </NavLink>
          <span className="nav-icons">
            <a href="https://github.com/anujtaosf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/anuhea-tao/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin aria-hidden="true" />
            </a>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
