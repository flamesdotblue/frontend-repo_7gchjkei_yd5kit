import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onOpenWaitlist }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -12]);
  const opacity = useTransform(scrollY, [0, 200], [0.95, 0.75]);
  const shadow = useTransform(scrollY, [0, 200], [0.28, 0.14]);
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      style={{ y }}
      className="fixed left-0 right-0 top-4 z-40 mx-auto w-[92%] max-w-6xl"
      aria-label="Main navigation"
    >
      <motion.div
        style={{ opacity }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* subtle monochrome radial sheens */}
          <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" />
          <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_60%)]" />
        </div>
        <div className="relative z-10 flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-white"><Rocket className="h-4 w-4" /></span>
            <span className="text-white">Scoreboxd</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#cta" className="hover:text-white">Early Access</a>
            <button
              onClick={onOpenWaitlist}
              className="rounded-xl bg-white px-4 py-2 font-semibold text-black transition hover:bg-white/90"
            >
              Join Waitlist
            </button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 text-white/80 hover:bg-white/10 sm:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="relative z-10 grid gap-2 border-t border-white/10 px-4 py-3 text-sm text-white/80 sm:hidden">
            <a href="#about" className="rounded-lg px-2 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>About</a>
            <a href="#features" className="rounded-lg px-2 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>Features</a>
            <a href="#cta" className="rounded-lg px-2 py-2 hover:bg-white/10" onClick={() => setOpen(false)}>Early Access</a>
            <button
              onClick={() => { setOpen(false); onOpenWaitlist?.(); }}
              className="mt-1 rounded-xl bg-white px-4 py-2 font-semibold text-black"
            >Join Waitlist</button>
          </div>
        )}
      </motion.div>
      <motion.div
        style={{ opacity: shadow }}
        className="pointer-events-none absolute inset-x-8 -z-10 top-6 h-16 rounded-[28px] bg-white/15 blur-2xl"
      />
    </motion.nav>
  );
}
