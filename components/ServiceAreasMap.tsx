'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';

export default function ServiceAreasMap() {
  const [activeArea, setActiveArea] = useState<string>('Plainfield');

  return (
    <section className="py-20 sm:py-28 bg-[#F2F1EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading: NO eyebrow label! */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <FlipFadeText
            text="Service Areas Across New Jersey"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight"
          />
          <StaggerText
            text="Headquartered in Plainfield, NJ, our mobile remodeling teams proudly serve homeowners across North and Central New Jersey."
            className="mt-3 text-xs sm:text-sm text-neutral-600"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info & Area List (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-black text-white border border-[#EABC48]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EABC48]/20 flex items-center justify-center text-[#EABC48]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Main Headquarters</h3>
                    <p className="text-xs text-[#F8EAA5]">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-3">
                  Primary Municipalities & Counties Served:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_INFO.serviceAreas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setActiveArea(area)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        activeArea === area
                          ? 'bg-[#EABC48] text-black shadow-sm'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-100 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C99723]" />
                  <span>Free on-site measurements and project consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C99723]" />
                  <span>Fully permitted and code-compliant installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C99723]" />
                  <span>Emergency repair & prompt storm damage response</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex-1 py-3 px-4 rounded-full bg-black hover:bg-neutral-800 text-[#F8EAA5] text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#EABC48]" />
                Call {COMPANY_INFO.displayPhone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="py-3 px-4 rounded-full bg-[#F2F1EF] hover:bg-[#eae8e4] text-black text-xs font-bold text-center transition-all flex items-center justify-center gap-2 border border-neutral-300"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-700" />
                Email
              </a>
            </div>
          </div>

          {/* Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xl min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              title="RAM Fencing & Home Improvement Service Area - Plainfield, NJ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48479.52909403079!2d-74.45347209741916!3d40.61869818816823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b0fce09696ab%3A0xb7c8fa172cfd864b!2sPlainfield%2C%20NJ%2007060!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
