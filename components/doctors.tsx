'use client';

import Image from 'next/image';
import { hospitalData } from '@/lib/hospital-data';

export default function Doctors() {
  return (
    <section id="doctors" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Specialists
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert doctors dedicated to your healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hospitalData.doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition border border-border"
            >
              {/* Doctor Image Placeholder */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-6xl">👨‍⚕️</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {doctor.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {doctor.qualification}
                </p>
                <p className="text-foreground mb-4">
                  {doctor.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
