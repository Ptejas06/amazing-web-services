'use client';

import React, { useState } from 'react';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';

export default function ServiceInquiry({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = useState('');

  return (
    <>
      <Services onSelectService={setSelectedService} />
      {children}
      <ContactForm selectedService={selectedService} onServiceChange={setSelectedService} />
    </>
  );
}
