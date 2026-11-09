import { motion } from 'framer-motion';
import {
  Search, PackageSearch, UserCheck, ListChecks, FileSearch, Boxes, ShoppingCart, Undo2, ShieldCheck,
  Megaphone, Target, Store, Calculator, BarChart3, TrendingUp, ClipboardCheck, FlaskConical, FileSpreadsheet,
  MessageCircleQuestion, Trophy, Award,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const topics = [
  { icon: Search, label: 'Product Research' },
  { icon: PackageSearch, label: 'Product Sourcing' },
  { icon: UserCheck, label: 'Seller Account Onboarding' },
  { icon: ListChecks, label: 'Listing and Cataloguing' },
  { icon: FileSearch, label: 'Marketplace SEO' },
  { icon: Boxes, label: 'Inventory Management' },
  { icon: ShoppingCart, label: 'Order Processing' },
  { icon: Undo2, label: 'Returns Management' },
  { icon: ShieldCheck, label: 'Account Health' },
  { icon: Megaphone, label: 'Amazon PPC' },
  { icon: Target, label: 'Flipkart Ads' },
  { icon: Store, label: 'Meesho Ads' },
  { icon: Calculator, label: 'Profit Analysis' },
  { icon: BarChart3, label: 'Marketplace Reporting' },
  { icon: TrendingUp, label: 'Business Growth Strategy' },
];

const benefits = [
  { icon: ClipboardCheck, label: 'Practical assignments' },
  { icon: FlaskConical, label: 'Product research exercises' },
  { icon: ListChecks, label: 'Listing optimization projects' },
  { icon: FileSpreadsheet, label: 'Profit calculation worksheets' },
  { icon: Megaphone, label: 'PPC campaign planning' },
  { icon: BarChart3, label: 'Marketplace reporting exercises' },
  { icon: MessageCircleQuestion, label: 'Weekly doubt-clearing' },
  { icon: Trophy, label: 'Final practical project' },
  { icon: Award, label: 'Academy course-completion certificate' },
];

export default function AcademyLearn() {
  return (
    <>
      <section id="curriculum" className="bg-academy-light py-16 sm:py-20">
        <div className="container-base">
          <SectionHeader
            tag="What you will learn"
            title="Skills covered across"
            highlight="the programmes"
            description="Marketplace Professional covers the fundamentals through reporting; Marketplace Business Mastery adds profitability, analytics and scaling."
          />
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {topics.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0.001, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: (i % 5) * 0.04 }}
                className="flex flex-col items-center rounded-2xl border border-border bg-white px-3 py-5 text-center shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-academy-royal/10 text-academy-royal">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="mt-3 text-[13px] font-semibold leading-snug text-academy-navy">{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section id="practical" className="bg-academy-navy py-16 sm:py-20" aria-labelledby="practical-title">
        <div className="container-base">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex rounded-full border border-academy-gold/40 bg-academy-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-academy-gold">
              Practical training
            </p>
            <h2 id="practical-title" className="mt-5 text-white" style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: '#fff' }}>
              Learn by <span className="text-academy-gold">doing</span>, not just watching
            </h2>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-academy-gold/15 text-academy-gold">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="text-[14px] font-medium text-white">{label}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center text-[12.5px] leading-relaxed text-white/70">
            <strong className="text-white/90">About the certificate:</strong> the course-completion certificate is issued by V2 Ecom Academy. It is not a government-accredited qualification, and we do not guarantee jobs, income or sales.
          </p>
        </div>
      </section>
    </>
  );
}
