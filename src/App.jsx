import { useState } from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesGrid from './components/FeaturesGrid';
import WaitlistModal from './components/WaitlistModal';
import { Twitter, Instagram } from 'lucide-react';

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />
      <AboutSection />
      <CTASection onOpen={() => setWaitlistOpen(true)} />
      <FeaturesGrid />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#0E0E0E] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="text-xl font-extrabold tracking-tight">Scoreboxd<span className="text-emerald-500">.</span></div>
            <div className="mt-1 text-xs text-white/50">© 2025 Scoreboxd. All rights reserved.</div>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <div className="ml-2 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>

      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}

function CTASection({ onOpen }) {
  return (
    <section className="relative bg-[#0E0E0E] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="mb-3 text-2xl font-bold sm:text-3xl">Be one of the first to join Scoreboxd.</h3>
        <p className="mx-auto mb-6 max-w-xl text-white/70">We’re launching soon. Get early access and shape the future of sports fandom.</p>
        <button
          onClick={onOpen}
          className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-black shadow-blue-500/30 transition hover:scale-[1.02]"
        >
          Join the Waitlist
        </button>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
    </section>
  );
}
