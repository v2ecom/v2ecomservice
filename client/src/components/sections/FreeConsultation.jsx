import { motion } from 'framer-motion';
import { Target, Search, TrendingUp, Compass, Map } from 'lucide-react';

const consultationPoints = [
  { icon: Search, text: 'Your current marketplace performance' },
  { icon: Target, text: 'Challenges affecting your business' },
  { icon: TrendingUp, text: 'Growth opportunities' },
  { icon: Compass, text: 'Recommended strategies' },
  { icon: Map, text: 'A roadmap to help you achieve your business goals' },
];

export default function FreeConsultation() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container-base relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
              Book a Free <span className="text-accent">Marketplace Consultation</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Not sure where to start? Schedule a free consultation with our marketplace experts.
            </p>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">
              During the consultation, we'll discuss:
            </p>
            
            <ul className="space-y-4">
              {consultationPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="relative z-10 md:w-1/3 shrink-0">
            <div className="aspect-square rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-4">
                <Target size={32} className="text-dark" />
              </div>
              <p className="text-white font-bold font-poppins text-xl leading-tight">
                Unlock Your <br/>Growth Potential
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
