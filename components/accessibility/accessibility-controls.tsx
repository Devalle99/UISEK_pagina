'use client';

import { Button } from '@/components/ui/button';
import { Type, Contrast, Eye } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface AccessibilityControlsProps {
  fontSize: 'normal' | 'large' | 'extra-large';
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  highContrast: boolean;
  setHighContrast: (contrast: boolean) => void;
}

export default function AccessibilityControls({
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
}: AccessibilityControlsProps) {
  return (
    <div
      className="fixed right-4 top-20 z-50 flex flex-col gap-2"
      role="region"
      aria-label="Controles de accesibilidad"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="rounded-full w-12 h-12 shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            aria-label="Cambiar tamaño de fuente"
            title="Cambiar tamaño de fuente"
          >
            <Type className="h-5 w-5" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setFontSize('normal')}
            className={fontSize === 'normal' ? 'bg-accent' : ''}
          >
            Texto Normal
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFontSize('large')}
            className={fontSize === 'large' ? 'bg-accent' : ''}
          >
            Texto Grande
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFontSize('extra-large')}
            className={fontSize === 'extra-large' ? 'bg-accent' : ''}
          >
            Texto Extra Grande
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="default"
        size="icon"
        className="rounded-full w-12 h-12 shadow-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        onClick={() => setHighContrast(!highContrast)}
        aria-label={highContrast ? 'Desactivar alto contraste' : 'Activar alto contraste'}
        aria-pressed={highContrast}
        title={highContrast ? 'Desactivar alto contraste' : 'Activar alto contraste'}
      >
        <Contrast className="h-5 w-5" aria-hidden="true" />
      </Button>

      <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md shadow-lg text-center">
        <Eye className="h-4 w-4 mx-auto mb-1" aria-hidden="true" />
        <span className="sr-only">Controles de accesibilidad disponibles</span>
        Accesibilidad
      </div>
    </div>
  );
}
