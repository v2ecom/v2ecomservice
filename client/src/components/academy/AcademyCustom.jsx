import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACADEMY, customProgramWhatsAppUrl } from '../../config/academy';

const icons = {
  'seller-teams': Users,
  'college-workshops': GraduationCap,
  'student-classes': BookOpen,
};

export default function AcademyCustom() {
  const { items, topics, feeNote } = ACADEMY.customPrograms;

  return (
    <section id="custom" className="bg-white pb-16 sm:pb-20" aria-labelledby="custom-heading">
      <div className="container-base">
        <div className="rounded-[2rem] bg-academy-light px-5 py-12 sm:px-10 sm:py-14">
          <div id="custom-heading">
            <SectionHeader
              tag="Customised programmes"
              title="Training built around"
              highlight="your team or class"
              description="Beyond the two regular courses, we design programmes for seller teams, colleges and student groups."
            />
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {items.map((item, i) => {
              const Icon = icons[item.id] || BookOpen;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0.001, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col rounded-3xl border border-border bg-white p-6 shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-academy-royal/10 text-academy-royal">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[19px] font-bold text-academy-navy">{item.title}</h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-wide text-academy-royal">{item.audience}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{item.text}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={customProgramWhatsAppUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-academy-navy px-5 py-3 text-[13.5px] font-semibold text-white transition hover:bg-academy-royal focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-gold focus-visible:ring-offset-2"
                    >
                      Enquire on WhatsApp <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </motion.li>
              );
            })}
          </ul>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-academy-royal">Topics we can cover</h4>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {topics.map((t) => (
                <li key={t} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-academy-navy">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13.5px] font-medium text-text">{feeNote}</p>
            <p className="mt-2 text-[12.5px] text-muted">Online sessions or classes at our Tiruppur centre; other locations to be confirmed with our team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
