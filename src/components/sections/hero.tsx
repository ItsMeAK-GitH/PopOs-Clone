import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src="/pop-hero-xl-night.jpg"
          alt="Pop!_OS background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          data-ai-hint="space stars"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 h-[50vh] min-h-[400px] md:h-[60vh] lg:h-[70vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white text-left">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-wide">
              Welcome to Pop!_OS
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-xl">
              Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#17a8a0] hover:bg-[#17a8a0]/90 text-white font-bold text-lg px-8 py-6">
                DOWNLOAD
              </Button>
              <Button size="lg" className="bg-[#f3a41a] hover:bg-[#f3a41a]/90 text-black font-bold text-lg px-8 py-6">
                DONATE TO POP
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative w-full h-full min-h-[400px]">
             {/* The rocket is part of the background image and will be positioned by the container's layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
