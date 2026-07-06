export const hospitalData = {
  name: 'Kashiba Multispeciality Hospital',
  tagline: 'Advanced ICU & NICU Care | Compassionate Healthcare for Your Family',
  
  // Contact Information
  phone: '+919484487872',
  phoneFormatted: '94844 87872',
  email: 'kashibahospital1010@gmail.com',
  
  // Branches
  branches: [
    {
      name: 'Kashiba Multispeciality Hospital – Kamrej (Main, ICU & NICU)',
      address: '2nd Floor, Astha Business Centre, Narmada Nagar, Near Harekrishna Bungalows, Canal Road, Kamrej.',
      isMain: true,
    },
    {
      name: 'Kashiba Multispeciality Hospital – Godadara',
      address: '4th Floor, Royal Square Complex, Mahendra Pratap Chowk, Dindoli–Godadara Road, Surat.',
    },
    {
      name: 'Kashiba Multispeciality Hospital – Rajula',
      address: 'Near Civil Hospital, Jafrabad Road, Rajula City.',
    },
  ],
  
  // OPD Timings
  opdTimings: {
    weekday: 'Monday to Saturday',
    weekdayMorning: '10:00 AM – 1:00 PM',
    weekdayEvening: '5:00 PM – 8:00 PM',
    sunday: 'Sunday (By Appointment Only)',
    sundayMorning: '10:00 AM – 1:00 PM',
  },
  
  // Facilities
  facilities: [
    { name: '24×7 Emergency Medical Services', icon: 'AlertCircle' },
    { name: 'General Ward, Semi-Special, Special & Deluxe Rooms', icon: 'Bed' },
    { name: 'Medical Store Facility', icon: 'Pill' },
    { name: 'Mediclaim & Cashless Treatment Facility', icon: 'CreditCard' },
  ],
  
  // Departments
  departments: [
    {
      name: 'Paediatric Department',
      icon: 'Baby',
      description: 'Complete Child Care Centre',
      details: [
        'Comprehensive treatment for children from 0 to 18 years',
        'Advanced NICU facilities for newborns: Oxygen Incubator, Open Care System, Resuscitation Pump, CPAP Machine, Dräger Babylog 8000 Ventilator',
        'Phototherapy unit & LED Phototherapy for neonatal jaundice',
        'Advanced monitoring for premature and critically ill newborns',
        'Treatment of childhood illnesses: Diarrhoea, Dehydration, Asthma, Pneumonia, Dengue, Malaria, Typhoid',
        'Treatment of cough, cold, fever and common childhood diseases',
        'Dietary and nutritional guidance for newborns and children',
      ],
    },
    {
      name: 'Medicine Department',
      icon: 'Stethoscope',
      description: 'Comprehensive Medical Care',
      details: [
        'Treatment of Fever, Heart Diseases, Lung Diseases, Diabetes, Liver Diseases, Kidney Diseases, Stomach Disorders',
        'Diagnosis & treatment of Blood Disorders, Thyroid Disorders, Dengue, Malaria, and infectious diseases',
        'Well-equipped ICU with advanced ventilators and monitoring systems',
        'Infusion Pump for accurate administration of critical medicines',
        'Digital ECG and Defibrillator facilities',
        'Nebulizer and Pulse Oximeter facilities',
        'Diagnosis and treatment of chest, liver and kidney diseases',
        'Comprehensive treatment of infections, allergies and respiratory illnesses',
        '24×7 Emergency Medical Services',
        'Ventilator support with advanced critical care facilities',
      ],
    },
  ],
  
  // Doctors
  doctors: [
    {
      name: 'Dr. Mansukh Hadiya',
      qualification: 'M.D., I.D.C.C.M',
      designation: 'Consultant Physician & Critical Care Specialist',
      image: '/doctors/mansukh-hadiya.jpg',
    },
    {
      name: 'Dr. Dinesh Kalsariya',
      qualification: 'M.D. (Paed)',
      designation: 'Consultant Paediatrician & Neonatologist',
      image: '/doctors/dinesh-kalsariya.jpg',
    },
  ],
  
  // Gallery Images
  galleryImages: [
    { caption: 'ICU Ward' },
    { caption: 'NICU' },
    { caption: 'Reception' },
    { caption: 'Deluxe Room' },
    { caption: 'Operation Theatre' },
    { caption: 'Waiting Area' },
    { caption: 'Patient Room' },
    { caption: 'Hospital Corridor' },
  ],
  
  // Google Maps
  mapsUrl: 'https://maps.app.goo.gl/6bVEARAfMiYZqfAX7?g_st=ic',
};

export const highlightCards = [
  { title: '24×7 Emergency', icon: 'AlertCircle' },
  { title: 'Advanced ICU & NICU', icon: 'Heart' },
  { title: 'Experienced Specialists', icon: 'Users' },
  { title: 'Cashless Mediclaim', icon: 'CreditCard' },
];
