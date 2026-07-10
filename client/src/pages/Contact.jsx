import ContactHero from '../components/sections/ContactHero';
import ContactLayout from '../components/sections/ContactLayout';
import FreeConsultation from '../components/sections/FreeConsultation';
import ContactFAQ from '../components/sections/ContactFAQ';
import FinalCTA from '../components/sections/FinalCTA';

export default function Contact() {
  return (
    <div className="bg-background min-h-screen">
      <ContactHero />
      <ContactLayout />
      <FreeConsultation />
      <ContactFAQ />
      
      {/* Overriding FinalCTA props to match the specific Contact page CTA text */}
      <div className="bg-section">
        <FinalCTA 
          title={<>Ready to Scale Your Online <span className="text-accent">Business?</span></>}
          description="Take the next step toward growing your e-commerce business with expert marketplace management. Contact V2 Ecom Services today and let's build your success together."
        />
      </div>
    </div>
  );
}
