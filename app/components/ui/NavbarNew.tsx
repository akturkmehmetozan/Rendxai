'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', index: '01' },
    { title: 'Services', index: '02' },
    { title: 'Portfolio', index: '03' },
    { title: 'AI Demo', index: '04' },
    { title: 'Contact', index: '05' }
  ];

  return (
    <>
      {/* Floating Menu Button - Circular */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <span className="text-2xl text-white font-bold">+</span>
      </motion.button>

      {/* Radial Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background-dark/95 backdrop-blur-xl z-40"
            />

            {/* Menu Items - Radial Layout */}
            <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
              {menuItems.map((item, index) => {
                const angle = (index * 72) - 90; // 360/5 = 72 degrees per item, -90 to start from top
                const radius = 250;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x,
                      y
                    }}
                    exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    className="absolute pointer-events-auto"
                  >
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center group overflow-hidden"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />

                      {/* Content */}
                      <span className="text-4xl font-black text-white/30 group-hover:text-white/50 transition-colors">
                        {item.index}
                      </span>
                      <span className="text-sm font-bold text-white uppercase tracking-wider">
                        {item.title}
                      </span>

                      {/* Corner decoration */}
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-primary transition-colors" />
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
            >
              <div className="text-6xl font-black text-center">
                <span className="text-gradient">rendx</span>
                <br />
                <span className="text-accent-cyan">ai</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Top Left - Logo (Always visible) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-8 left-8 z-50"
      >
        <div className="text-3xl font-bold">
          <span className="text-gradient">rendx</span>
          <span className="text-accent-cyan">ai</span>
        </div>
      </motion.div>

      {/* Bottom Center - Page Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-12 h-1 bg-white/20 rounded-full overflow-hidden"
            whileHover={{ scaleY: 2 }}
          >
            <motion.div
              className="h-full bg-gradient-primary"
              initial={{ width: i === 0 ? '100%' : '0%' }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
