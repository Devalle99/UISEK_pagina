import Link from 'next/link';
import { GraduationCap, BookOpen, Monitor, ArrowLeftRight, Newspaper, Users } from 'lucide-react';

const bentoItems = [
  {
    title: 'Carreras de pregrado',
    href: '/pregrado',
    icon: GraduationCap,
    className: 'md:col-span-2 bg-gradient-to-br from-blue-500 to-blue-700',
  },
  {
    title: 'Programas de posgrado',
    href: '/posgrado',
    icon: BookOpen,
    className: 'md:col-span-2 bg-gradient-to-br from-teal-500 to-teal-700',
  },
  {
    title: 'UISEK Online',
    href: '/online',
    icon: Monitor,
    className: 'bg-gradient-to-br from-orange-500 to-orange-700',
  },
  {
    title: 'Convalidaciones',
    href: '/convalidaciones',
    icon: ArrowLeftRight,
    className: 'bg-gradient-to-br from-green-500 to-green-700',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: Newspaper,
    className: 'bg-gradient-to-br from-red-500 to-red-700',
  },
  {
    title: 'Educación continua',
    href: '/educacion-continua',
    icon: Users,
    className: 'md:col-span-2 bg-gradient-to-br from-violet-500 to-violet-700',
  },
  {
    title: 'Asignaturas Ser UISEK',
    href: '/ser-uisek',
    icon: GraduationCap,
    className: 'md:col-span-2 bg-gradient-to-br from-slate-600 to-slate-800',
  },
];

export default function BentoBox() {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-labelledby="bento-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="bento-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Explora Nuestras Opciones Académicas
        </h2>

        <nav aria-label="Opciones académicas">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {bentoItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${item.className} text-white p-8 rounded-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 group`}
                  aria-label={`Conocer más sobre ${item.title}`}
                >
                  <div className="flex flex-col items-start h-full">
                    <Icon
                      className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}
