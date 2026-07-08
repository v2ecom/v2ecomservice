import { motion } from 'framer-motion';
import { ShieldCheck, Handshake, Heart } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const commitments = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    description: 'We believe in transparent reporting and honest feedback. If a strategy isn\'t working, we tell you immediately and pivot. No vanity metrics, no hidden agendas.',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We are not looking for quick wins at the expense of sustainable growth. Our focus is on building a durable, long-term marketplace presence for your brand.',
    color: 'from-violet-500 to-purple-600',
    iconColor: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    icon: Heart,
    title: 'Dedicated Support',
    description: 'Your success is our priority. We treat your business like our own, ensuring that you always have direct access to experienced account managers who care.',
    color: 'from-pink-500 to-rose-500',
    iconColor: 'text-pink-500',
    bg: 'bg-pink-50',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function OurCommitment() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Our Commitment"
          title="Why Businesses"
          highlight="Choose Us"
          description="We operate on the principles of trust, transparency, and hard work. No exaggerated claims — just a dedicated team focused on your operational success."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-3 gap-6"
        >
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 mx-auto rounded-full ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className={item.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-dark font-poppins mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
