import { Button } from '@/components/ui/button';
import { BookOpen, MessageSquare, Github } from 'lucide-react';
import Link from 'next/link';

const communityLinks = [
  {
    icon: <BookOpen className="h-16 w-16 text-[#07466c]" />,
    label: 'Pop Docs',
    href: '#',
  },
  {
    icon: <MessageSquare className="h-16 w-16 text-[#07466c]" />,
    label: 'Pop! Chat',
    href: '#',
  },
  {
    icon: <Github className="h-16 w-16 text-[#07466c]" />,
    label: 'Github',
    href: '#',
  },
];

export function UnleashPotentialSection() {
  return (
    <section className="bg-[#eaf3f5] py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-body text-4xl font-normal text-[#574f4a] tracking-widest uppercase">
          Unleash Your Potential
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-[#574f4a]/90">
          Pop!_OS is free to download, and freeing to use. Get started with this powerful OS and take to the stars.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-[#f3a41a] hover:bg-[#f3a41a]/90 text-black font-normal text-lg px-10 py-6 font-headline">
            DOWNLOAD
          </Button>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityLinks.map((link) => (
            <Link href={link.href} key={link.label} className="flex flex-col items-center gap-4 text-[#574f4a] hover:text-opacity-80 transition-opacity">
              {link.icon}
              <p className="text-xl font-headline font-normal tracking-wider">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
