'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServicesNew() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: '3D Rendering',
      desc: 'Photorealistic architectural visualization',
      size: 'large', // Different sizes for asymmetry
      color: 'from-primary/20 to-accent-cyan/20',
      icon: '🏗️'
    },
    {
      title: 'AI Vision',
      desc: 'Transform sketches instantly',
      size: 'small',
      color: 'from-accent-purple/20 to-primary/20',
      icon: '🤖'
    },
    {
      title: 'Real-time',
      desc: 'Interactive 3D experiences',
      size: 'medium',
      color: 'from-accent-cyan/20 to-accent-purple/20',
      icon: '⚡'
    },
    {
      title: 'Animation',
      desc: 'Dynamic architectural videos',
      size: 'small',
      color: 'from-primary/20 to-primary/20',
      icon: '🎬'
    },
    {
      title: 'VR/AR',
      desc: 'Immersive walkthroughs',
      size: 'medium',
      color: 'from-accent-purple/20 to-accent-cyan/20',
      icon: '🥽'
    },
    {
      title: 'Consulting',
      desc: 'Expert visualization strategy',
      size: 'large',
      color: 'from-accent-cyan/20 to-primary/20',
      icon: '💡'
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="horizontal-section w-screen h-screen flex items-center justify-center p-16 bg-gradient-to-br from-secondary via-background-dark to-secondary overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Title - Rotated */}
        <motion.div
          initial={{ opacity: 0, rotate: -90, x: -100 }}
          whileInView={{ opacity: 1, rotate: 0, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[8vw] font-black text-gradient leading-none">
            SERVICES
          </h2>
          <p className="text-xl text-gray-400 mt-4 max-w-xl">
            Breaking the rules of conventional 3D visualization
          </p>
        </motion.div>

        {/* Bento Grid - Asymmetric */}
        <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[600px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring'
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`${getSizeClasses(service.size)} group relative cursor-pointer`}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className={`h-full rounded-3xl bg-gradient-to-br ${service.color} backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative`}
                animate={{
                  scale: hoveredIndex === index ? 1.02 : 1,
                  rotateX: hoveredIndex === index ? 5 : 0,
                  rotateY: hoveredIndex === index ? 5 : 0,
                  z: hoveredIndex === index ? 50 : 0
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-accent-cyan/0 group-hover:from-primary/20 group-hover:to-accent-cyan/20 transition-all duration-500"
                />

                {/* Icon - Huge on large cards */}
                <motion.div
                  className={`relative z-10 ${
                    service.size === 'large' ? 'text-9xl' : 'text-6xl'
                  }`}
                  animate={{
                    rotate: hoveredIndex === index ? 15 : 0,
                    scale: hoveredIndex === index ? 1.2 : 1
                  }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`font-black text-white mb-2 ${
                      service.size === 'large' ? 'text-5xl' : 'text-2xl'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-gray-300 ${
                      service.size === 'large' ? 'text-lg' : 'text-sm'
                    }`}
                  >
                    {service.desc}
                  </p>

                  {/* Arrow indicator on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -10
                    }}
                    className="flex items-center gap-2 mt-4 text-primary font-semibold"
                  >
                    <span>Explore</span>
                    <motion.span
                      animate={{
                        x: hoveredIndex === index ? [0, 5, 0] : 0
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
