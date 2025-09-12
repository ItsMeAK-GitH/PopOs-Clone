import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/pop-hero-xl-night.jpg')" }}>
      <div className="relative container mx-auto px-4 h-[40vh] min-h-[350px] md:h-[50vh] lg:h-[60vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="text-white text-left md:col-span-2 md:col-start-2">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-wide whitespace-nowrap">
              Welcome to Pop!_OS
            </h1>
            <p className="mt-4 font-headline text-xl font-light max-w-xl">
              Unleash your potential on Pop!_OS: an operating system for STEM and creative professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#17a8a0] hover:bg-[#17a8a0]/90 text-white font-normal text-lg px-8 py-6 font-headline">
                DOWNLOAD
              </Button>
              <Button size="lg" className="bg-[#f3a41a] hover:bg-[#f3a41a]/90 text-black font-normal text-lg px-8 py-6 font-headline">
                DONATE TO POP
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative w-full h-full min-h-[400px] md:col-span-2">
             {/* The rocket is part of the background image and will be positioned by the container's layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
