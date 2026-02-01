'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mainNavLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Admisiones', href: '/admisiones' },
  { name: 'La universidad', href: '/la-universidad' },
  { name: 'Oferta Académica', href: '/oferta-academica' },
  { name: 'Estudiantes', href: '/estudiantes' },
  { name: 'Facultades', href: '/facultades' },
  { name: 'Investigación', href: '/investigacion' },
];

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 shadow-sm"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-md p-2"
            aria-label="Universidad UISEK - Ir a inicio"
          >
            <GraduationCap className="h-10 w-10 text-blue-600" aria-hidden="true" />
            <div>
              <div className="text-2xl font-bold text-blue-600">UISEK</div>
              <div className="text-xs text-gray-600">Universidad Internacional SEK</div>
            </div>
          </Link>

          <button
            type="button"
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <ul className="hidden md:flex gap-6 items-center">
            {mainNavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 focus:text-blue-600 font-medium focus:outline-none focus:underline transition-colors"
                  aria-label={`Ir a ${link.name}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4"
            role="menu"
          >
            <ul className="flex flex-col gap-2">
              {mainNavLinks.map((link) => (
                <li key={link.name} role="none">
                  <Link
                    href={link.href}
                    className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md transition-colors"
                    role="menuitem"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
