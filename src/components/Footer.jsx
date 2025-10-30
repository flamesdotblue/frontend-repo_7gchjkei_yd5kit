import { Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-xl font-extrabold tracking-tight">Scoreboxd<span className="text-white/60">.</span></div>
          <div className="mt-1 text-xs text-white/50">© 2025 Scoreboxd. All rights reserved.</div>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#cta" className="hover:text-white">Early Access</a>
          <div className="ml-2 flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="rounded-lg p-2 text-white/70 hover:bg-white/5 hover:text-white"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
