'use client';

import { MapPin } from 'lucide-react';
import { hospitalData } from '@/lib/hospital-data';

export default function Branches() {
  return (
    <section id="branches" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Branches
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit our locations across Gujarat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitalData.branches.map((branch, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-sm hover:shadow-lg transition ${
                branch.isMain
                  ? 'bg-card border-2 border-primary'
                  : 'bg-card border border-border'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <h3 className="text-lg font-semibold text-foreground">
                  {branch.name}
                </h3>
              </div>
              <p className="text-foreground text-sm leading-relaxed">
                {branch.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
