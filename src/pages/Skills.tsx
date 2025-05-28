import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import '../styles/Skills.css';

interface SkillSphereProps {
  position: [number, number, number];
  color: string;
  size: number;
}

// 3D Skill Sphere Component
const SkillSphere: React.FC<SkillSphereProps> = ({ position, color, size }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef, { once: true });
  
  const frontendSkills: Skill[] = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Three.js", level: 70 }
  ];
  
  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "GraphQL", level: 65 }
  ];
  
  const otherSkills: Skill[] = [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "UI/UX Design", level: 75 },
    { name: "Agile/Scrum", level: 80 }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <div className="skills-3d-scene">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
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
                  Skills
                  <meshStandardMaterial color="#4361ee" />
                </Text3D>
              </Center>
              <SkillSphere position={[-2, 1, -2]} color="#4361ee" size={0.3} />
              <SkillSphere position={[2, -1, -1]} color="#64ffda" size={0.2} />
              <SkillSphere position={[-1, -1.5, -1]} color="#3a0ca3" size={0.25} />
              <SkillSphere position={[1.5, 1.5, -2]} color="#4cc9f0" size={0.15} />
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="skills-content" ref={skillsRef}>
        <motion.div 
          className="skills-intro"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Technical Proficiency</h2>
          <p>
            With a passion for creating innovative solutions, I've developed expertise across various technologies 
            and frameworks. My skill set allows me to build comprehensive, scalable, and user-friendly applications 
            from concept to deployment.
          </p>
        </motion.div>

        <div className="skills-grid">
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Frontend Development</h3>
            <div className="skill-bars">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      style={{ 
                        background: `linear-gradient(90deg, #4361ee, #4cc9f0)` 
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Backend Development</h3>
            <div className="skill-bars">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      style={{ 
                        background: `linear-gradient(90deg, #3a0ca3, #4361ee)` 
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Other Skills</h3>
            <div className="skill-bars">
              {otherSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      style={{ 
                        background: `linear-gradient(90deg, #64dfdf, #64ffda)` 
                      }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
