import { motion } from 'framer-motion';

export default function CTASection({ onOpen }) {
  return (
    <section id="cta" className="relative bg-black py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-2xl font-bold sm:text-3xl text-white"
        >
          Join our monochrome experiment.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mx-auto mb-6 max-w-xl text-white/70"
        >
          Experience Scoreboxd in pure black and white with glass and motion.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
        >
          Join the Waitlist
        </motion.button>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
  );
}
