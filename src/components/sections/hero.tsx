import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pop-hero-xl-night.jpg"
          alt="Pop!_OS background"
          fill
          className="object-cover"
          data-ai-hint="space stars"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="font-headline text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Welcome to Pop!_OS
          </h1>
          <p className="mt-4 max-w-lg mx-auto md:mx-0 text-lg text-white/90">
            Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-sm">
              DOWNLOAD
            </Button>
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-sm">
              DONATE TO POP
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-full min-h-[300px]">
          <Image
            src="/pop-hero-xl-night.jpg"
            alt="Rocket ship"
            fill
            className="object-contain"
            data-ai-hint="rocket ship"
          />
        </div>
      </div>
    </section>
  );
}
