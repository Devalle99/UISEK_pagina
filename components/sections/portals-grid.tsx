import Link from 'next/link';
import { BookOpen, Heart, Lightbulb, GraduationCap, Users, Monitor, Briefcase, Link2 } from 'lucide-react';

const portals = [
  { title: 'Revistas', icon: BookOpen, href: '/revistas' },
  { title: 'Ser mejores', icon: Heart, href: '/ser-mejores' },
  { title: 'Investigación e innovación', icon: Lightbulb, href: '/investigacion' },
  { title: 'Educación continua', icon: GraduationCap, href: '/educacion-continua' },
  { title: 'Alumni UISEK', icon: Users, href: '/alumni' },
  { title: 'Campus Virtual', icon: Monitor, href: '/campus-virtual' },
  { title: 'Bolsa de empleo', icon: Briefcase, href: '/bolsa-empleo' },
  { title: 'Vinculación', icon: Link2, href: '/vinculacion' },
];

export default function PortalsGrid() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="portals-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="portals-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            PORTALES UISEK
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ingresa a uno de nuestros portales y accede a toda la información y beneficios que la Universidad Internacional SEK te ofrece
          </p>
        </div>

        <nav aria-label="Portales UISEK">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {portals.map((portal) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.title}
                  href={portal.href}
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-lg hover:from-blue-50 hover:to-blue-100 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 group"
                  aria-label={`Acceder a ${portal.title}`}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:scale-110 transition-all">
                    <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-center font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {portal.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}
