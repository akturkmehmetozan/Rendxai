'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/app/components/3d/Scene'), { ssr: false });
const RotatingModel = dynamic(() => import('@/app/components/3d/RotatingModel'), { ssr: false });
const ParticleField = dynamic(() => import('@/app/components/3d/ParticleField'), { ssr: false });
const Lights = dynamic(() => import('@/app/components/3d/Lights'), { ssr: false });

export default function HeroNew() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="horizontal-section relative w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background - Full screen */}
      <div className="absolute inset-0 z-0">
        <Scene>
          <Lights />
          <ParticleField count={2000} />
          <RotatingModel mousePosition={mousePos} />
        </Scene>
      </div>

      {/* Asymmetric Content Grid */}
      <motion.div
        className="relative z-10 w-full h-full p-8 md:p-16"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Top Left - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-8 left-8"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="text-6xl font-bold">
            <span className="text-gradient">rendx</span>
            <span className="text-accent-cyan">ai</span>
          </div>
        </motion.div>

        {/* Center - Main Title (Huge & Diagonal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2"
          style={{ transform: 'translateZ(100px) rotate(-3deg)' }}
        >
          <h1 className="text-[12vw] font-black leading-none">
            <span className="block text-white/10">FUTURE</span>
            <span className="block text-gradient glow-text -mt-8">3D</span>
            <span className="block text-white/10 -mt-8">RENDER</span>
          </h1>
        </motion.div>

        {/* Bottom Right - Description Box */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-32 right-16 max-w-md"
          style={{ transform: 'translateZ(75px)' }}
        >
          <div className="card-gradient rounded-2xl p-8 border border-primary/30 backdrop-blur-xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              AI-powered architectural visualization that breaks every rule
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05, z: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-primary rounded-lg font-semibold"
              >
                Explore →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5"
              >
                AI Demo
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Top Right - Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/4 right-1/4"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="space-y-4">
            {[
              { num: '1000+', label: 'Projects' },
              { num: '50+', label: 'AI Models' },
              { num: '99%', label: 'Satisfaction' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">{stat.num}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Left - Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-8 flex items-center gap-4"
        >
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >
            →
          </motion.div>
          <div className="text-sm text-gray-400 uppercase tracking-wider">
            Scroll Horizontally
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-cyan rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              transform: `translateZ(${30 + i * 20}px)`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-transparent to-background-dark/80 pointer-events-none z-[5]" />
    </section>
  );
}
