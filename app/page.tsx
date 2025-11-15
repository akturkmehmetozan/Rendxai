import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Navbar />
      <Hero />

      {/* Placeholder for future sections */}
      <div className="h-screen bg-gradient-to-b from-background-dark to-secondary flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gradient mb-4">More Sections Coming Soon</h2>
          <p className="text-gray-400">Services • Portfolio • AI Demo • Contact</p>
        </div>
      </div>
    </main>
  );
}
