import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

interface ProjectModelProps {
  position: [number, number, number];
  color: string;
}

// 3D Project Card Component
const ProjectModel: React.FC<ProjectModelProps> = ({ position, color }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

interface Project {
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "#4361ee"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates custom content based on user preferences and requirements.",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      color: "#3a0ca3"
    },
    {
      title: "Blockchain Wallet",
      description: "A secure digital wallet for cryptocurrency transactions with multi-factor authentication.",
      technologies: ["Solidity", "Web3.js", "React", "Node.js"],
      color: "#4cc9f0"
    },
    {
      title: "Health Tracking App",
      description: "A mobile application for tracking health metrics, exercise routines, and nutrition with personalized insights.",
      technologies: ["React Native", "Firebase", "Node.js", "Chart.js"],
      color: "#64dfdf"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <div className="projects-3d-scene">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              {projects.map((project, index) => (
                <ProjectModel 
                  key={index} 
                  position={[index * 2 - 3, 0, 0]} 
                  color={project.color} 
                />
              ))}
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Suspense>
          </Canvas>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-title"
        >
          Projects
        </motion.h1>
      </div>

      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              onClick={() => setActiveProject(index)}
            >
              <div 
                className="project-color-bar" 
                style={{ backgroundColor: project.color }}
              ></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="project-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Selected Project</h2>
          <div className="project-showcase">
            <div 
              className="project-image"
              style={{ 
                background: `linear-gradient(45deg, ${projects[activeProject].color}, #f8f9fa)` 
              }}
            ></div>
            <div className="project-info">
              <h3>{projects[activeProject].title}</h3>
              <p>{projects[activeProject].description}</p>
              <div className="project-actions">
                <button className="view-live">View Live</button>
                <button className="view-code">View Code</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
