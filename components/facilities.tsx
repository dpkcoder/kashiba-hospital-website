'use client';

import { AlertCircle, Bed, Pill, CreditCard } from 'lucide-react';

const facilities = [
  {
    name: '24×7 Emergency Medical Services',
    icon: AlertCircle,
  },
  {
    name: 'General Ward, Semi-Special, Special & Deluxe Rooms',
    icon: Bed,
  },
  {
    name: 'Medical Store Facility',
    icon: Pill,
  },
  {
    name: 'Mediclaim & Cashless Treatment Facility',
    icon: CreditCard,
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Facilities Available at the Hospital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer comprehensive healthcare services with modern facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-lg transition"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10">
                    <Icon className="text-primary" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {facility.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
