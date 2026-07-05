'use client';

import { useState } from 'react';
import { Baby, Stethoscope } from 'lucide-react';
import { hospitalData } from '@/lib/hospital-data';

export default function Departments() {
  const [selectedDept, setSelectedDept] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return Baby;
      case 'Stethoscope':
        return Stethoscope;
      default:
        return Stethoscope;
    }
  };

  return (
    <section id="departments" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Departments
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized care across multiple departments
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab Buttons */}
          <div className="md:w-1/3 flex md:flex-col gap-4">
            {hospitalData.departments.map((dept, index) => {
              const Icon = getIcon(dept.icon);
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDept(index)}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition ${
                    selectedDept === index
                      ? 'border-primary bg-card shadow-md'
                      : 'border-border bg-card hover:border-primary'
                  }`}
                >
                  <Icon className={selectedDept === index ? 'text-primary' : 'text-muted-foreground'} size={24} />
                  <span className={`font-semibold ${selectedDept === index ? 'text-primary' : 'text-foreground'}`}>
                    {dept.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Department Details */}
          <div className="md:w-2/3 bg-card border border-border rounded-lg p-8 shadow-sm">
            {hospitalData.departments.map((dept, index) => (
              <div
                key={index}
                className={`${selectedDept === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {dept.name}
                </h3>
                <p className="text-primary font-semibold text-lg mb-6">
                  {dept.description}
                </p>
                <ul className="space-y-3">
                  {dept.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
