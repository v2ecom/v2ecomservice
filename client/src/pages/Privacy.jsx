import { ACADEMY } from '../config/academy';

const sections = [
  {
    title: 'Who we are',
    body: [
      `This Privacy Policy explains how ${ACADEMY.parent} and its training division ${ACADEMY.name} (“we”, “us”) handle personal information collected through www.v2ecomservices.com. We are based in ${ACADEMY.location}, India.`,
    ],
  },
  {
    title: 'Information we collect',
    body: [
      'When you submit an enquiry, contact form or Academy admission form, we collect the details you enter: your name, mobile and WhatsApp numbers, email address, city and state, age group, qualification, current status and experience, marketplace interests, course, learning mode, batch and language preferences, your reasons for joining, how you heard about us, any message you write, and your consent.',
      'We also create an application ID and record the date of your application. We do not ask for payment card, bank or government ID details on these forms.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'We use your information to respond to your enquiry, contact you about courses and admission by phone, WhatsApp or email, manage your application and batch allocation, and improve our training. We contact you only about the enquiry or admission you submitted.',
    ],
  },
  {
    title: 'Who can see it',
    body: [
      'Your application is stored in a protected database and is visible only to authorised V2 Ecom team members. We do not sell your personal information.',
      'We use service providers to run the website and handle forms, such as website hosting, database hosting and email delivery. They process data only to provide those services to us.',
    ],
  },
  {
    title: 'Retention',
    body: [
      'We keep application records for as long as needed to handle your admission and for reasonable business and record-keeping purposes, and then delete or anonymise them.',
    ],
  },
  {
    title: 'Your choices and rights',
    body: [
      'You may ask us to access, correct or delete the personal information you gave us, or withdraw your consent to be contacted, by contacting us using the details below. We will respond as required by applicable Indian law, including the Digital Personal Data Protection Act, 2023.',
    ],
  },
  {
    title: 'Contact us',
    body: [
      `Email: vivek@v2ecomservices.com · Phone / WhatsApp: ${ACADEMY.phoneDisplay} · ${ACADEMY.location}.`,
    ],
  },
];

export default function Privacy() {
  return (
    <section className="bg-white pt-28 pb-20 sm:pt-32">
      <div className="container-base max-w-3xl">
        <p className="section-tag">Legal</p>
        <h1 className="heading-section mb-3">Privacy Policy</h1>
        <p className="mb-10 text-[13px] text-muted">Last updated: 9 November 2026</p>
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-2 text-[18px] font-semibold text-primary">{s.title}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 24)} className="body-text mb-3">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
