'use client';

import Link from 'next/link';

const topNavLinks = [
  { name: 'Admisiones', href: '/admisiones' },
  { name: 'Inscripciones online', href: '/inscripciones' },
  { name: 'Portal Alumnos', href: '/portal-alumnos' },
  { name: 'Alumni', href: '/alumni' },
  { name: 'Campus virtual', href: '/campus-virtual' },
  { name: 'Portal docentes', href: '/portal-docentes' },
  { name: 'Blog', href: '/blog' },
  { name: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
];

export default function TopNavbar() {
  return (
    <nav
      className="bg-slate-800 text-white py-2 px-4"
      aria-label="Navegación superior"
    >
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          {topNavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-blue-300 focus:text-blue-300 focus:outline-none focus:underline transition-colors"
                aria-label={`Ir a ${link.name}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
