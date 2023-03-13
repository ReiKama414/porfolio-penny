import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto px-4 pt-5">
        <Routes>
          <Route exact path="/portfolio-penny" element={<Home />} />
          <Route path="/portfolio-penny/projects" element={<Projects />} />
          <Route path="/portfolio-penny/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
