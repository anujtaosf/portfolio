import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// HashRouter owns the URL hash, so in-page targets travel as
// router state: <Link to="/" state={{ scrollTo: "projects" }} />
function ScrollToTop() {
  const { pathname, state, key } = useLocation();
  const target = state?.scrollTo;

  useEffect(() => {
    if (!target) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(target);
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, [pathname, target, key]);

  return null;
}

export default ScrollToTop;
