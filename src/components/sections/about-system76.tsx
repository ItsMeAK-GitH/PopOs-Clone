import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function AboutSystem76Section() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-bold tracking-widest text-foreground/60">PROUD ADVOCATES FOR OPEN SOURCE</p>
        <h2 className="font-body text-4xl font-normal text-foreground tracking-widest mt-2">
          ABOUT SYSTEM76
        </h2>
      </div>
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-headline font-normal text-foreground/80">Built for User Freedom</h3>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Pop!_OS is engineered and designed in-house by System76, the US computer manufacturer. From our factory in Colorado, we craft open source software, repairable computers, and airtight firmware—with the aim of empowering users’ ambitions on the best-quality product we can muster.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center font-bold text-foreground/80 tracking-wider text-sm underline-offset-4 hover:underline">
              OUR MISSION
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div>
            <Image
              src="/manufacturing-sectioncontent-thelio-building.webp"
              alt="System76 manufacturing"
              width={800}
              height={533}
              className="rounded-lg shadow-xl"
              data-ai-hint="people building computer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
