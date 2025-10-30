import { motion } from 'framer-motion';

export default function CTASection({ onOpen }) {
  return (
    <section id="cta" className="relative bg-[#0E0E0E] py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-2xl font-bold sm:text-3xl"
        >
          Be one of the first to join Scoreboxd.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="mx-auto mb-6 max-w-xl text-white/70"
        >
          We’re launching soon. Get early access and shape the future of sports fandom.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-black shadow-blue-500/30"
        >
          Join the Waitlist
        </motion.button>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
    </section>
  );
}
