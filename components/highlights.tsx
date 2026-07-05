'use client';

import { AlertCircle, Heart, Users, CreditCard } from 'lucide-react';

const highlights = [
  {
    title: '24×7 Emergency',
    icon: AlertCircle,
    description: 'Always ready to serve',
  },
  {
    title: 'Advanced ICU & NICU',
    icon: Heart,
    description: 'State-of-the-art facilities',
  },
  {
    title: 'Experienced Specialists',
    icon: Users,
    description: 'Expert medical professionals',
  },
  {
    title: 'Cashless Mediclaim',
    icon: CreditCard,
    description: 'Hassle-free treatment',
  },
];

export default function Highlights() {
  return (
    <section id="about" className="bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
