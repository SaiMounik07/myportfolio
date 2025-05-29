import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import './App.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
