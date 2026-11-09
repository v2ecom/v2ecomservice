import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { ACADEMY, INDIAN_STATES, buildWhatsAppUrl, formatINR, getCourse } from '../../config/academy';
import { STEP_FIELDS, emptyForm, validateApplication } from '../../lib/academyValidation';

const O = ACADEMY.options;
const STEPS = ['Personal', 'Professional', 'Course', 'Goals'];

const inputCls = (err) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-[14px] text-text placeholder:text-muted focus:outline-none focus:ring-2 transition ${
    err ? 'border-red-400 focus:ring-red-200' : 'border-border focus:border-academy-royal focus:ring-academy-royal/25'
  }`;

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-academy-navy">
        {label} {required ? <span className="text-red-500" aria-hidden="true">*</span> : <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-[12px] text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 flex items-start gap-1 text-[12px] text-red-600"><AlertCircle size={13} className="mt-0.5 shrink-0" aria-hidden="true" />{error}</p>}
    </div>
  );
}

function ChoiceGroup({ name, legend, options, value, onChange, error, required = true, multiple = false, cols = 'sm:grid-cols-2' }) {
  const selected = multiple ? value : [value];
  const toggle = (opt) => {
    if (!multiple) return onChange(opt);
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  };
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined} data-field={name}>
      <legend className="mb-2 text-[13px] font-semibold text-academy-navy">
        {legend} {required ? <span className="text-red-500" aria-hidden="true">*</span> : <span className="font-normal text-muted">(optional)</span>}
      </legend>
      <div className={`grid gap-2 ${cols}`}>
        {options.map((opt) => {
          const on = selected.includes(opt);
          return (
            <label key={opt} className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-[13.5px] transition focus-within:ring-2 focus-within:ring-academy-royal/40 ${on ? 'border-academy-royal bg-academy-royal/5 text-academy-navy font-medium' : 'border-border bg-white text-text hover:border-academy-royal/50'}`}>
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name={name}
                value={opt}
                checked={on}
                onChange={() => toggle(opt)}
                className="h-4 w-4 accent-[#174A8B]"
              />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>
      {error && <p id={`${name}-error`} role="alert" className="mt-1.5 flex items-start gap-1 text-[12px] text-red-600"><AlertCircle size={13} className="mt-0.5 shrink-0" aria-hidden="true" />{error}</p>}
    </fieldset>
  );
}

function ProgressBar({ step }) {
  return (
    <nav aria-label="Application progress" className="mb-8">
      <ol className="flex items-center">
        {STEPS.map((label, i) => {
          const n = i + 1;
          const done = n < step;
          const current = n === step;
          return (
            <li key={label} className="flex flex-1 items-center last:flex-none" aria-current={current ? 'step' : undefined}>
              <span className="flex flex-col items-center gap-1.5">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold transition ${done ? 'bg-academy-royal text-white' : current ? 'bg-academy-gold text-academy-navy ring-4 ring-academy-gold/25' : 'bg-academy-light text-muted'}`}>
                  {done ? <CheckCircle2 size={18} aria-hidden="true" /> : n}
                </span>
                <span className={`hidden text-[11px] font-medium sm:block ${current ? 'text-academy-navy' : 'text-muted'}`}>{label}</span>
              </span>
              {n < STEPS.length && <span className={`mx-2 mb-0 h-0.5 flex-1 sm:mb-5 ${done ? 'bg-academy-royal' : 'bg-border'}`} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-center text-[12px] text-muted sm:hidden">Step {step} of {STEPS.length}: {STEPS[step - 1]}</p>
    </nav>
  );
}

function SuccessPanel({ result, onReturn }) {
  const course = getCourse(result.courseId);
  const wa = buildWhatsAppUrl({
    applicationId: result.applicationId,
    name: result.name,
    courseName: course?.name ?? result.courseId,
    mode: result.mode,
    batch: result.batch,
  });
  const pay = ACADEMY.paymentInstructions;
  return (
    <div role="status" aria-live="polite" className="text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <CheckCircle2 size={34} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-[24px] font-bold text-academy-navy">Application received</h3>
      <p className="mt-2 text-[14px] text-muted">Thank you, {result.name.split(' ')[0]}. Your application has been saved.</p>

      <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-academy-gold/50 bg-academy-gold/10 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-academy-royal">Application ID</p>
        <p className="mt-1 select-all font-mono text-[20px] font-bold tracking-wide text-academy-navy">{result.applicationId}</p>
      </div>

      <dl className="mx-auto mt-6 grid max-w-md gap-2 text-left text-[13px]">
        {[
          ['Course', course ? `${course.name} (${course.duration}) – ${formatINR(course.launchFee)}` : result.courseId],
          ['Learning mode', result.mode],
          ['Preferred batch', result.batch],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-border pb-2"><dt className="text-muted">{k}</dt><dd className="text-right font-medium text-academy-navy">{v}</dd></div>
        ))}
      </dl>

      <div className="mx-auto mt-6 max-w-md rounded-xl bg-academy-light p-4 text-left text-[12.5px] leading-relaxed text-muted">
        <p className="font-semibold text-academy-navy">What happens next</p>
        <ol className="mt-1.5 list-decimal space-y-1 pl-5">
          <li>Our team contacts you.</li>
          <li>Your course and schedule are confirmed.</li>
          <li>Payment instructions are shared by the team.</li>
          <li>Payment is verified and your admission is confirmed.</li>
        </ol>
        <p className="mt-2">Submitting this form does not confirm admission.</p>
      </div>

      {pay.enabled && pay.text && (
        <div className="mx-auto mt-4 max-w-md whitespace-pre-line rounded-xl border border-border p-4 text-left text-[12.5px] text-muted">{pay.text}</div>
      )}

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#20BD5C] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]">
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp Enquiry
        </a>
        <button type="button" onClick={onReturn} className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-[14px] font-semibold text-academy-navy transition hover:bg-academy-light focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-royal">
          Return to Academy
        </button>
      </div>
      <p className="mt-4 text-[12px] text-muted">Tap “WhatsApp Enquiry” to send your details to us. No message is sent automatically.</p>
    </div>
  );
}

export default function AdmissionForm({ selectedCourse, onReturn }) {
  const [form, setForm] = useState({ ...emptyForm, courseId: selectedCourse || '' });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle'); // idle | submitting
  const [serverError, setServerError] = useState('');
  const [result, setResult] = useState(null);
  const [honeypot, setHoneypot] = useState('');
  const startedAt = useRef(null);
  const sectionRef = useRef(null);
  const startedOnce = useRef(false);

  // Preselect the course when a course card's "Apply" button is used (adjusting state during render, per React guidance).
  const [appliedCourse, setAppliedCourse] = useState(selectedCourse);
  if (selectedCourse !== appliedCourse) {
    setAppliedCourse(selectedCourse);
    if (selectedCourse) {
      setForm((cur) => ({ ...cur, courseId: selectedCourse }));
      setErrors((cur) => ({ ...cur, courseId: undefined }));
    }
  }

  const set = (field) => (e) => {
    const value = e && e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e;
    if (!startedOnce.current) { startedOnce.current = true; startedAt.current = Date.now(); }
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((er) => (er[field] ? { ...er, [field]: undefined } : er));
  };
  const setChoice = (field) => (value) => set(field)({ target: { type: 'text', value } });

  const focusFirstError = (errs) => {
    requestAnimationFrame(() => {
      const first = Object.keys(errs)[0];
      if (!first) return;
      const el = sectionRef.current?.querySelector(`[name="${first}"], #f-${first}, [data-field="${first}"] input`);
      el?.focus?.();
    });
  };

  const scrollToForm = () => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const next = () => {
    const { errors: errs } = validateApplication(form, STEP_FIELDS[step]);
    if (Object.keys(errs).length) { setErrors((e) => ({ ...e, ...errs })); focusFirstError(errs); return; }
    setStep((s) => s + 1);
    scrollToForm();
  };
  const back = () => { setStep((s) => Math.max(1, s - 1)); setServerError(''); scrollToForm(); };

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return; // prevent duplicate submissions
    const { errors: errs, values } = validateApplication(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      const firstStep = [1, 2, 3, 4].find((s) => STEP_FIELDS[s].some((f) => errs[f]));
      if (firstStep) setStep(firstStep);
      focusFirstError(errs);
      return;
    }
    setStatus('submitting');
    setServerError('');
    try {
      const res = await fetch(ACADEMY.applyEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website: honeypot, elapsedMs: startedAt.current ? Date.now() - startedAt.current : 0 }),
      });
      let data = null;
      try { data = await res.json(); } catch { /* non-JSON response */ }

      if (res.ok && data?.ok && data.applicationId) {
        setResult({ applicationId: data.applicationId, name: values.fullName, courseId: values.courseId, mode: values.mode, batch: values.batch });
        scrollToForm();
      } else if (res.status === 422 && data?.errors) {
        setErrors(data.errors);
        const firstStep = [1, 2, 3, 4].find((s) => STEP_FIELDS[s].some((f) => data.errors[f])) || step;
        setStep(firstStep);
        setServerError('Please check the highlighted fields and try again.');
      } else if (res.status === 429) {
        setServerError('Too many attempts. Please wait a few minutes and try again, or contact us on WhatsApp.');
      } else {
        setServerError('We could not submit your application right now. Your details are still here — please try again, or contact us on WhatsApp.');
      }
    } catch {
      setServerError('Network problem. Your details are still here — please check your connection and try again.');
    } finally {
      setStatus('idle');
    }
  };

  const err = (f) => errors[f];
  const aria = (f) => ({ 'aria-invalid': err(f) ? true : undefined, 'aria-describedby': err(f) ? `f-${f}-error` : undefined });

  return (
    <section id="apply" ref={sectionRef} className="bg-white py-16 sm:py-20 scroll-mt-20" aria-labelledby="apply-heading">
      <div className="container-base">
        <div id="apply-heading">
          <SectionHeader
            tag="Admission"
            title="Apply to"
            highlight="V2 Ecom Academy"
            description="Takes about 3 minutes. Submitting this form does not confirm admission — our team will contact you with the next steps."
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-white p-6 shadow-card sm:p-10">
          {result ? (
            <SuccessPanel result={result} onReturn={onReturn} />
          ) : (
            <form onSubmit={submit} noValidate aria-busy={status === 'submitting'}>
              <ProgressBar step={step} />

              {/* Honeypot: hidden from people, visible to bots */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                <label>Website <input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
              </div>

              {step === 1 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Field id="f-fullName" label="Full name" required error={err('fullName')}>
                      <input id="f-fullName" name="fullName" type="text" autoComplete="name" value={form.fullName} onChange={set('fullName')} className={inputCls(err('fullName'))} placeholder="As you want it on your certificate" {...aria('fullName')} />
                    </Field>
                  </div>
                  <Field id="f-mobile" label="Mobile number" required error={err('mobile')} hint="10-digit Indian mobile number">
                    <input id="f-mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" value={form.mobile} onChange={set('mobile')} className={inputCls(err('mobile'))} placeholder="98765 43210" {...aria('mobile')} />
                  </Field>
                  <Field id="f-whatsapp" label="WhatsApp number" required error={err('whatsapp')}>
                    <input id="f-whatsapp" name="whatsapp" type="tel" inputMode="numeric" value={form.whatsapp} onChange={set('whatsapp')} className={inputCls(err('whatsapp'))} placeholder="98765 43210" {...aria('whatsapp')} />
                    <button type="button" onClick={() => setForm((f) => ({ ...f, whatsapp: f.mobile }))} className="mt-1 text-[12px] font-medium text-academy-royal underline-offset-2 hover:underline">Same as mobile number</button>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="f-email" label="Email address" required error={err('email')}>
                      <input id="f-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set('email')} className={inputCls(err('email'))} placeholder="you@example.com" {...aria('email')} />
                    </Field>
                  </div>
                  <Field id="f-city" label="City" required error={err('city')}>
                    <input id="f-city" name="city" type="text" autoComplete="address-level2" value={form.city} onChange={set('city')} className={inputCls(err('city'))} {...aria('city')} />
                  </Field>
                  <Field id="f-state" label="State" required error={err('state')}>
                    <select id="f-state" name="state" value={form.state} onChange={set('state')} className={inputCls(err('state'))} {...aria('state')}>
                      <option value="">Select state</option>
                      {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field id="f-ageGroup" label="Age group" required error={err('ageGroup')} hint="Admissions are open to learners aged 18 and above.">
                    <select id="f-ageGroup" name="ageGroup" value={form.ageGroup} onChange={set('ageGroup')} className={inputCls(err('ageGroup'))} {...aria('ageGroup')}>
                      <option value="">Select age group</option>
                      {O.ageGroups.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </Field>
                  <Field id="f-gender" label="Gender" error={err('gender')}>
                    <select id="f-gender" name="gender" value={form.gender} onChange={set('gender')} className={inputCls(err('gender'))} {...aria('gender')}>
                      <option value="">Select</option>
                      {O.genders.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field id="f-qualification" label="Highest qualification" required error={err('qualification')}>
                      <select id="f-qualification" name="qualification" value={form.qualification} onChange={set('qualification')} className={inputCls(err('qualification'))} {...aria('qualification')}>
                        <option value="">Select qualification</option>
                        {O.qualifications.map((q) => <option key={q} value={q}>{q}</option>)}
                      </select>
                    </Field>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <ChoiceGroup name="occupation" legend="Current status" options={O.statuses} value={form.occupation} onChange={setChoice('occupation')} error={err('occupation')} cols="sm:grid-cols-2" />
                  <Field id="f-businessName" label="Business name" error={err('businessName')}>
                    <input id="f-businessName" name="businessName" type="text" value={form.businessName} onChange={set('businessName')} className={inputCls(err('businessName'))} {...aria('businessName')} />
                  </Field>
                  <ChoiceGroup name="currentPlatforms" legend="Current marketplace platforms" options={O.currentPlatforms} value={form.currentPlatforms} onChange={setChoice('currentPlatforms')} error={err('currentPlatforms')} multiple cols="grid-cols-2 sm:grid-cols-4" />
                  <ChoiceGroup name="experience" legend="Previous e-commerce experience" options={O.experience} value={form.experience} onChange={setChoice('experience')} error={err('experience')} cols="sm:grid-cols-2" />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <fieldset data-field="courseId" aria-describedby={err('courseId') ? 'courseId-error' : undefined}>
                    <legend className="mb-2 text-[13px] font-semibold text-academy-navy">Course <span className="text-red-500" aria-hidden="true">*</span></legend>
                    <div className="grid gap-3">
                      {ACADEMY.courses.map((c) => {
                        const on = form.courseId === c.id;
                        return (
                          <label key={c.id} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition focus-within:ring-2 focus-within:ring-academy-royal/40 ${on ? 'border-academy-royal bg-academy-royal/5' : 'border-border hover:border-academy-royal/50'}`}>
                            <input type="radio" name="courseId" value={c.id} checked={on} onChange={() => setChoice('courseId')(c.id)} className="h-4 w-4 accent-[#174A8B]" />
                            <span className="flex-1 text-[14px] font-medium text-academy-navy">{c.name} – {c.duration}</span>
                            <span className="text-[14px] font-bold text-academy-navy">{formatINR(c.launchFee)}</span>
                          </label>
                        );
                      })}
                    </div>
                    {err('courseId') && <p id="courseId-error" role="alert" className="mt-1.5 flex gap-1 text-[12px] text-red-600"><AlertCircle size={13} className="mt-0.5 shrink-0" aria-hidden="true" />{err('courseId')}</p>}
                  </fieldset>
                  <ChoiceGroup name="mode" legend="Learning mode" options={O.modes} value={form.mode} onChange={setChoice('mode')} error={err('mode')} />
                  {form.mode.startsWith('Offline') && (
                    <p className="-mt-3 text-[12.5px] text-muted">Our team will confirm the offline slot and fees with you.</p>
                  )}
                  <ChoiceGroup name="batch" legend="Preferred batch" options={O.batches} value={form.batch} onChange={setChoice('batch')} error={err('batch')} />
                  <ChoiceGroup name="language" legend="Preferred language" options={O.languages} value={form.language} onChange={setChoice('language')} error={err('language')} cols="sm:grid-cols-3" />
                  <ChoiceGroup name="interests" legend="Marketplace interest (choose all that apply)" options={O.interests} value={form.interests} onChange={setChoice('interests')} error={err('interests')} multiple cols="grid-cols-2 sm:grid-cols-4" />
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <ChoiceGroup name="objective" legend="Why do you want to join?" options={O.objectives} value={form.objective} onChange={setChoice('objective')} error={err('objective')} cols="sm:grid-cols-2" />
                  <Field id="f-source" label="How did you hear about V2 Ecom Academy?" required error={err('source')}>
                    <select id="f-source" name="source" value={form.source} onChange={set('source')} className={inputCls(err('source'))} {...aria('source')}>
                      <option value="">Select</option>
                      {O.sources.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field id="f-message" label="Additional message" error={err('message')}>
                    <textarea id="f-message" name="message" rows={4} maxLength={1000} value={form.message} onChange={set('message')} className={inputCls(err('message'))} placeholder="Anything you would like us to know" {...aria('message')} />
                  </Field>
                  <div>
                    <label className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-[13px] leading-relaxed ${err('consent') ? 'border-red-400 bg-red-50/40' : 'border-border'}`}>
                      <input id="f-consent" name="consent" type="checkbox" checked={form.consent} onChange={set('consent')} className="mt-0.5 h-4 w-4 shrink-0 accent-[#174A8B]" aria-invalid={err('consent') ? true : undefined} aria-describedby={err('consent') ? 'f-consent-error' : undefined} />
                      <span className="text-text">
                        I agree to be contacted by V2 Ecom Services / V2 Ecom Academy through phone, WhatsApp or email regarding my course enquiry and admission. <Link to="/privacy" target="_blank" className="font-medium text-academy-royal underline">Privacy Policy</Link> <span className="text-red-500" aria-hidden="true">*</span>
                      </span>
                    </label>
                    {err('consent') && <p id="f-consent-error" role="alert" className="mt-1.5 flex gap-1 text-[12px] text-red-600"><AlertCircle size={13} className="mt-0.5 shrink-0" aria-hidden="true" />{err('consent')}</p>}
                  </div>
                </div>
              )}

              {serverError && (
                <div role="alert" className="mt-6 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-[13px] text-red-700">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{serverError}
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button type="button" onClick={back} disabled={status === 'submitting'} className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-[14px] font-semibold text-academy-navy transition hover:bg-academy-light disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-royal">
                    <ArrowLeft size={16} aria-hidden="true" /> Back
                  </button>
                ) : <span />}

                {step < STEPS.length ? (
                  <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-xl bg-academy-navy px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-academy-royal focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-gold focus-visible:ring-offset-2">
                    Continue <ArrowRight size={16} aria-hidden="true" />
                  </button>
                ) : (
                  <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center gap-2 rounded-xl bg-academy-gold px-7 py-3 text-[14px] font-semibold text-academy-navy transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-academy-navy focus-visible:ring-offset-2">
                    {status === 'submitting' ? (<><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Submitting…</>) : (<>Submit application <ArrowRight size={16} aria-hidden="true" /></>)}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
