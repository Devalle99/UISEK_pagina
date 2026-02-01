'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  {
    src: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Estudiantes universitarios trabajando en grupo en biblioteca',
  },
  {
    src: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Estudiantes en laboratorio de ciencias',
  },
  {
    src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Campus universitario con estudiantes caminando',
  },
  {
    src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Aula moderna con estudiantes',
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section
      className="py-12 bg-gray-50"
      aria-labelledby="carousel-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="carousel-heading" className="sr-only">
          Galería de imágenes del campus UISEK
        </h2>

        <div
          className="relative aspect-[21/9] max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg"
          role="region"
          aria-label="Carrusel de imágenes"
          aria-live="polite"
        >
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full focus:ring-4 focus:ring-blue-300"
            onClick={goToPrevious}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full focus:ring-4 focus:ring-blue-300"
            onClick={goToNext}
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </Button>

          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
            role="tablist"
            aria-label="Indicadores de imagen"
          >
            {carouselImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a imagen ${index + 1} de ${carouselImages.length}`}
                aria-current={index === currentIndex}
                role="tab"
                aria-selected={index === currentIndex}
              />
            ))}
          </div>

          <div className="sr-only" aria-live="polite" aria-atomic="true">
            Mostrando imagen {currentIndex + 1} de {carouselImages.length}
          </div>
        </div>
      </div>
    </section>
  );
}
