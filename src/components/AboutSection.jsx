import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold sm:text-4xl"
          >
            Minimal. Monochrome. Motion.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 max-w-lg text-white/80"
          >
            A black and white interface with glass and blur that keeps focus on your highlights and stats.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 text-sm text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-white/70" /> Glass surfaces
            <span className="inline-block h-2 w-2 rounded-full bg-white/50" /> Subtle depth
          </motion.div>
        </div>
        <div className="relative">
          {/* Glass cards stack */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="absolute -left-6 top-8 hidden h-56 w-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:block"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative z-10 h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-[2px] backdrop-blur"
          >
            <div className="h-full w-full rounded-2xl bg-black p-6">
              <div className="mb-4 flex items-center justify-between text-white/80">
                <span className="text-sm">Glass Mockups</span>
                <span className="rounded-full bg-white/5 px-2 py-1 text-xs">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Feed', 'Game Log', 'Profile', 'Leaderboard', 'Insights', 'Clubs'].map((g) => (
                  <motion.div
                    key={g}
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div className="mb-2 h-20 rounded-lg bg-gradient-to-br from-white/10 to-white/5" />
                    <div className="text-xs text-white/70">{g}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
