'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, caption: 'Reception', url: '/gallery/reception.jpg' },
  { id: 2, caption: 'Entrance Lobby', url: '/gallery/lobby.jpg' },
  { id: 3, caption: 'ICU', url: '/gallery/icu.jpg' },
  { id: 4, caption: 'NICU', url: '/gallery/nicu.jpg' },
  { id: 5, caption: 'General Ward', url: '/gallery/general-ward.jpg' },
  { id: 6, caption: 'Private Room', url: '/gallery/private-room.jpg' },
  { id: 7, caption: 'Semi-Deluxe Room', url: '/gallery/semi-deluxe-room.jpg' },
  { id: 8, caption: 'Twin Sharing Room', url: '/gallery/twin-sharing-room.jpg' },
  { id: 9, caption: 'Paediatric Department', url: '/gallery/paediatric-department.jpg' },
  { id: 10, caption: 'Medicine Department', url: '/gallery/medicine-department.jpg' },
  { id: 11, caption: 'Pharmacy', url: '/gallery/pharmacy.jpg' },
  { id: 12, caption: 'Hospital Corridor', url: '/gallery/corridor.jpg' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Hospital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            State-of-the-art facilities and compassionate care
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative h-64 group cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end">
                <div className="w-full p-4 text-white translate-y-full group-hover:translate-y-0 transition">
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-card border border-border rounded-full p-2 hover:bg-muted transition z-10"
            >
              <X size={24} className="text-foreground" />
            </button>
            <div className="relative w-full h-96 md:h-screen max-h-96 md:max-h-screen">
              <Image
                src={selectedImage.url}
                alt={selectedImage.caption}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-4 font-semibold">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
