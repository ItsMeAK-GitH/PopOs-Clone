import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Heart } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center md:pt-48 md:pb-32 min-h-[calc(100vh-5rem)]">
      <Image
        src="https://cdn11.bigcommerce.com/s-pywjnxrcr2/images/stencil/original/image-manager/pop-hero-xl-night.jpg?t=1739308230"
        alt="Starry night sky over a mountain range, representing Pop!_OS."
        fill
        className="object-cover -z-10"
        priority
        data-ai-hint="space stars"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent -z-10" />

      <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
        Welcome to Pop!_OS
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
        Pop!_OS is a free and open-source operating system for STEM and creative professionals. It's easy to use, and helps you unleash your potential.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="text-lg px-8 py-6 font-semibold">
          <Download className="mr-2 h-5 w-5" />
          Download
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background">
          <Heart className="mr-2 h-5 w-5" />
          Donate to Pop
        </Button>
      </div>
    </section>
  );
}
