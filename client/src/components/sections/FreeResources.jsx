import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, ExternalLink } from 'lucide-react';

import amazonListingPdf from '../../assets/resources/amazon-listing-optimization-checklist.pdf';
import marketplaceLaunchPdf from '../../assets/resources/marketplace-launch-checklist.pdf';
import productResearchPdf from '../../assets/resources/product-research-guide.pdf';
import advertisingPerformancePdf from '../../assets/resources/advertising-performance-checklist.pdf';
import ecommerceGrowthPdf from '../../assets/resources/ecommerce-growth-resources.pdf';
import industryTipsPdf from '../../assets/resources/industry-tips-best-practices.pdf';

const resources = [
  {
    title: 'Amazon Listing Optimization Checklist',
    description: 'Complete guide to optimizing product listings for maximum conversion on Amazon.',
    url: amazonListingPdf,
    filename: 'amazon-listing-optimization-checklist.pdf',
  },
  {
    title: 'Marketplace Launch Checklist',
    description: 'Step-by-step launch roadmap for multi-channel seller success.',
    url: marketplaceLaunchPdf,
    filename: 'marketplace-launch-checklist.pdf',
  },
  {
    title: 'Product Research Guide',
    description: 'Proven framework for identifying high-margin products to sell online.',
    url: productResearchPdf,
    filename: 'product-research-guide.pdf',
  },
  {
    title: 'Advertising Performance Checklist',
    description: 'Optimize your PPC campaigns, reduce ACoS, and scale ad ROI.',
    url: advertisingPerformancePdf,
    filename: 'advertising-performance-checklist.pdf',
  },
  {
    title: 'E-commerce Growth Resources',
    description: 'Essential toolkits, templates, and frameworks for scaling e-commerce.',
    url: ecommerceGrowthPdf,
    filename: 'ecommerce-growth-resources.pdf',
  },
  {
    title: 'Industry Tips and Best Practices',
    description: 'Expert strategies, policy updates, and operational best practices.',
    url: industryTipsPdf,
    filename: 'industry-tips-best-practices.pdf',
  },
];

const whyQA = [
  {
    q: 'Why Follow Our Blog?',
    a: 'Our articles are written by marketplace professionals with hands-on experience managing seller accounts. We focus on practical, actionable advice that you can implement to improve your marketplace performance and achieve sustainable growth. Whether you are a first-time seller or an established brand, our goal is to help you make informed decisions and stay ahead in the competitive world of e-commerce.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function FreeResources() {
  return (
    <section className="section-padding bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="container-base relative z-10">
        {/* Section Title */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-accent" />
            <p className="text-[14px] font-semibold text-muted tracking-widest uppercase">Resources</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-poppins">
            Free <span className="text-accent">Resources</span>
          </h2>
          <p className="text-muted mt-3 max-w-xl leading-relaxed">
            Access practical tools and downloadable resources designed to help marketplace sellers grow their business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Side: Resource List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-card hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-dark transition-colors shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-base group-hover:text-accent transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors"
                    title="Open PDF in new tab"
                  >
                    <ExternalLink size={14} />
                    <span>View</span>
                  </a>

                  <a
                    href={resource.url}
                    download={resource.filename}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-dark bg-accent hover:bg-accent/90 transition-colors shadow-sm"
                    title="Download PDF file"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Why Follow Our Blog? Q&A */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              {/* Background decors */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
                  Why Follow Our Blog?
                </h3>

                <div className="space-y-6">
                  {whyQA.map((item, i) => (
                    <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3 mb-2">
                        <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                        <p className="font-bold text-white leading-snug">{item.q}</p>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed pl-7">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
