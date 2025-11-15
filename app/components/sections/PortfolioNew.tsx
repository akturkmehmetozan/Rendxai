'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioNew() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Neural Architecture',
      category: 'AI-Generated',
      year: '2024',
      desc: 'A building designed entirely by AI, pushing the boundaries of architectural possibility',
      color: 'from-primary to-accent-cyan'
    },
    {
      id: 2,
      title: 'Void Tower',
      category: 'Conceptual',
      year: '2024',
      desc: 'Exploring negative space in ultra-modern residential design',
      color: 'from-accent-purple to-primary'
    },
    {
      id: 3,
      title: 'Liquid Surfaces',
      category: 'Interior',
      year: '2023',
      desc: 'Organic forms meet high-tech materials in luxury hospitality',
      color: 'from-accent-cyan to-accent-purple'
    },
    {
      id: 4,
      title: 'Parametric Plaza',
      category: 'Public Space',
      year: '2024',
      desc: 'AI-optimized urban gathering space with adaptive shading',
      color: 'from-primary/80 to-accent-cyan/80'
    },
    {
      id: 5,
      title: 'Fractal Facades',
      category: 'Commercial',
      year: '2023',
      desc: 'Self-similar patterns creating infinite visual depth',
      color: 'from-accent-purple/80 to-primary/80'
    }
  ];

  return (
    <section className="horizontal-section w-screen h-screen flex overflow-hidden bg-background-dark">
      {/* Left Side - Project List */}
      <div className="w-1/3 h-full flex flex-col justify-center p-16 bg-gradient-to-br from-secondary to-background-dark border-r border-white/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-7xl font-black mb-4">
            <span className="text-gradient">PORT</span>
            <br />
            <span className="text-white/20">FOLIO</span>
          </h2>
          <p className="text-gray-400 mb-12">Selected Works</p>

          {/* Project Navigation */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all relative overflow-hidden group ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-primary/20 to-accent-cyan/20 border border-primary/50'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow on selected */}
                {selectedProject === index && (
                  <motion.div
                    layoutId="selected-bg"
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-cyan/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-primary"
                  animate={{
                    x: selectedProject === index ? 0 : -10,
                    opacity: selectedProject === index ? 1 : 0
                  }}
                >
                  →
                </motion.div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side - Project Display */}
      <div className="w-2/3 h-full relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotateY: 20 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="w-full h-full flex items-center justify-center p-16"
            style={{ perspective: '1000px' }}
          >
            <div className="relative w-full h-full">
              {/* Main Project Card */}
              <motion.div
                className={`w-full h-full rounded-3xl bg-gradient-to-br ${projects[selectedProject].color} relative overflow-hidden`}
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse-slow" />
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-12">
                  {/* Top - Number */}
                  <motion.div
                    className="text-[20vw] font-black text-white/10 leading-none"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {String(selectedProject + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Bottom - Details */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-6xl font-black text-white mb-4">
                        {projects[selectedProject].title}
                      </h3>
                      <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                        {projects[selectedProject].desc}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-background-dark rounded-xl font-bold"
                      >
                        View Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold backdrop-blur-sm hover:bg-white/10"
                      >
                        Case Study
                      </motion.button>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-8 right-8 w-24 h-24 border-t-4 border-r-4 border-white/30 rounded-tr-3xl" />
                <div className="absolute bottom-8 left-8 w-24 h-24 border-b-4 border-l-4 border-white/30 rounded-bl-3xl" />
              </motion.div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.8, 0.2]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
