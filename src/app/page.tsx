import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import { EvolvingSection } from '@/components/sections/evolving';
import { MeetPopOsSection } from '@/components/sections/meet-pop-os';
import { WhyPopOsSection } from '@/components/sections/why-pop-os';
import { CompatibilitySection } from '@/components/sections/compatibility';
import { SecuritySection } from '@/components/sections/security';
import { CustomizationSection } from '@/components/sections/customization';
import { OtherFeaturesSection } from '@/components/sections/other-features';
import { HardwareSection } from '@/components/sections/hardware';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <EvolvingSection />
        <MeetPopOsSection />
        <WhyPopOsSection />
        <CompatibilitySection />
        <SecuritySection />
        <CustomizationSection />
        <OtherFeaturesSection />
        <HardwareSection />
      </main>
    </div>
  );
}
