import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Layers } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACADEMY, formatINR } from '../../config/academy';

function Fee({ course }) {
  const offer = ACADEMY.launchOfferConfirmed;
  return (
    <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
      <span className="text-[34px] font-bold leading-none text-academy-navy">{formatINR(course.launchFee)}</span>
      {offer ? (
        <>
          <span className="pb-1 text-[15px] text-muted line-through" aria-label={`Regular fee ${formatINR(course.regularFee)}`}>
            {formatINR(course.regularFee)}
          </span>
          <span className="mb-1 rounded-full bg-academy-gold/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-academy-navy">
            Launch offer{ACADEMY.launchOfferEndsLabel ? ` · until ${ACADEMY.launchOfferEndsLabel}` : ''}
          </span>
        </>
      ) : (
        <span className="pb-1 text-[12px] text-muted">course fee</span>
      )}
    </div>
  );
}

function CourseCard({ course, index, featured, onApply }) {
  return (
    <motion.article
      initial={{ opacity: 0.001, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative flex flex-col rounded-3xl border bg-white p-7 sm:p-8 shadow-card ${
        featured ? 'border-academy-gold ring-1 ring-academy-gold/40' : 'border-border'
      }`}
      aria-labelledby={`course-${course.id}`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-academy-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-academy-navy">
          Complete programme
        </span>
      )}

      <h3 id={`course-${course.id}`} className="text-[22px] font-bold text-academy-navy">{course.name}</h3>
      <p className="mt-2 text-[13.5px] text-muted">{course.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-[12px] font-medium text-academy-royal">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-academy-light px-3 py-1"><Clock size={13} aria-hidden="true" />{course.duration}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-academy-light px-3 py-1"><Layers size={13} aria-hidden="true" />Online classes</span>
      </div>

      <Fee course={course} />
      <p className="mt-2 text-[12.5px] text-muted">Offline classes: please confirm the slot and fees with our team.</p>

      <div className="mt-6 border-t border-border pt-5">
        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-academy-royal">Curriculum</h4>
        {course.extraWeeks ? (
          <div className="mt-3 space-y-4">
            <p className="text-[13.5px] font-medium text-text">Includes all six weeks of Marketplace Professional, plus:</p>
            {course.extraWeeks.map((w) => (
              <div key={w.title}>
                <p className="text-[13.5px] font-semibold text-academy-navy">{w.title}</p>
                <ul className="mt-1.5 grid gap-x-4 gap-y-1 text-[13px] text-muted sm:grid-cols-2">
                  {w.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-academy-gold" aria-hidden="true" />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mt-3 space-y-2 text-[13.5px] text-text">
            {course.modules.map((m) => (
              <li key={m} className="flex gap-2.5"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-academy-gold" aria-hidden="true" />{m}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h4 className="text-[11px] font-semibold uppercase tracking-widest text-academy-royal">What you will be able to do</h4>
        <ul className="mt-3 space-y-2">
          {course.outcomes.map((o) => (
            <li key={o} className="flex gap-2.5 text-[13.5px] text-text">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-academy-royal" aria-hidden="true" />{o}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <button
          type="button"
          onClick={() => onApply(course.id)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-academy-navy px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-academy-royal focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-gold focus-visible:ring-offset-2"
        >
          Apply for this Course <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}

export default function AcademyCourses({ onApply }) {
  return (
    <section id="courses" className="bg-white py-16 sm:py-20" aria-labelledby="courses-heading">
      <div className="container-base">
        <div id="courses-heading">
          <SectionHeader
            tag="Course programmes"
            title="Choose the programme that"
            highlight="fits your goal"
            description="Two practical programmes, taught with real marketplace workflows and hands-on assignments."
          />
        </div>
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          {ACADEMY.courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} featured={i === 1} onApply={onApply} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[12.5px] text-muted">
          Fees shown are per learner. Admission is confirmed only after our team contacts you, confirms your course and schedule, and verifies payment.
        </p>
      </div>
    </section>
  );
}
