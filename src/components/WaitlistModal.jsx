import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WaitlistModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validEmail = (val) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(val);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Please enter your name.');
    if (!validEmail(email)) return setError('Please enter a valid email.');
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
    }, 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 px-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E0E] text-white shadow-xl"
          >
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Join the Waitlist</h3>
                <button onClick={onClose} className="rounded-lg p-2 text-white/60 hover:bg-white/5 hover:text-white">✕</button>
              </div>

              {!success ? (
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm text-white/70">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-emerald-500"
                      placeholder="Alex Morgan"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm text-white/70">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40 focus:border-emerald-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  {error && <div className="text-sm text-red-400">{error}</div>}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-black disabled:opacity-60"
                  >
                    {loading ? 'Joining…' : 'Join the Waitlist'}
                  </motion.button>
                </form>
              ) : (
                <Success onClose={onClose} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Success({ onClose }) {
  return (
    <div className="space-y-5">
      <div className="mx-auto grid place-items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-emerald-500/20"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewBox="0 0 24 24"
            className="h-10 w-10 text-emerald-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </motion.svg>
        </motion.div>
      </div>
      <div className="text-center">
        <h4 className="mb-1 text-lg font-semibold">You're on the list!</h4>
        <p className="text-white/70">Thanks for joining. We’ll email you when we launch.</p>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05 } },
        }}
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -80, -140] }}
            transition={{ duration: 1.8, delay: i * 0.04, ease: 'easeOut' }}
            className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400"
            style={{ transform: `translate(${(Math.random() - 0.5) * 240}px, ${(Math.random() - 0.5) * 160}px)` }}
          />
        ))}
      </motion.div>
      <div className="pt-2 text-center">
        <button onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Close</button>
      </div>
    </div>
  );
}
