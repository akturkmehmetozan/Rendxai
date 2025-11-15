'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Project } from '@/app/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Villa Concept',
    description: 'Luxury residential project with minimalist design and sustainable materials.',
    category: 'architectural',
    imageUrl: '/images/projects/villa.jpg',
    featured: true,
    tags: ['Residential', 'Luxury', 'Sustainable']
  },
  {
    id: '2',
    title: 'AI-Generated Urban Plaza',
    description: 'Public space design created using our proprietary AI visualization technology.',
    category: 'ai-generated',
    imageUrl: '/images/projects/plaza.jpg',
    featured: true,
    tags: ['AI', 'Public Space', 'Urban']
  },
  {
    id: '3',
    title: 'Corporate Headquarters',
    description: 'Contemporary office building with smart glass facade and green terraces.',
    category: 'architectural',
    imageUrl: '/images/projects/office.jpg',
    featured: false,
    tags: ['Commercial', 'Corporate', 'Modern']
  },
  {
    id: '4',
    title: 'Boutique Hotel Interior',
    description: 'Luxury hotel interior with custom furniture and atmospheric lighting.',
    category: 'interior',
    imageUrl: '/images/projects/hotel.jpg',
    featured: true,
    tags: ['Interior', 'Hospitality', 'Luxury']
  },
  {
    id: '5',
    title: 'Smart Home Product',
    description: 'Product visualization for next-gen smart home control system.',
    category: 'product',
    imageUrl: '/images/projects/product.jpg',
    featured: false,
    tags: ['Product', 'Technology', '3D']
  },
  {
    id: '6',
    title: 'Cultural Center',
    description: 'Award-winning cultural center with parametric design and natural lighting.',
    category: 'architectural',
    imageUrl: '/images/projects/cultural.jpg',
    featured: true,
    tags: ['Cultural', 'Parametric', 'Public']
  }
];

const categories = ['all', 'architectural', 'interior', 'product', 'ai-generated'] as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 bg-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects showcasing the power of AI-driven 3D visualization
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent-cyan/20 relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent-cyan/40"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Project number overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold text-white/10">
                      {project.id}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent-cyan/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <button className="px-6 py-2 bg-white text-primary font-semibold rounded-lg">
                    View Project
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-primary rounded-lg text-white text-lg font-semibold hover:bg-primary/10 transition-all"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
