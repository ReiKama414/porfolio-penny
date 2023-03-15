import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import projectsData from './data/projectsData';
import { useState, useEffect } from 'react';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="lg:container lg:mx-auto px-4 pt-24">
        <Routes>
          <Route path="/portfolio-penny" element={<Projects  projects={projectsData} />} />
          <Route path="/portfolio-penny/about" element={<About />} />
          <Route path="/portfolio-penny/projects/:id" element={<ProjectDetail data={projectsData} />} />
        </Routes>
      </div>

      <button className={`scroll-to-top ${showScroll ? 'active' : ''}`} onClick={handleClick}>
        <i className="fas fa-chevron-up"></i>
      </button>
    </BrowserRouter>
  );
}

export default App;
