'use client';

import React, { useState } from 'react';
import HeroParallax from '@/components/HeroParallax';
import AboutSection from '@/components/AboutSection';
import HomeServicesSection from '@/components/HomeServicesSection';
import HorizontalFeatureReveal from '@/components/HorizontalFeatureReveal';
import ReviewsMarquee from '@/components/ReviewsMarquee';
import ServiceAreasMap from '@/components/ServiceAreasMap';
import HomeContactSection from '@/components/HomeContactSection';
import EstimateModal from '@/components/EstimateModal';

export default function HomePage() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Kitchen Remodeling');

  const handleOpenEstimate = (serviceName: string = 'General Inquiry') => {
    setSelectedService(serviceName);
    setEstimateModalOpen(true);
  };

  return (
    <div className="relative w-full bg-[#F2F1EF]">
      {/* 2: Hero Section */}
      <HeroParallax onEstimateClick={() => handleOpenEstimate('General Inquiry')} />

      {/* 3: About Us Section */}
      <AboutSection onEstimateClick={() => handleOpenEstimate('General Inquiry')} />

      {/* 4: Services Section */}
      <HomeServicesSection onEstimateClick={handleOpenEstimate} />

      {/* 5: Why Choose Us Section */}
      <HorizontalFeatureReveal />

      {/* 6: Reviews Section */}
      <ReviewsMarquee />

      {/* 7: Service Areas Section */}
      <ServiceAreasMap />

      {/* 8: Contact Section */}
      <HomeContactSection />

      {/* Estimate Modal Dialog */}
      <EstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
