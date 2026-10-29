'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HOMEPAGE_SERVICES } from '@/lib/data';
import ServiceCard3D from './ServiceCard3D';
import FlipFadeText from './FlipFadeText';

interface HomeServicesSectionProps {
  onEstimateClick: (serviceName: string) => void;
}

export default function HomeServicesSection({ onEstimateClick }: HomeServicesSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F2F1EF]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Heading: Strictly “Our professional services”. NO sub heading and NO sub sections! NO eyebrow label! */}
        <div className="text-center mb-8 sm:mb-14">
          <FlipFadeText
            text="Our professional services"
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight"
          />
        </div>

        {/* 5 services on homepage in a single row on desktop, 3 in a row on mobile */}
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-5">
          {HOMEPAGE_SERVICES.map((service) => (
            <div key={service.id} className="h-full">
              <ServiceCard3D
                service={service}
                onEstimateClick={onEstimateClick}
              />
            </div>
          ))}
        </div>

        {/* "See All Services" button which redirects to the services page */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black hover:bg-[#EABC48] text-[#F8EAA5] hover:text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span>See All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
