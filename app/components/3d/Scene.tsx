'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { cn } from '@/app/lib/utils';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
}

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background-dark">
      <div className="loader"></div>
    </div>
  );
}

export default function Scene({ children, className }: SceneProps) {
  return (
    <div className={cn('w-full h-full', className)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
      <Suspense fallback={<Loader />}>
        {null}
      </Suspense>
    </div>
  );
}
