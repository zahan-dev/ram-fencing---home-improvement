'use client';

import React, { useState } from 'react';
import { ALL_SERVICES } from '@/lib/data';
import ServiceCard3D from '@/components/ServiceCard3D';
import CostCalculator from '@/components/CostCalculator';
import FlipFadeText from '@/components/FlipFadeText';
import StaggerText from '@/components/StaggerText';
import EstimateModal from '@/components/EstimateModal';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Kitchen Remodeling');

  const handleEstimateClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-[#F2F1EF] min-h-screen">
      {/* Services Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* Main Heading & Subheading: NO eyebrow label! NO sub-sections! */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <FlipFadeText
              text="Our professional services"
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight"
            />
            {/* Subheading allowed on services page as requested */}
            <StaggerText
              text="Comprehensive construction, remodeling, and exterior improvements executed with master craftsmanship throughout New Jersey."
              className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed"
            />
          </div>

          {/* Service cards: 5 services in each line on desktop, 3 per line on mobile */}
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-5">
            {ALL_SERVICES.map((service) => (
              <div key={service.id} id={service.id} className="h-full scroll-mt-28">
                <ServiceCard3D
                  service={service}
                  onEstimateClick={handleEstimateClick}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section placed after services section */}
      <CostCalculator />

      {/* Estimate Modal */}
      <EstimateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
