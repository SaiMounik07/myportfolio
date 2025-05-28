import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DeveloperModel from '../components/3d/DeveloperModel';
import '../styles/Home.css';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Sai Mounik<br></br>
            <span style={{ 
                fontSize: '0.6em',
                fontWeight: 400,
                letterSpacing: '0.5px'
            }}> Software Engineer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Creating innovative digital experiences
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="cta-container"
          >
            <Link to="/contact" className="cta-button">Get in touch</Link>
          </motion.div>
        </div>
        <div className="hero-3d-container">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <DeveloperModel />
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <motion.div 
        className="projects-preview"
        style={{ 
          opacity: Math.min(1, scrollY / 300),
          transform: `translateY(${Math.max(0, 100 - scrollY / 5)}px)`
        }}
      >
        <h2>Featured Projects</h2>
        <div className="project-cards">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              className="project-card"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="project-image"></div>
              <h3>Project {item}</h3>
              <p>Innovative software solution with cutting-edge technology</p>
            </motion.div>
          ))}
        </div>
        <Link to="/projects" className="see-more-link">See all projects →</Link>
      </motion.div>
    </div>
  );
};

export default Home;
