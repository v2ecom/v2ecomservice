import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const testimonials = [
  {
    title: 'Professional and Results-Oriented Team',
    quote: "V2 Ecom Services completely transformed our Amazon business. They optimized our listings, improved our advertising campaigns, and helped us achieve consistent month-on-month sales growth. Their communication and reporting are excellent.",
    author: 'Apparel Brand, Tiruppur',
  },
  {
    title: 'Excellent Amazon PPC Management',
    quote: "Our advertising spend is now much more efficient. The team continuously optimizes campaigns and provides clear performance reports. We have seen better visibility and improved return on ad spend.",
    author: 'Fashion Seller',
  },
  {
    title: 'Reliable Marketplace Management Partner',
    quote: "Managing multiple marketplaces was becoming difficult for us. V2 Ecom Services now handles Amazon, Flipkart, and Meesho efficiently, allowing us to focus on product development and manufacturing.",
    author: 'Home & Kitchen Brand',
  },
  {
    title: 'Highly Recommended for New Sellers',
    quote: "As a new seller, we needed guidance at every stage. From account setup to listing optimization and sales strategy, V2 Ecom Services made the entire process simple and professional.",
    author: 'D2C Startup',
  },
  {
    title: 'Transparent Reporting and Great Support',
    quote: "We appreciate the regular review meetings and detailed reports. The team is proactive, responsive, and genuinely focused on helping our business grow.",
    author: 'Consumer Products Brand',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-section relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container-base relative z-10">
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients"
          highlight="Say"
          description="Hear from the businesses that have partnered with us."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-3xl p-8 md:p-10 shadow-sm relative group hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <Quote size={40} className="text-accent/20 absolute top-8 right-8" />
              
              <h4 className="text-lg font-bold text-primary mb-4 font-poppins">"{testimonial.title}"</h4>
              
              <p className="text-muted leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">— {testimonial.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
