import { motion } from 'framer-motion';
import { GraduationCap, Search, Briefcase, Store, ShoppingBag, Rocket } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const audiences = [
  { icon: GraduationCap, title: 'Students', text: 'Build job-ready marketplace skills alongside your studies and start your career with practical knowledge.' },
  { icon: Search, title: 'Job seekers', text: 'Learn the workflows that e-commerce teams use every day, from listings to reporting, and prepare for marketplace roles.' },
  { icon: Briefcase, title: 'Working professionals', text: 'Add e-commerce marketplace management to your skill set and explore a move into a growing field.' },
  { icon: Store, title: 'Small business owners', text: 'Understand how to take your products online and manage marketplace accounts with confidence.' },
  { icon: ShoppingBag, title: 'Existing marketplace sellers', text: 'Sharpen listings, advertising, account health and profit analysis for the marketplaces you already sell on.' },
  { icon: Rocket, title: 'Aspiring freelancers & agency professionals', text: 'Learn the practical processes needed to support sellers and build a marketplace service business.' },
];

export default function AcademyAbout() {
  return (
    <>
      <section id="about" className="bg-white py-16 sm:py-20" aria-labelledby="about-academy-title">
        <div className="container-base grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="section-tag">About V2 Ecom Academy</p>
            <h2 id="about-academy-title" className="heading-section mb-5">
              Learn E-commerce from <span className="text-academy-gold">Industry Experience.</span>
            </h2>
            <p className="body-text mb-4">
              V2 Ecom Academy is the training division of V2 Ecom Services, created to help aspiring professionals and business owners develop practical e-commerce marketplace management skills.
            </p>
            <p className="body-text">
              Our training combines marketplace knowledge, practical exercises, business understanding and real-world workflows.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-academy-light p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-academy-royal mb-3">Who teaches you</p>
            <p className="text-[15px] leading-relaxed text-text">
              Training led by <strong className="text-academy-navy">Vivek</strong>, supported by guest trainers and marketplace specialists.
            </p>
            <p className="mt-4 text-[13px] text-muted">
              Classes run in Tamil and English (Tanglish), online and in our Tiruppur classroom.
            </p>
          </div>
        </div>
      </section>

      <section id="who-can-join" className="bg-academy-light py-16 sm:py-20">
        <div className="container-base">
          <SectionHeader
            tag="Who can join"
            title="Training designed for"
            highlight="every kind of learner"
            description="No previous e-commerce experience is required for the Marketplace Professional course."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(({ icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0.001, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                className="rounded-2xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-academy-navy text-academy-gold">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-academy-navy">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
