'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '#contact' }
    ],
    Services: [
      { name: '3D Rendering', href: '/services/rendering' },
      { name: 'AI Visualization', href: '/services/ai' },
      { name: 'Animations', href: '/services/animation' },
      { name: 'Consulting', href: '/services/consulting' }
    ],
    Resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'FAQ', href: '/faq' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Licenses', href: '/licenses' }
    ]
  };

  return (
    <footer className="relative bg-background-dark border-t border-white/10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <motion.div
                className="text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient">rendx</span>
                <span className="text-accent-cyan">ai</span>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming architectural visions into stunning reality with AI-powered 3D visualization technology.
            </p>
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-primary rounded-lg text-white text-sm font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} <span className="text-white font-medium">rendxai</span>. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {[
                { name: 'Twitter', icon: '𝕏' },
                { name: 'LinkedIn', icon: 'in' },
                { name: 'Instagram', icon: '📷' },
                { name: 'Behance', icon: 'Bē' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gradient-primary flex items-center justify-center transition-all text-sm text-gray-400 hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <span className="text-primary">↑</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-cyan to-accent-purple opacity-50"></div>
    </footer>
  );
}
