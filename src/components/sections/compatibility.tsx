import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function CompatibilitySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src="/compatibilityr.webp"
              alt="Pop!_OS compatibility"
              width={1200}
              height={750}
              className="rounded-lg"
              data-ai-hint="app logos collage"
            />
          </div>
          <div>
            <h3 className="text-4xl font-headline font-light text-foreground/80">Compatibility</h3>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Develop software out of the box with a vast array of libraries and tools at your disposal. Pop!_OS uses APT and Flatpak package management, meaning it&apos;s easy to install, remove, and update all software on the OS.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center font-bold text-foreground/80 tracking-wider text-sm underline-offset-4 hover:underline">
              LEARN MORE
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
