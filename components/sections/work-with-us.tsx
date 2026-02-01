import { Button } from '@/components/ui/button';
import { FileText, ClipboardList } from 'lucide-react';

export default function WorkWithUs() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      aria-labelledby="work-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="work-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Únete a nuestro equipo de trabajo
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-8 text-blue-50">
            La Universidad Internacional SEK trabaja con un equipo humano comprometido con los ideales de calidad de la Institución Internacional SEK en el mundo, un lugar en el que encontrarás la oportunidad de crecer a nivel personal y profesional. Si deseas ser parte de una institución internacional en Ecuador, llena el formulario y la ficha de datos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-blue-900 hover:bg-gray-100 focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              aria-label="Completar formulario de postulación laboral"
            >
              <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
              Formulario
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-900 focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              aria-label="Descargar ficha de datos para postulación"
            >
              <ClipboardList className="mr-2 h-5 w-5" aria-hidden="true" />
              Ficha de datos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
