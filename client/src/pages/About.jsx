import AboutHero from '../components/sections/AboutHero';
import Testimonials from '../components/sections/Testimonials';
import AboutWhyChoose from '../components/sections/AboutWhyChoose';
import FinalCTA from '../components/sections/FinalCTA';

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <Testimonials />
      <AboutWhyChoose />
      <FinalCTA />
    </div>
  );
}
