import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        {/* Old routes, kept so existing links still land somewhere sensible */}
        <Route path="/projects" element={<Navigate to="/" state={{ scrollTo: "projects" }} replace />} />
        <Route path="/work" element={<Navigate to="/resume" replace />} />
        <Route path="/hobbies" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
