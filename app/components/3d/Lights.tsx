'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Lights() {
  const spotLightRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
      spotLightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#007bff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00f0ff" />
      <spotLight
        ref={spotLightRef}
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#8b5cf6"
      />
    </>
  );
}
