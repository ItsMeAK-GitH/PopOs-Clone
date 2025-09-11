import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import { EvolvingSection } from '@/components/sections/evolving';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <EvolvingSection />
      </main>
    </div>
  );
}