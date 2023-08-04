import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Educations from "./Pages/Educations";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Resume from "./Pages/Resume";
import Header from "./Layouts/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/educations" element={<Educations />} />
        <Route exact path="/experiences" element={<Experience />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
