import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function EvolvingSection() {
  return (
    <section className="bg-[#eaf3f5] py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold text-[#574f4a] tracking-widest">
          POP!_OS IS EVOLVING
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-[#574f4a]/90">
          COSMIC, our budding desktop environment, brings new features, refinements, core
          apps, stability, security, and performance to Pop!_OS users everywhere.
        </p>
        <Link href="#" className="mt-8 inline-flex items-center font-bold text-[#574f4a] tracking-wider text-sm underline-offset-4 hover:underline">
          LEARN MORE ABOUT COSMIC
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </section>
  );
}