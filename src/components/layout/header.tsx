"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { System76Logo } from '@/components/icons/system76-logo';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'LAPTOPS' },
  { href: '#', label: 'DESKTOPS' },
  { href: '#', label: 'MORE' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="https://system76.com/" className="flex items-center gap-2" aria-label="System76 Homepage">
            <System76Logo className="h-8 w-auto text-foreground" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-6">
                <Link href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Contact</Link>
                <Link href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Log In</Link>
                <Link href="#" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">Register</Link>
            </div>
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            <div className="md:hidden">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background p-0 w-[80%] sm:w-auto">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-4 border-b border-border">
                                <Link href="https://system76.com/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                    <System76Logo className="h-8 w-auto text-foreground" />
                                </Link>
                                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                                    <X className="h-6 w-6" />
                                </Button>
                            </div>
                            <nav className="flex flex-col gap-6 p-6 text-lg">
                                {navLinks.map((link) => (
                                    <Link key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-foreground">
                                        {link.label}
                                    </Link>
                                ))}
                                <hr className="border-border" />
                                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground/80 transition-colors hover:text-foreground">Contact</Link>
                                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground/80 transition-colors hover:text-foreground">Log In</Link>
                                <Link href="#" onClick={() => setMobileMenuOpen(false)} className="font-medium text-foreground/80 transition-colors hover:text-foreground">Register</Link>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
