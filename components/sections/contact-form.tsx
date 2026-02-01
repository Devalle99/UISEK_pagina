'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Mensaje enviado',
      description: 'Nos pondremos en contacto contigo pronto.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Información de contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Dirección</h4>
                  <p className="text-gray-600">
                    Av. Alberto Einstein y 5ta. Transversal<br />
                    Quito, Ecuador
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">
                    <a
                      href="tel:+59323970100"
                      className="hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:underline"
                    >
                      +593 2 397 0100
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-gray-900">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@uisek.edu.ec"
                      className="hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:underline"
                    >
                      info@uisek.edu.ec
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Formulario de contacto"
            >
              <div>
                <Label htmlFor="name" className="text-gray-900">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 focus:ring-4 focus:ring-blue-300"
                  aria-required="true"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 focus:ring-4 focus:ring-blue-300"
                  aria-required="true"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-900">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 focus:ring-4 focus:ring-blue-300"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-900">
                  Mensaje *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 focus:ring-4 focus:ring-blue-300"
                  aria-required="true"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full focus:ring-4 focus:ring-blue-300"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
