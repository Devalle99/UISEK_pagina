import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  universidad: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Misión y Visión', href: '/mision-vision' },
    { name: 'Autoridades', href: '/autoridades' },
    { name: 'Acreditaciones', href: '/acreditaciones' },
  ],
  academico: [
    { name: 'Pregrado', href: '/pregrado' },
    { name: 'Posgrado', href: '/posgrado' },
    { name: 'Educación Continua', href: '/educacion-continua' },
    { name: 'UISEK Online', href: '/online' },
  ],
  estudiantes: [
    { name: 'Admisiones', href: '/admisiones' },
    { name: 'Becas', href: '/becas' },
    { name: 'Biblioteca', href: '/biblioteca' },
    { name: 'Campus Virtual', href: '/campus-virtual' },
  ],
  servicios: [
    { name: 'Bolsa de Empleo', href: '/bolsa-empleo' },
    { name: 'Investigación', href: '/investigacion' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Contacto', href: '/contacto' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-md p-2"
              aria-label="Universidad UISEK - Ir a inicio"
            >
              <GraduationCap className="h-8 w-8" aria-hidden="true" />
              <div>
                <div className="text-xl font-bold">UISEK</div>
                <div className="text-xs text-gray-400">Universidad Internacional SEK</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Formando profesionales con excelencia académica y valores humanos desde 1993.
            </p>
            <nav aria-label="Redes sociales">
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                      aria-label={`Visitar ${social.name} de UISEK (abre en nueva ventana)`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </nav>
          </div>

          <nav aria-label="Enlaces universidad">
            <h3 className="font-bold text-lg mb-4">La Universidad</h3>
            <ul className="space-y-2">
              {footerLinks.universidad.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces académicos">
            <h3 className="font-bold text-lg mb-4">Académico</h3>
            <ul className="space-y-2">
              {footerLinks.academico.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces estudiantes">
            <h3 className="font-bold text-lg mb-4">Estudiantes</h3>
            <ul className="space-y-2">
              {footerLinks.estudiantes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Enlaces servicios">
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Universidad Internacional SEK - UISEK. Todos los derechos reservados.
          </p>
          <div className="mt-2">
            <Link
              href="/privacidad"
              className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
            >
              Política de Privacidad
            </Link>
            {' | '}
            <Link
              href="/terminos"
              className="hover:text-white focus:text-white focus:outline-none focus:underline transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
