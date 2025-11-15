'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIDemo() {
  const [isRendering, setIsRendering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [renderMode, setRenderMode] = useState<'wireframe' | 'textured' | 'final'>('wireframe');

  const startDemo = () => {
    setIsRendering(true);
    setProgress(0);
    setRenderMode('wireframe');

    // Simulate rendering progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRendering(false);
          return 100;
        }

        // Change render mode based on progress
        if (prev >= 33 && prev < 66) {
          setRenderMode('textured');
        } else if (prev >= 66) {
          setRenderMode('final');
        }

        return prev + 2;
      });
    }, 100);
  };

  return (
    <section id="ai-demo" className="relative py-32 bg-gradient-to-b from-background-dark to-secondary overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">AI Rendering Engine</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of architectural visualization with our real-time AI-powered rendering
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Rendering Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-secondary to-background-dark overflow-hidden relative">
              {/* Render Preview */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {renderMode === 'wireframe' && (
                    <motion.div
                      key="wireframe"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="w-64 h-64 relative"
                    >
                      {/* Wireframe representation */}
                      <div className="absolute inset-0 border-4 border-primary/50"></div>
                      <div className="absolute inset-4 border-2 border-primary/30"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/30"></div>
                      <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border border-accent-cyan/50"></div>
                      <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
                      </motion.div>
                    </motion.div>
                  )}

                  {renderMode === 'textured' && (
                    <motion.div
                      key="textured"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="w-64 h-64 bg-gradient-to-br from-primary/40 to-accent-cyan/40 rounded-lg shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    </motion.div>
                  )}

                  {renderMode === 'final' && (
                    <motion.div
                      key="final"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-64 h-64 bg-gradient-to-br from-primary via-accent-purple to-accent-cyan rounded-lg shadow-2xl relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                          backgroundSize: '200% 200%'
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mode indicator */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg">
                <span className="text-sm text-accent-cyan font-mono">
                  {renderMode === 'wireframe' && 'WIREFRAME MODE'}
                  {renderMode === 'textured' && 'APPLYING TEXTURES'}
                  {renderMode === 'final' && 'FINAL RENDER'}
                </span>
              </div>

              {/* Progress overlay */}
              {isRendering && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                />
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: 'GPU Usage', value: `${Math.min(progress, 100)}%` },
                { label: 'Render Time', value: `${(progress / 10).toFixed(1)}s` },
                { label: 'Quality', value: renderMode === 'final' ? '4K' : 'Processing' }
              ].map((stat, i) => (
                <div key={i} className="card-gradient rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Controls & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Real-Time AI Processing
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our proprietary AI engine transforms your architectural concepts into
                photorealistic renders in seconds. Watch as the AI processes wireframes,
                applies materials, calculates lighting, and delivers stunning results.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: '⚡', title: 'Lightning Fast', desc: '10x faster than traditional rendering' },
                { icon: '🎨', title: 'Smart Materials', desc: 'AI-powered material recognition and application' },
                { icon: '💡', title: 'Auto Lighting', desc: 'Intelligent lighting calculation and optimization' },
                { icon: '🎯', title: 'Precise Output', desc: 'Photorealistic 4K quality renders' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={startDemo}
              disabled={isRendering}
              whileHover={{ scale: isRendering ? 1 : 1.05 }}
              whileTap={{ scale: isRendering ? 1 : 0.95 }}
              className={`w-full px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
                isRendering
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-primary shadow-2xl hover:shadow-primary/50'
              } text-white`}
            >
              {isRendering ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="inline-block mr-2"
                  >
                    ⚙️
                  </motion.span>
                  Rendering... {progress}%
                </span>
              ) : (
                'Start AI Demo'
              )}
            </motion.button>

            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-accent-cyan font-semibold"
              >
                ✨ Render Complete! Click to restart
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
