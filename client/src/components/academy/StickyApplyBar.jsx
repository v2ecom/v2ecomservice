import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Mobile-only bar: shown after the hero, hidden while the admission form is on screen.
export default function StickyApplyBar({ onApply }) {
  const [pastHero, setPastHero] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const form = document.getElementById('apply');
    let io;
    if (form && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.05 });
      io.observe(form);
    }
    return () => { window.removeEventListener('scroll', onScroll); io?.disconnect(); };
  }, []);

  if (!pastHero || formVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-academy-navy/95 px-4 py-3 pr-24 backdrop-blur md:hidden" role="region" aria-label="Apply to V2 Ecom Academy">
      <button
        type="button"
        onClick={onApply}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-academy-gold px-5 py-3 text-[14px] font-semibold text-academy-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Apply Now <ArrowRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
