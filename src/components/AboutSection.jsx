import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative bg-[#0E0E0E] py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold sm:text-4xl"
          >
            Track every game. Relive every moment.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 max-w-lg text-white/80"
          >
            Log your favorite games, rate players, record memories, and discover what your friends are watching.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 text-sm text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Real-time animations
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" /> Clean, editorial design
          </motion.div>
        </div>
        <div className="relative">
          {/* Mockup stack */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="absolute -left-6 top-8 hidden h-56 w-40 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 backdrop-blur md:block"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative z-10 h-72 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-blue-500/10 p-[2px]"
          >
            <div className="h-full w-full rounded-2xl bg-[#111111] p-6">
              <div className="mb-4 flex items-center justify-between text-white/80">
                <span className="text-sm">Game Log</span>
                <span className="rounded-full bg-white/5 px-2 py-1 text-xs">Live</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Lakers vs Celtics', 'Arsenal vs City', 'Yankees vs Mets', 'Chiefs vs Bills', 'PSG vs OM', 'Warriors vs Suns'].map((g, i) => (
                  <motion.div
                    key={g}
                    whileHover={{ y: -4 }}
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
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
