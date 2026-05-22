import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { About } from '@/components/sections/About';
import { Programs } from '@/components/sections/Programs';
import { WhyDBA } from '@/components/sections/WhyDBA';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { ScrollController } from '@/components/ScrollController';

export default function Home() {
  return (
    <>
      <ScrollController />
      <Hero />
      <Manifesto />
      <About />
      <Programs />
      <WhyDBA />
      <Team />
      <Testimonials />
      <CTA />
    </>
  );
}
