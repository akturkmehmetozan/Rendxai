'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { MousePosition } from '@/app/types';

// Dynamically import 3D components (client-side only)
const Scene = dynamic(() => import('@/app/components/3d/Scene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background-dark" />,
});

const RotatingModel = dynamic(() => import('@/app/components/3d/RotatingModel'), {
  ssr: false,
});

const ParticleField = dynamic(() => import('@/app/components/3d/ParticleField'), {
  ssr: false,
});

const Lights = dynamic(() => import('@/app/components/3d/Lights'), {
  ssr: false,
});

export default function Hero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const target = currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    setMousePosition({
      x: clientX - rect.left,
      y: clientY - rect.top,
      normalizedX: (clientX - rect.left - rect.width / 2) / (rect.width / 2),
      normalizedY: (clientY - rect.top - rect.height / 2) / (rect.height / 2),
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove as any);
    return () => window.removeEventListener('mousemove', handleMouseMove as any);
  }, [handleMouseMove]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={1500} />
          <RotatingModel mousePosition={mousePosition} />
        </Scene>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block text-white mb-2">The Future of</span>
              <span className="text-gradient glow-text">3D Rendering</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Transforming architectural visions into stunning reality with{' '}
            <span className="text-accent-cyan font-semibold">AI-powered</span>{' '}
            visualization technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary rounded-lg text-white text-lg font-semibold shadow-2xl hover:shadow-accent-cyan/50 transition-all"
            >
              Explore Our Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary rounded-lg text-white text-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Try AI Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '1000+', label: 'Projects Rendered' },
              { value: '50+', label: 'AI Models' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
