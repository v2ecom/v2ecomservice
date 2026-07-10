import { motion } from 'framer-motion';
import { ShoppingCart, Bell, TrendingUp, Search, Layers, BarChart, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const topics = [
  {
    icon: ShoppingCart,
    title: 'Amazon Selling Tips',
    description: 'Learn how to optimize listings, improve rankings, increase conversions, and grow your Amazon business with practical strategies.',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Bell,
    title: 'Marketplace Updates',
    description: 'Stay informed about the latest changes in marketplace policies, seller tools, fees, advertising features, and algorithm updates.',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Amazon PPC Strategies',
    description: 'Discover campaign optimization techniques, keyword research methods, bid management strategies, and advertising best practices to maximize your return on investment.',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Search,
    title: 'Product Listing Optimization',
    description: 'Explore proven methods for creating SEO-friendly titles, compelling bullet points, product descriptions, and high-converting product pages.',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    icon: Layers,
    title: 'Flipkart & Meesho Growth',
    description: 'Get expert advice on increasing visibility, improving sales performance, and growing your business across multiple marketplaces.',
    bg: 'bg-pink-50',
    iconColor: 'text-pink-500',
  },
  {
    icon: BarChart,
    title: 'Business Growth Strategies',
    description: 'Learn how to scale your e-commerce business through pricing strategies, inventory planning, competitor analysis, and data-driven decision-making.',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Explore how artificial intelligence and automation can simplify marketplace management, improve productivity, and support business growth.',
    bg: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
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

export default function BlogTopics() {
  return (
    <section className="section-padding bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Topics"
          title="What You'll Find"
          highlight="Here"
          description="We cover everything you need to know to run a successful online business."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-surface rounded-2xl p-8 border border-border shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${topic.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={topic.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-primary font-poppins mb-3">{topic.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
