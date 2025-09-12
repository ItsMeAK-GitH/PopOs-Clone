"use client";

import React from 'react';
import Link from 'next/link';

const topNavLinks = [
  { href: '#', label: 'search' },
  { href: '#', label: 'contact' },
  { href: '#', label: 'log in' },
  { href: '#', label: 'register' },
  { href: '#', label: 'cart' },
];

const mainNavLinks = [
  { href: '#', label: 'laptops' },
  { href: '#', 'label': 'desktops' },
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
        <div className="flex justify-end items-center h-8 gap-4 text-sm font-headline">
          {topNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-normal tracking-wider hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-6">
          <Link href="https://system76.com/" className="flex flex-col items-center gap-2" aria-label="System76 Homepage">
            <img
              src="/system76-logo-open-source-tagliner4_1730474034__00841.webp"
              alt="System76 Logo"
              style={{ height: '128px' }}
              className="w-auto"
            />
          </Link>
        </div>
        <nav className="flex items-center justify-center gap-6 text-base pb-4 font-headline">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-normal tracking-wider hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}