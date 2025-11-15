'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RotatingModelProps {
  mousePosition?: { x: number; y: number };
}

export default function RotatingModel({ mousePosition }: RotatingModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  // Create architectural wireframe geometry
  const geometry = useMemo(() => {
    const geo = new THREE.BoxGeometry(2, 3, 2);
    return geo;
  }, []);

  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  useFrame((state) => {
    if (meshRef.current) {
      // Auto rotation
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

      // Mouse interaction
      if (mousePosition) {
        meshRef.current.rotation.y += mousePosition.x * 0.001;
        meshRef.current.rotation.x += mousePosition.y * 0.001;
      }

      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }

    // Wireframe glow effect
    if (wireframeRef.current) {
      const material = wireframeRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main wireframe */}
      <lineSegments ref={wireframeRef} geometry={edges}>
        <lineBasicMaterial
          color="#007bff"
          transparent
          opacity={0.8}
          linewidth={2}
        />
      </lineSegments>

      {/* Glow wireframe */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial
          color="#00f0ff"
          transparent
          opacity={0.3}
          linewidth={4}
        />
      </lineSegments>

      {/* Inner geometric elements */}
      <mesh position={[0, 0.5, 0]} scale={0.4}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#007bff" wireframe />
      </mesh>

      <mesh position={[0, -0.5, 0]} scale={0.3}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#00f0ff" wireframe />
      </mesh>
    </group>
  );
}
