import { ArrowRight, MessageCircle, Monitor, Languages, MapPin, Package, Search, BarChart3, Megaphone, ClipboardList } from 'lucide-react';
import { ACADEMY, generalWhatsAppUrl } from '../../config/academy';
import amazonLogo from '../../assets/amazonlogo.png';
import flipkartLogo from '../../assets/flipkartlogo.png';
import meeshoLogo from '../../assets/meeshologo.png';
import myntraLogo from '../../assets/myntralogo.png';

const pathSteps = [
  { icon: Search, label: 'Product research' },
  { icon: ClipboardList, label: 'Listings & catalogue' },
  { icon: Package, label: 'Daily operations' },
  { icon: Megaphone, label: 'Advertising' },
  { icon: BarChart3, label: 'Reports & profit' },
];

function LearningPathIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:ml-auto" role="img" aria-label="Illustration of the marketplace learning path: product research, listings, operations, advertising and reporting, across Amazon, Flipkart, Meesho and Myntra">
      <div className="absolute -inset-6 rounded-[2rem] bg-academy-gold/10 blur-2xl" aria-hidden="true" />
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-6 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-academy-gold mb-1">Your learning path</p>
        <p className="text-white font-semibold text-[15px] mb-5">From marketplace basics to running real accounts</p>

        <ol className="space-y-3">
          {pathSteps.map(({ icon: Icon, label }, i) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-academy-gold/15 text-academy-gold">
                <Icon size={17} aria-hidden="true" />
              </span>
              <span className="text-[13px] text-white/90 font-medium">{label}</span>
              <span className="ml-auto h-1.5 rounded-full bg-gradient-to-r from-academy-gold to-academy-royal" style={{ width: `${34 + i * 12}%`, maxWidth: '45%' }} aria-hidden="true" />
            </li>
          ))}
        </ol>

        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">Marketplaces covered</p>
          <div className="flex items-center gap-2.5">
            {[
              [amazonLogo, 'Amazon'],
              [flipkartLogo, 'Flipkart'],
              [meeshoLogo, 'Meesho'],
              [myntraLogo, 'Myntra'],
            ].map(([src, alt]) => (
              <span key={alt} className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-2">
                <img src={src} alt={alt} className="h-full w-full object-contain" loading="lazy" />
              </span>
            ))}
            <span className="text-[11px] text-white/60 ml-1">+ more</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcademyHero({ onExplore }) {
  return (
    <section className="relative overflow-hidden bg-academy-navy pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24" aria-labelledby="academy-hero-title">
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-academy-royal/30 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-academy-gold/10 blur-[110px]" aria-hidden="true" />

      <div className="container-base relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-academy-gold/40 bg-academy-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-academy-gold">
              {ACADEMY.name} · {ACADEMY.tagline}
            </p>

            <h1
              id="academy-hero-title"
              className="mt-6 text-white"
              style={{ fontSize: 'clamp(30px, 5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#fff' }}
            >
              Build Your Career in <span className="text-academy-gold"><span className="whitespace-nowrap">E-commerce</span> Marketplace</span> Management.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-white/80">
              Learn practical marketplace skills from industry professionals. Master Amazon, Flipkart, Meesho and more through real-world training.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-white/75" aria-label="Training highlights">
              <li className="inline-flex items-center gap-2"><Monitor size={15} className="text-academy-gold" aria-hidden="true" />Online &amp; Offline Classes</li>
              <li className="inline-flex items-center gap-2"><Languages size={15} className="text-academy-gold" aria-hidden="true" />Tamil + English</li>
              <li className="inline-flex items-center gap-2"><MapPin size={15} className="text-academy-gold" aria-hidden="true" />Tiruppur Classroom</li>
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-academy-gold px-7 py-3.5 text-[14px] font-semibold text-academy-navy shadow-sm transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-academy-navy"
              >
                Explore Courses <ArrowRight size={16} aria-hidden="true" />
              </button>
              <a
                href={generalWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-academy-navy"
              >
                <MessageCircle size={16} aria-hidden="true" /> Enquire on WhatsApp
              </a>
            </div>
          </div>

          <LearningPathIllustration />
        </div>
      </div>
    </section>
  );
}
