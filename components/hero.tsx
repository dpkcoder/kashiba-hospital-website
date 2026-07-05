'use client';

import Image from 'next/image';
import { hospitalData } from '@/lib/hospital-data';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-primary via-primary to-primary/80 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <Image
              src="/logo.png"
              alt="Kashiba Multispeciality Hospital logo"
              width={207}
              height={252}
              priority
              className="h-24 md:h-28 w-auto"
            />
          </div>
        </div>

        <div className="mb-8 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-semibold">✓ 24×7 Emergency Services Available</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          {hospitalData.name}
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto text-balance">
          {hospitalData.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`tel:${hospitalData.phone}`}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105"
          >
            Book Appointment
          </a>
          <a
            href="#facilities"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold text-lg transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
