'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { hospitalData } from '@/lib/hospital-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Departments', href: '#departments' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Branches', href: '#branches' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Sticky header: emergency bar + navbar move together */}
      <div className="sticky top-0 z-50">
      {/* Top Emergency Bar */}
      <div className="bg-secondary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-0.5 sm:gap-6 text-xs sm:text-sm text-center">
          <a href="tel:+919484487872" className="flex items-center gap-1.5 hover:opacity-80 transition whitespace-nowrap">
            <Phone size={14} className="flex-shrink-0" />
            24×7 Emergency: {hospitalData.phoneFormatted}
          </a>
          <a href={`mailto:${hospitalData.email}`} className="hover:opacity-80 transition break-all">
            {hospitalData.email}
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kashiba Multispeciality Hospital logo"
                width={207}
                height={252}
                priority
                className="h-11 w-auto"
              />
              <div className="font-bold text-lg md:text-xl leading-tight">
                <div className="text-foreground">Kashiba</div>
                <div className="text-xs text-muted-foreground">Multispeciality Hospital</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={`tel:${hospitalData.phone}`}
                className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${hospitalData.phone}`}
                className="block px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:opacity-90 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
      </div>

      {/* Floating Call Button */}
      <a
        href={`tel:${hospitalData.phone}`}
        className="fixed bottom-6 right-6 md:hidden bg-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition z-50"
        aria-label="Call hospital"
      >
        <Phone size={24} />
      </a>
    </>
  );
}
