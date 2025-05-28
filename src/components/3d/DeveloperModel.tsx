import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface OrbitingCubeProps {
  radius: number;
  speed: number;
  color: string;
  size: number;
  offset?: number;
}

const DeveloperModel = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Main cube */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#4361ee" metalness={0.5} roughness={0.2} />
      </mesh>
      
      {/* Orbiting smaller cubes */}
      <OrbitingCube radius={2.5} speed={1} color="#64ffda" size={0.3} />
      <OrbitingCube radius={2.5} speed={-0.8} color="#3a0ca3" size={0.2} offset={Math.PI} />
      <OrbitingCube radius={2.5} speed={1.2} color="#4cc9f0" size={0.25} offset={Math.PI / 2} />
    </group>
  );
};

const OrbitingCube: React.FC<OrbitingCubeProps> = ({ radius, speed, color, size, offset = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(offset);
  
  useFrame((_, delta) => {
    time.current += delta * speed;
    
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(time.current) * radius;
      meshRef.current.position.z = Math.sin(time.current) * radius;
      meshRef.current.rotation.x += delta * 2;
      meshRef.current.rotation.y += delta * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

export default DeveloperModel;
