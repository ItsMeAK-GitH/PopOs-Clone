import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export function SecuritySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-headline font-normal text-foreground/80">Keep Your Computer Secure</h3>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Built with security at its core. Full-disk encryption comes standard, keeping your data safe from unauthorized access. You&apos;re in control of system updates, installing them on your schedule to minimize disruptions. Privacy features help protect your personal information, while firmware management ensures your hardware stays up to date with the latest security patches.
            </p>
            <Link href="#" className="mt-6 inline-flex items-center font-bold text-foreground/80 tracking-wider text-sm underline-offset-4 hover:underline">
              LEARN MORE
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div>
            <Image
              src="/security.webp"
              alt="Pop!_OS security features"
              width={1200}
              height={750}
              className="rounded-lg"
              data-ai-hint="drive encryption screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
