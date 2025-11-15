import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import AIDemo from './components/sections/AIDemo';
import Contact from './components/sections/Contact';
import Footer from './components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <AIDemo />
      <Contact />
      <Footer />
    </main>
  );
}
