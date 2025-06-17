import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import WhyChoose from '@/components/home/WhyChoose';
import EnhancedCTA from '@/components/home/EnhancedCTA';
import Customers from '@/components/home/Customers';
import StatsCounter from '@/components/home/StatsCounter';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero section */}
      <Hero />
      
      {/* Light separator */}
      <div className="w-full max-w-5xl mx-auto px-6">
        <Separator className="opacity-20" />
      </div>
      
      {/* Services section */}
      <Features />
      
      {/* Client section */}
      <div className="bg-card/5">
        <Customers />
      </div>
      
      {/* Stats counter section */}
      <StatsCounter />
      
      {/* Why Choose section */}
      <WhyChoose />
      
      {/* Call to action */}
      <EnhancedCTA />
    </main>
  );
}
