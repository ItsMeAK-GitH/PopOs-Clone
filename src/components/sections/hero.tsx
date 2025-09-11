import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full">
      <Image
        src="/pop-hero-xl-night.jpg"
        alt="Pop!_OS background"
        width={8000}
        height={1440}
        className="w-full h-auto object-cover"
        data-ai-hint="space stars"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-wide">
            Your OS. Your Control.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Pop!_OS is an operating system for STEM and creative professionals who use their computer as a tool to discover and create.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6">
              DOWNLOAD
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6">
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
