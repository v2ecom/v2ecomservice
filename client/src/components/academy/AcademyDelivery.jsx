import { Monitor, Building2, Languages, CalendarDays, Award, UsersRound } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACADEMY } from '../../config/academy';

export default function AcademyDelivery() {
  const cards = [
    { icon: Monitor, title: 'Online', text: 'Live interactive online sessions.' },
    { icon: Building2, title: 'Offline', text: `Classroom sessions at ${ACADEMY.location.split(',')[0]}.` },
    { icon: Languages, title: 'Languages', text: 'Tamil + English (Tanglish).' },
    { icon: CalendarDays, title: 'Schedules', text: 'Weekday Evening batches and Weekend batches.' },
  ];

  return (
    <>
      <section id="delivery" className="bg-white py-16 sm:py-20">
        <div className="container-base">
          <SectionHeader
            tag="Training delivery"
            title="Flexible ways to"
            highlight="learn with us"
            description="Choose online or classroom learning and a batch timing that suits your routine."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-border bg-academy-light p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-academy-navy text-academy-gold">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-academy-navy">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trainer" className="bg-academy-light py-16 sm:py-20" aria-labelledby="trainer-title">
        <div className="container-base">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-7 shadow-card sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-academy-royal">Your trainer</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
              <h2 id="trainer-title" className="text-[28px] font-bold text-academy-navy">Vivek</h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-academy-gold/20 px-3 py-1 text-[12px] font-semibold text-academy-navy">
                <Award size={14} aria-hidden="true" /> 7+ years of experience
              </span>
            </div>
            <p className="mt-1 text-[13.5px] font-medium text-academy-royal">
              Founder – V2 Ecom Services · Lead Trainer – V2 Ecom Academy
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              Practical e-commerce marketplace professional with 7+ years of experience in marketplace operations, product research, listing optimization, advertising and seller business growth.
            </p>
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-academy-light p-4">
              <UsersRound size={18} className="mt-0.5 shrink-0 text-academy-royal" aria-hidden="true" />
              <p className="text-[13px] leading-relaxed text-muted">
                <strong className="text-academy-navy">Guest trainers:</strong> marketplace specialists who support the programme with practical experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
