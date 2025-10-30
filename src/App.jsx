import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />
      <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />
      <div id="about"><AboutSection /></div>
      <div id="features"><FeaturesGrid /></div>
      <CTASection onOpen={() => setWaitlistOpen(true)} />
      <Footer />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}
