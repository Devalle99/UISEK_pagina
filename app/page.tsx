'use client';

import { useState } from 'react';
import TopNavbar from '@/components/layout/top-navbar';
import MainNavbar from '@/components/layout/main-navbar';
import Hero from '@/components/sections/hero';
import ImageCarousel from '@/components/sections/image-carousel';
import InfoCards from '@/components/sections/info-cards';
import BentoBox from '@/components/sections/bento-box';
import PortalsGrid from '@/components/sections/portals-grid';
import WorkWithUs from '@/components/sections/work-with-us';
import ServicesCarousel from '@/components/sections/services-carousel';
import ContactForm from '@/components/sections/contact-form';
import Footer from '@/components/layout/footer';
import AccessibilityControls from '@/components/accessibility/accessibility-controls';
import SkipToContent from '@/components/accessibility/skip-to-content';

export default function Home() {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div
      className={`min-h-screen ${fontSize === 'large' ? 'text-lg' : fontSize === 'extra-large' ? 'text-xl' : ''} ${highContrast ? 'high-contrast' : ''}`}
      data-font-size={fontSize}
    >
      <SkipToContent />
      <AccessibilityControls
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      <header role="banner">
        <TopNavbar />
        <MainNavbar />
      </header>

      <main id="main-content" role="main">
        <Hero />
        <ImageCarousel />
        <InfoCards />
        <BentoBox />
        <PortalsGrid />
        <WorkWithUs />
        <ServicesCarousel />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
