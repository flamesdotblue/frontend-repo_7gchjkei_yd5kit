import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0E0E0E] text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0E0E0E]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Your sports, your stats, your story.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          Scoreboxd lets you log games, rate performances, and share takes — just like Letterboxd, but for sports.
        </motion.p>
        <motion.button
          onClick={onOpenWaitlist}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(34,197,94,0.0)',
              '0 0 0 12px rgba(34,197,94,0.12)',
              '0 0 0 0 rgba(34,197,94,0.0)'
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="group relative rounded-xl bg-emerald-500 px-6 py-3 text-base font-semibold text-black shadow-emerald-500/30 sm:text-lg"
        >
          <span className="relative z-10">Join the Waitlist</span>
          <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.button>
      </div>
    </section>
  );
}
