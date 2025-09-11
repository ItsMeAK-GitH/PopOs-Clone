"use client";

import React from 'react';
import Link from 'next/link';
import { System76Logo } from '@/components/icons/system76-logo';

const topNavLinks = [
  { href: '#', label: 'search' },
  { href: '#', label: 'contact' },
  { href: '#', label: 'log in' },
  { href: '#', label: 'register' },
  { href: '#', label: 'cart' },
];

const mainNavLinks = [
  { href: '#', label: 'laptops' },
  { href: '#', label: 'desktops' },
  { href: '#', label: 'workstations' },
  { href: '#', label: 'mini' },
  { href: '#', label: 'servers' },
  { href: '#', label: 'keyboards' },
  { href: '#', label: 'components' },
  { href: '#', label: 'pop!_os' },
  { href: '#', label: 'merch' },
  { href: '#', label: 'specials' },
];

export function Header() {
  return (
    <header className="bg-background text-foreground/80 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-8 gap-4 text-xs">
          {topNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase font-medium tracking-wider hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-6">
          <Link href="https://system76.com/" className="flex flex-col items-center gap-2" aria-label="System76 Homepage">
            <System76Logo className="h-10 w-auto text-foreground" />
            <p className="text-sm tracking-wide">Powerful Linux Computers</p>
          </Link>
        </div>
        <nav className="flex items-center justify-center gap-6 text-sm pb-4">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase font-medium tracking-wider hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
