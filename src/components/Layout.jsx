import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, className = "" }) {
  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById("main")?.focus(); }}>
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
