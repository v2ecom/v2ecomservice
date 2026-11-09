import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { academyFaqs } from '../../config/academyFaqs';

export default function AcademyFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-academy-light py-16 sm:py-20">
      <div className="container-base">
        <SectionHeader
          tag="FAQ"
          title="Frequently asked"
          highlight="questions"
          description="Clear answers about the courses, schedules and admission. We do not guarantee jobs, income or sales."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {academyFaqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-2xl border border-border bg-white">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`academy-faq-${i}`}
                    id={`academy-faq-btn-${i}`}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-[14.5px] font-semibold text-academy-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-royal"
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={18} className={`shrink-0 text-academy-royal transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`academy-faq-${i}`} role="region" aria-labelledby={`academy-faq-btn-${i}`} hidden={!isOpen} className="px-5 pb-5 text-[13.5px] leading-relaxed text-muted">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
