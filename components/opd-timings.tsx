'use client';

import { Clock, AlertTriangle } from 'lucide-react';
import { hospitalData } from '@/lib/hospital-data';

export default function OPDTimings() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            OPD Timings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us during our operating hours
          </p>
        </div>

        {/* Timings Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {hospitalData.opdTimings.weekday}
                </h3>
                <p className="text-foreground text-lg">
                  Morning: <span className="font-semibold">{hospitalData.opdTimings.weekdayMorning}</span>
                </p>
                <p className="text-foreground text-lg">
                  Evening: <span className="font-semibold">{hospitalData.opdTimings.weekdayEvening}</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {hospitalData.opdTimings.sunday}
                </h3>
                <p className="text-foreground text-lg">
                  {hospitalData.opdTimings.sundayMorning}
                </p>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
              <p className="flex items-center gap-2 text-foreground font-semibold text-base">
                <AlertTriangle className="text-secondary flex-shrink-0" size={18} />
                <span className="text-secondary font-bold">24×7 Emergency Services Available</span>
              </p>
              <p className="text-foreground text-sm mt-1">
                Emergency patients are attended at any time outside OPD hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
