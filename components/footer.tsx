'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { hospitalData } from '@/lib/hospital-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-footer text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Kashiba Multispeciality Hospital logo"
                width={207}
                height={252}
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-lg font-bold mb-4">
              {hospitalData.name}
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Providing compassionate and advanced healthcare services to the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">More Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact" className="scroll-mt-24">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  {hospitalData.branches[0].address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href={`tel:${hospitalData.phone}`} className="text-sm text-white/80 hover:text-white transition">
                  {hospitalData.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href={`mailto:${hospitalData.email}`} className="text-sm text-white/80 hover:text-white transition">
                  {hospitalData.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80">
                  24×7 Emergency Available
                </span>
              </div>
              <a
                href={hospitalData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                View on Google Maps
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-white/60">
          <p>
            © {currentYear} Kashiba Multispeciality Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
