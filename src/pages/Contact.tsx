import { Suspense, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


// 3D Contact Form Component
const ContactText = () => {
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
        Contact
        <meshStandardMaterial color="#4361ee" />
      </Text3D>
    </Center>
  );
};

// 3D Floating Envelope
const Envelope = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color="#64ffda" />
      </mesh>
    </Float>
  );
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="contact-3d-scene">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <ContactText />
              <Envelope />
              <OrbitControls enableZoom={false} autoRotate={true} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="contact-content">
        <motion.div 
          className="contact-intro"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            Feel free to contact me using the form below, or connect with me on social media.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="info-card">
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="icon-placeholder"></i>
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>asaimounik@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="icon-placeholder"></i>
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Coimbatore, In</p>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Connect with me</h4>
                  <div className="social-icons">
                      <a href="https://www.linkedin.com/in/sai-mounik/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                          <FaLinkedin size={24} />
                      </a>
                      <a href="https://github.com/SaiMounik07/" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                          <FaGithub size={24} />
                      </a>
                      <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
                          <FaTwitter size={24} />
                      </a>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
