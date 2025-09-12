import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rss, Linkedin, Github, Youtube, Instagram, X } from 'lucide-react';

const footerLinksCol1 = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Shipping' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'About Us' },
];

const footerLinksCol2 = [
  { href: '#', label: 'Sustainability' },
  { href: '#', label: 'Privacy & Legal' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Donate' },
];

const socialLinks = [
  { href: '#', icon: <Rss className="h-8 w-8" /> },
  { href: '#', icon: <Linkedin className="h-8 w-8" /> },
  { href: '#', icon: <Github className="h-8 w-8" /> },
  { href: '#', icon: <Youtube className="h-8 w-8" /> },
  { href: '#', icon: <Instagram className="h-8 w-8" /> },
  { href: '#', icon: <X className="h-8 w-8" /> },
];

export function Footer() {
  return (
    <footer className="bg-[#574f4a] text-white/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2">
                {footerLinksCol1.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                {footerLinksCol2.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>{/* Empty column for spacing */}</div>

          <div className="text-center">
            <p className="mb-4">
              Subscribe for updates on products, <br /> OS features, and promotions.
            </p>
            <Button className="bg-[#17a8a0] hover:bg-[#17a8a0]/90 text-white font-bold py-2 px-6 mb-6 w-full md:w-auto">
              SUBSCRIBE
            </Button>
            <div className="flex gap-6 justify-center">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-white">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-white/60 mt-12 border-t border-white/20 pt-8">
          <p>Copyright © {new Date().getFullYear() + 1} System76, Inc.</p>
          <p className="mt-4 max-w-2xl mx-auto">
            * Financing issued by WebBank, member FDIC and serviced by Klarna. <Link href="#" className="underline hover:text-white">See terms</Link>.
            <br />
            Intel, the Intel Logo, Intel Core, Iris, and Xeon are trademarks of Intel Corporation or its subsidiaries in the U.S. and/or other countries.
          </p>
          <p className="mt-6">
            <Link href="#" className="underline hover:text-white">
              Manage Website Data Collection Preferences
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
