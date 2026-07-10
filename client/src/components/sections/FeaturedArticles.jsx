import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const articles = [
  {
    title: 'How to Optimize an Amazon Product Listing for Higher Rankings',
    description: 'Learn the essential elements of an SEO-friendly product listing, including keyword research, titles, bullet points, descriptions, and images.',
    category: 'Listing Optimization',
    readTime: '5 min read',
  },
  {
    title: 'Amazon PPC: 10 Strategies to Reduce ACoS and Increase Sales',
    description: 'Discover practical techniques to improve campaign performance, optimize bids, and generate more profitable sales.',
    category: 'Advertising',
    readTime: '7 min read',
  },
  {
    title: 'Common Amazon Seller Mistakes and How to Avoid Them',
    description: 'Understand the most common reasons sellers struggle with growth and learn proven solutions to overcome them.',
    category: 'Strategy',
    readTime: '6 min read',
  },
  {
    title: 'Complete Flipkart Seller Guide for Beginners',
    description: 'A step-by-step guide covering account setup, product listings, advertising, pricing, and growth strategies.',
    category: 'Flipkart',
    readTime: '8 min read',
  },
  {
    title: 'How AI is Transforming E-commerce Marketplace Management',
    description: 'Learn how AI-powered tools can help sellers automate repetitive tasks, improve listings, analyze competitors, and make smarter business decisions.',
    category: 'Technology',
    readTime: '4 min read',
  },
  {
    title: 'Marketplace Growth Checklist for New Brands',
    description: 'A practical checklist to help new sellers build a strong foundation for long-term marketplace success.',
    category: 'Resources',
    readTime: '3 min read',
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

export default function FeaturedArticles() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Articles"
          title="Featured"
          highlight="Articles"
          description="Read our latest insights, strategies, and guides."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted font-medium flex items-center gap-1">
                    <BookOpen size={12} />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary font-poppins mb-3 group-hover:text-accent transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
                  {article.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
                  Read More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
