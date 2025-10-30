import { motion } from 'framer-motion';

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0E0E0E] text-white">
      {/* Dynamic 2D illustration background */}
      <div className="absolute inset-0">
        {/* Soft gradient glow */}
        <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.18),transparent_60%)]" />

        {/* Animated abstract shapes */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-[-10%] top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={floatTransition}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-8%] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 10, 0] }}
          transition={{ ...floatTransition, duration: 7.5 }}
        />

        {/* Stylized court/field lines */}
        <svg className="pointer-events-none absolute inset-0 opacity-[0.16]" viewBox="0 0 1440 900" fill="none">
          <g stroke="url(#gridGradient)" strokeWidth="1">
            {/* vertical lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={`v-${i}`} x1={(i + 1) * 90} y1="0" x2={(i + 1) * 90} y2="900" />
            ))}
            {/* horizontal lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={(i + 1) * 90} x2="1440" y2={(i + 1) * 90} />
            ))}
          </g>
          <defs>
            <linearGradient id="gridGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sports icons as 2D illustrations */}
        <FloatingBall className="left-[10%] top-[18%]" color="#22C55E" delay={0} />
        <FloatingBall className="left-[72%] top-[28%] scale-125" color="#3B82F6" delay={0.8} pattern="basketball" />
        <FloatingBall className="left-[28%] top-[62%]" color="#A78BFA" delay={0.4} pattern="soccer" />
        <FloatingBadge className="right-[12%] bottom-[18%]" />
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#0E0E0E]" />

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

function FloatingBall({ className = '', color = '#22C55E', delay = 0, pattern = 'plain' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ y: 0, rotate: 0, opacity: 0 }}
      animate={{ y: [-6, 6, -6], rotate: [0, 6, 0], opacity: 1 }}
      transition={{ duration: 5.5, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="drop-shadow-[0_0_22px_rgba(34,197,94,0.25)]">
        <defs>
          <radialGradient id="ballGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 40) rotate(45) scale(90)">
            <stop stopColor={color} stopOpacity="0.9" />
            <stop offset="1" stopColor={color} stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="44" fill="url(#ballGrad)" stroke="white" strokeOpacity="0.06" />
        {pattern === 'basketball' && (
          <g stroke="white" strokeOpacity="0.25" strokeWidth="2">
            <path d="M16 60h88" />
            <path d="M60 16v88" />
            <path d="M28 28c18 12 18 52 0 64" />
            <path d="M92 28c-18 12 -18 52 0 64" />
          </g>
        )}
        {pattern === 'soccer' && (
          <g stroke="white" strokeOpacity="0.25" strokeWidth="2" fill="none">
            <polygon points="60,28 76,44 68,64 52,64 44,44" />
            <path d="M60 104c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40z" />
          </g>
        )}
      </svg>
    </motion.div>
  );
}

function FloatingBadge({ className = '' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -8, 0], opacity: 1 }}
      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-xs text-white/80">Live: Weekend Derby</span>
      </div>
    </motion.div>
  );
}
