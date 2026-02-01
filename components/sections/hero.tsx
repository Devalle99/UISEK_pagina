'use client';

import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white py-20 md:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Admisiones UISEK
          </h1>

          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Matrículas abiertas abril 2026
          </p>

          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Tu futuro comienza aquí. Únete a la comunidad académica UISEK y transforma tus sueños en realidad.
          </p>

          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 font-semibold focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 transition-all"
            aria-label="Comenzar proceso de postulación"
          >
            Comienza tu postulación
          </Button>

          <div className="mt-12 relative aspect-video bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-blue-900 focus:ring-4 focus:ring-white"
                aria-label="Reproducir video de presentación de UISEK"
              >
                <Play className="h-10 w-10 ml-1" aria-hidden="true" />
              </Button>
            </div>
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Vista del campus universitario UISEK con estudiantes"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
