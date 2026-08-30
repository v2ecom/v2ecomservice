import Hero from '../components/sections/Hero';
import WhyChoose from '../components/sections/WhyChoose';
import Services from '../components/sections/Services';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import IndustriesWeServe from '../components/sections/IndustriesWeServe';
import OurCommitment from '../components/sections/OurCommitment';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <ProcessTimeline />
      <IndustriesWeServe />
      <OurCommitment />
    </>
  );
}
