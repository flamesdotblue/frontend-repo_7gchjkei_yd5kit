import { motion } from 'framer-motion';
import { Trophy, Star, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Log Games',
    desc: 'Record every match you watch.',
    icon: Trophy,
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    title: 'Rate & Review',
    desc: 'Share your takes with the world.',
    icon: Star,
    accent: 'from-blue-500/20 to-blue-500/0',
  },
  {
    title: 'Follow & Discuss',
    desc: 'Connect with fans like you.',
    icon: Users,
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    title: 'Your Stats',
    desc: 'See your habits evolve over seasons.',
    icon: BarChart3,
    accent: 'from-blue-500/20 to-blue-500/0',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative bg-[#0E0E0E] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-2xl font-bold sm:text-3xl"
        >
          Built for modern sports fans
        </motion.h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6"
            >
              <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-b ${f.accent} opacity-0 blur-2xl transition-opacity group-hover:opacity-100`} />
              <div className="relative z-10 flex items-start gap-4">
                <div className="rounded-xl bg-white/5 p-3 text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">{f.title}</h4>
                  <p className="text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini social proof */}
        <div className="mt-14">
          <div className="mx-auto max-w-3xl text-center text-white/70">
            “Letterboxd for sports? Genius.” — Early Beta Tester
          </div>
          <div className="mt-6 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-white/40">
              {["SportsNet", "FanPulse", "Playbook", "AthletiQ", "The Huddle"].map((l) => (
                <span key={l} className="mx-8 inline-block text-sm tracking-wider">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%);} }
        .animate-marquee { animation: marquee 18s linear infinite; }
      `}</style>
    </section>
  );
}
