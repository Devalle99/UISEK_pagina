'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Globe, Briefcase, Library, Database, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Bienestar estudiantil',
    description: 'Servicios de apoyo psicológico, médico y deportivo para el bienestar integral de nuestros estudiantes.',
    icon: Heart,
  },
  {
    title: 'Internacionalización',
    description: 'Programas de intercambio, convenios internacionales y experiencias globales para ampliar tu visión académica.',
    icon: Globe,
  },
  {
    title: 'Bolsa de empleo',
    description: 'Conectamos a nuestros estudiantes y graduados con oportunidades laborales en empresas líderes.',
    icon: Briefcase,
  },
  {
    title: 'Biblioteca',
    description: 'Acceso a recursos bibliográficos físicos y digitales, espacios de estudio y asesoría académica.',
    icon: Library,
  },
  {
    title: 'Repositorio Digital',
    description: 'Acceso a trabajos de investigación, tesis y proyectos académicos de la comunidad UISEK.',
    icon: Database,
  },
  {
    title: 'Instituto de Idiomas',
    description: 'Aprende idiomas con metodologías innovadoras y docentes especializados en diferentes lenguas.',
    icon: Languages,
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, services.length - itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Servicios Estudiantiles
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
              role="region"
              aria-label="Carrusel de servicios estudiantiles"
            >
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {currentIndex > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 rounded-full shadow-lg focus:ring-4 focus:ring-blue-300"
              onClick={goToPrevious}
              aria-label="Servicios anteriores"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </Button>
          )}

          {currentIndex < maxIndex && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 rounded-full shadow-lg focus:ring-4 focus:ring-blue-300"
              onClick={goToNext}
              aria-label="Servicios siguientes"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </Button>
          )}

          <div className="sr-only" aria-live="polite">
            Mostrando servicios {currentIndex + 1} a {Math.min(currentIndex + itemsPerPage, services.length)} de {services.length}
          </div>
        </div>
      </div>
    </section>
  );
}
