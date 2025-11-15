'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavbarNew from './components/ui/NavbarNew';
import HeroNew from './components/sections/HeroNew';
import ServicesNew from './components/sections/ServicesNew';
import PortfolioNew from './components/sections/PortfolioNew';
import AIDemo from './components/sections/AIDemo';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray('.horizontal-section');

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.5,
          ease: 'power1.inOut'
        },
        end: () => {
          const totalWidth = sections.reduce((acc: number, section) => {
            return acc + (section as HTMLElement).offsetWidth;
          }, 0);
          return `+=${totalWidth}`;
        }
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <NavbarNew />

      <main className="bg-background-dark overflow-x-hidden">
        {/* Horizontal Scroll Container */}
        <div ref={containerRef} className="h-screen overflow-hidden">
          <div className="flex h-screen w-fit">
            <HeroNew />
            <ServicesNew />
            <PortfolioNew />
            <AIDemo />
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
