import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenWaitlist }) {
  const { scrollY } = useScroll();
  // Parallax layers
  const layer1 = useTransform(scrollY, [0, 600], [0, 60]);
  const layer2 = useTransform(scrollY, [0, 600], [0, 110]);
  const layer3 = useTransform(scrollY, [0, 600], [0, 160]);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Monochrome gradient glows with parallax */}
      <motion.div style={{ y: layer3 }} className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" />
      </motion.div>

      {/* Subtle grid lines */}
      <motion.svg style={{ y: layer2 }} className="pointer-events-none absolute inset-0 opacity-[0.14]" viewBox="0 0 1440 900" fill="none">
        <g stroke="url(#gridGradient)" strokeWidth="1">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v-${i}`} x1={(i + 1) * 90} y1="0" x2={(i + 1) * 90} y2="900" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={(i + 1) * 90} x2="1440" y2={(i + 1) * 90} />
          ))}
        </g>
        <defs>
          <linearGradient id="gridGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Floating monochrome badges */}
      <motion.div style={{ y: layer1 }} className="pointer-events-none absolute left-[8%] top-[22%] hidden md:block">
        <Badge label="Live Scores" />
      </motion.div>
      <motion.div style={{ y: layer1 }} className="pointer-events-none absolute right-[10%] top-[28%] hidden md:block">
        <Badge label="AI Insights" />
      </motion.div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          A glossy black orb in a world of data.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-white/80 sm:text-xl"
        >
          Pure black and white. Glass, blur, and motion. A minimalist canvas for futuristic sports storytelling.
        </motion.p>
        <motion.button
          onClick={onOpenWaitlist}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(255,255,255,0.0)',
              '0 0 0 14px rgba(255,255,255,0.10)',
              '0 0 0 0 rgba(255,255,255,0.0)'
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.3 }}
          className="group relative rounded-xl bg-white px-6 py-3 text-base font-semibold text-black sm:text-lg"
        >
          <span className="relative z-10">Join the Waitlist</span>
          <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.button>
      </div>
    </section>
  );
}

function Badge({ label }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -8, 0], opacity: 1 }}
      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-3 py-2 text-white/85 backdrop-blur"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
      <span className="text-xs">{label}</span>
    </motion.div>
  );
}
