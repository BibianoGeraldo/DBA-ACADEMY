import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Programs } from '@/components/sections/Programs';
import { WhyDBA } from '@/components/sections/WhyDBA';
import { CTA } from '@/components/sections/CTA';
import { ScrollController } from '@/components/ScrollController';

export default function Home() {
  return (
    <>
      <ScrollController />
      <Hero />
      <About />
      <Programs />
      <WhyDBA />
      <CTA />
    </>
  );
}
