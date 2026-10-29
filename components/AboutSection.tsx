'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';

interface AboutSectionProps {
  onEstimateClick: () => void;
}

export default function AboutSection({ onEstimateClick }: AboutSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F2F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column (5-6 cols): Do not crop from any side, no eyebrow label, no text on image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-neutral-300 bg-white p-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={COMPANY_INFO.aboutImage}
                  alt="RAM Fencing & Home Improvement Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text Content Column (6 cols): NO eyebrow label! */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Heading with FlipFadeText animation */}
              <FlipFadeText
                text="Crafting Quality Living Spaces Across New Jersey"
                as="h2"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-black tracking-tight leading-tight"
              />
            </div>

            {/* Exact content required by prompt with StaggerText animation */}
            <div className="text-sm sm:text-base text-neutral-700 leading-relaxed space-y-4">
              <StaggerText
                text="AT RAM Fencing & Home Improvement, we specialize in construction, remodeling, and home improvement services tailored to each client's needs. From small renovations to complete transformations, we combine skilled craftsmanship, attention to detail, and dependable service to bring your vision to life."
                className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal"
              />
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-black">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C99723] shrink-0" />
                <span>Plainfield, NJ Based Local Crew</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C99723] shrink-0" />
                <span>Tailored Architectural Customization</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C99723] shrink-0" />
                <span>Licensed & Fully Insured Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C99723] shrink-0" />
                <span>5-Star Rated Across New Jersey</span>
              </div>
            </div>

            {/* Rounded Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3 items-center">
              <button
                onClick={onEstimateClick}
                className="px-6 py-3 rounded-full bg-black hover:bg-neutral-800 text-[#F8EAA5] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
              >
                Get Free Estimate
              </button>
              <Link
                href="/services"
                className="px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black border border-neutral-300 font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
