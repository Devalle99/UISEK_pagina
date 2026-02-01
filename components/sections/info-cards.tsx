import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, FileCheck, BookOpen, Calendar } from 'lucide-react';

const cards = [
  {
    title: 'Webinars UISEK',
    description:
      'En la UISEK siempre nos hemos caracterizado por ofrecer a nuestros estudiantes y público en general, charlas y/o talleres con expertos nacionales e internacionales para ampliar la visión profesional respecto a diversos temas de interés general.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Persona presentando en conferencia con audiencia',
    icon: Video,
    buttonText: 'Ver webinars',
    href: '/webinars',
  },
  {
    title: 'Matrículas Online',
    description:
      'En este espacio podrás tomar las materias correspondientes al periodo actual, legalizar tu matrícula y realizar el pago en línea.',
    image: 'https://images.pexels.com/photos/5428831/pexels-photo-5428831.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Estudiante completando formularios en computadora',
    icon: FileCheck,
    buttonText: 'Iniciar matrícula',
    href: '/matriculas',
  },
  {
    title: 'Mallas académicas',
    description:
      'Conoce las mallas curriculares actualizadas de cada una de nuestras carreras y posgrados. En ellas encontrarás las asignaturas correspondientes a cada periodo académico.',
    image: 'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Libros y materiales de estudio organizados',
    icon: BookOpen,
    buttonText: 'Ver mallas',
    href: '/mallas',
  },
  {
    title: 'Horarios de clase',
    description:
      'Conoce los horarios de clase para cada carrera y posgrado de la UISEK. Los horarios los puedes encontrar en el portal Alumnos.',
    image: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Calendario y planificador de horarios',
    icon: Calendar,
    buttonText: 'Consultar horarios',
    href: '/horarios',
  },
];

export default function InfoCards() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="info-cards-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="info-cards-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Servicios Académicos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                className="flex flex-col hover:shadow-xl transition-shadow focus-within:ring-4 focus-within:ring-blue-300"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 pt-6">
                  <CardTitle className="text-xl mb-3">{card.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full focus:ring-4 focus:ring-blue-300"
                    aria-label={`${card.buttonText} - ${card.title}`}
                  >
                    {card.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
