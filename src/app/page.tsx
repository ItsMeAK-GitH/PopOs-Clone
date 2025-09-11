import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
