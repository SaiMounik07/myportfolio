import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../styles/About.css';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiThreedotjs,
  SiOracle,
  SiSpringboot,
  SiSelenium,
  SiReactos,
  SiFlask,
  SiOllama,
  SiDeepl,
  SiOpenai,
  SiNgrok,
  SiJenkins,
  SiCucumber,
  SiTestinglibrary,
  SiDjango,
  SiRedis,
  SiApachekafka,
} from 'react-icons/si';

const techIcons = [
  {name: 'Java',icon:<SiOracle/>},
  {name: 'Spring Boot', icon:<SiSpringboot/>},
  { name: 'Redis', icon: <SiRedis /> },
  { name: 'Kafka', icon: <SiApachekafka /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Three.js', icon: <SiThreedotjs /> },
  { name: 'Selenium', icon: <SiSelenium /> },
  { name: 'Playwright', icon: <SiOracle /> },
  { name: 'Rest Assured', icon: <SiReactos /> },
  { name: 'Jenkins', icon: <SiJenkins /> },
  { name: 'Cucumber', icon: <SiCucumber /> },
  { name: 'Testng', icon: <SiTestinglibrary /> },
  { name: 'Ollama', icon: <SiOllama /> },
  { name: 'DeepLearing', icon: <SiDeepl /> },
  { name: 'LLM finetuning', icon: <SiOpenai /> },












];
const AboutText = () => {
  return (
    <Center>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        About
        <meshStandardMaterial color="#4361ee" />
      </Text3D>
    </Center>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-3d-title">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <AboutText />
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="about-content">
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholde">
              <div className="about-image">
                 <img src="/src/assets/images/mine.jpg" alt="My Profile" className="profile-image" />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Software Developer</h2>
            <p>
              I am a passionate software developer with expertise in creating innovative and efficient solutions. 
              My journey in software development has equipped me with a diverse skill set and a deep understanding 
              of modern technologies.
            </p>
            <p>
              I specialize in building applications that are not only functional but also provide exceptional user 
              experiences. My approach combines technical excellence with creative problem-solving to deliver 
              solutions that exceed expectations.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="tech-stack"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>My Technology Stack</h3>
          <div className="tech-icons">
          {techIcons.map((tech, index) => (
          <div key={index} className="tech-icon">
            <div className="icon">{tech.icon}</div>
              <span>{tech.name}</span>
            </div>
                  ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
