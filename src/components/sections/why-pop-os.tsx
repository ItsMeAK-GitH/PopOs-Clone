import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function WhyPopOsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-foreground/60">FEATURES</p>
          <h2 className="font-body text-4xl font-normal text-foreground tracking-widest mt-2">
            WHY POP!_OS?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-headline font-light text-foreground/80">Workflow</h3>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Pop!_OS is designed for fast navigation, easy workspace organization, and fluid, convenient workflow. Your operating system should encourage discovery, not obstruct it.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center font-bold text-foreground/80 tracking-wider text-sm underline-offset-4 hover:underline">
              LEARN MORE
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div>
            <Image
              src="/workflowrr.webp"
              alt="Pop!_OS workflow"
              width={1200}
              height={750}
              className="rounded-lg shadow-xl"
              data-ai-hint="code editor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
