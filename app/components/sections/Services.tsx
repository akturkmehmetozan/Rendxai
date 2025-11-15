'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Service } from '@/app/types';

const services: Service[] = [
  {
    id: '1',
    title: '3D Architectural Rendering',
    description: 'Photorealistic visualizations that bring your architectural designs to life with stunning detail and accuracy.',
    icon: '🏗️',
    features: [
      'Exterior & Interior Renders',
      'Photorealistic Materials',
      '360° Panoramic Views',
      'Virtual Tours'
    ]
  },
  {
    id: '2',
    title: 'AI-Powered Visualization',
    description: 'Leverage cutting-edge AI technology to generate instant renders from sketches and accelerate your design workflow.',
    icon: '🤖',
    features: [
      'Sketch to Render AI',
      'Style Transfer',
      'Automated Lighting',
      'Material Recognition'
    ]
  },
  {
    id: '3',
    title: 'Real-time 3D Experiences',
    description: 'Interactive 3D environments and virtual walkthroughs powered by real-time rendering engines.',
    icon: '⚡',
    features: [
      'WebGL Experiences',
      'VR/AR Ready',
      'Interactive Models',
      'Real-time Customization'
    ]
  },
  {
    id: '4',
    title: 'Animation & Motion',
    description: 'Dynamic architectural animations and flythrough videos that showcase your projects in motion.',
    icon: '🎬',
    features: [
      'Architectural Flythroughs',
      'Product Animations',
      'Motion Graphics',
      '4K Video Output'
    ]
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-background-dark via-secondary to-background-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient">Our Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Transforming ideas into stunning visual reality with cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="card-gradient rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/20 to-accent-cyan/20 blur-xl -z-10"></div>

                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <motion.div
                  className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="mr-2">Learn more</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-primary rounded-lg text-white text-lg font-semibold shadow-2xl hover:shadow-primary/50 transition-all"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
