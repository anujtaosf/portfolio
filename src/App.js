import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Hobbies from "./pages/Hobbies";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
