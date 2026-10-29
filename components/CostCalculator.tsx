'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';
import EstimateModal from './EstimateModal';
import { COMPANY_INFO } from '@/lib/data';

interface ServiceRate {
  name: string;
  baseRatePerSqFt: number; // e.g., $120/sqft
  defaultSqFt: number;
  minSqFt: number;
  maxSqFt: number;
  unit: string;
}

const SERVICE_RATES: Record<string, ServiceRate> = {
  'Kitchen Remodeling': {
    name: 'Kitchen Remodeling',
    baseRatePerSqFt: 155,
    defaultSqFt: 180,
    minSqFt: 80,
    maxSqFt: 500,
    unit: 'sq ft',
  },
  'Bathroom Remodeling': {
    name: 'Bathroom Remodeling',
    baseRatePerSqFt: 195,
    defaultSqFt: 75,
    minSqFt: 35,
    maxSqFt: 250,
    unit: 'sq ft',
  },
  'Deck Construction': {
    name: 'Deck Construction',
    baseRatePerSqFt: 58,
    defaultSqFt: 320,
    minSqFt: 120,
    maxSqFt: 900,
    unit: 'sq ft',
  },
  'Siding Repair & Installation': {
    name: 'Siding Repair & Installation',
    baseRatePerSqFt: 14,
    defaultSqFt: 1600,
    minSqFt: 400,
    maxSqFt: 4000,
    unit: 'sq ft wall area',
  },
  'Roofing': {
    name: 'Roofing Replacement',
    baseRatePerSqFt: 12,
    defaultSqFt: 2200,
    minSqFt: 800,
    maxSqFt: 4500,
    unit: 'sq ft roof area',
  },
  'Basement Remodeling': {
    name: 'Basement Remodeling',
    baseRatePerSqFt: 65,
    defaultSqFt: 700,
    minSqFt: 250,
    maxSqFt: 2000,
    unit: 'sq ft',
  },
  'LVP Flooring': {
    name: 'LVP Flooring',
    baseRatePerSqFt: 8.5,
    defaultSqFt: 850,
    minSqFt: 150,
    maxSqFt: 3000,
    unit: 'sq ft',
  },
  'Painting': {
    name: 'Interior & Exterior Painting',
    baseRatePerSqFt: 4.5,
    defaultSqFt: 1800,
    minSqFt: 300,
    maxSqFt: 4500,
    unit: 'sq ft surface',
  },
  'Floor Tile': {
    name: 'Floor Tile',
    baseRatePerSqFt: 16,
    defaultSqFt: 400,
    minSqFt: 80,
    maxSqFt: 1800,
    unit: 'sq ft',
  },
  // Fencing work is measured in linear feet, not square feet
  'Aluminum Fencing': {
    name: 'Aluminum Fencing',
    baseRatePerSqFt: 34,
    defaultSqFt: 150,
    minSqFt: 50,
    maxSqFt: 600,
    unit: 'linear ft',
  },
  'Chain Link Fencing': {
    name: 'Chain Link Fencing',
    baseRatePerSqFt: 17,
    defaultSqFt: 200,
    minSqFt: 60,
    maxSqFt: 800,
    unit: 'linear ft',
  },
  'Vinyl (PVC) Fencing': {
    name: 'Vinyl (PVC) Fencing',
    baseRatePerSqFt: 40,
    defaultSqFt: 150,
    minSqFt: 50,
    maxSqFt: 600,
    unit: 'linear ft',
  },
};

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<string>('Kitchen Remodeling');
  const [sqFt, setSqFt] = useState<number>(180);
  const [finishGrade, setFinishGrade] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [includePermits, setIncludePermits] = useState(true);
  const [includeDemo, setIncludeDemo] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const currentRate = SERVICE_RATES[selectedService] || SERVICE_RATES['Kitchen Remodeling'];

  // Update sqFt if service changes outside limits
  const handleServiceChange = (serviceName: string) => {
    setSelectedService(serviceName);
    const rate = SERVICE_RATES[serviceName];
    if (rate) {
      setSqFt(rate.defaultSqFt);
    }
  };

  const calculation = useMemo(() => {
    let multiplier = 1.0;
    if (finishGrade === 'premium') multiplier = 1.35;
    if (finishGrade === 'luxury') multiplier = 1.75;

    let baseCost = sqFt * currentRate.baseRatePerSqFt * multiplier;
    if (includeDemo) baseCost += sqFt * 5.5;
    if (includePermits) baseCost += 650;

    const minEstimate = Math.round(baseCost * 0.92);
    const maxEstimate = Math.round(baseCost * 1.08);

    return {
      min: minEstimate,
      max: maxEstimate,
      laborMaterial: Math.round(baseCost * 0.85),
      finishGradeName: finishGrade.charAt(0).toUpperCase() + finishGrade.slice(1),
    };
  }, [sqFt, currentRate, finishGrade, includeDemo, includePermits]);

  return (
    <>
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Sticky still background image - NO dark fade as specified */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
          style={{
            backgroundImage: `url('${COMPANY_INFO.calculatorStickyBg}')`,
          }}
        />

        {/* Foreground Calculator Card */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#EABC48]/40 shadow-2xl p-6 sm:p-10 lg:p-12">
            {/* Header: NO eyebrow label! */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <FlipFadeText
                text="Interactive Remodel Cost Estimator"
                as="h2"
                className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight"
              />
              <StaggerText
                text="Calculate immediate budget guidelines for your home improvement or remodeling project in New Jersey."
                className="mt-3 text-xs sm:text-sm text-neutral-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Service select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    1. Select Service
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {Object.keys(SERVICE_RATES).map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => handleServiceChange(srv)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                          selectedService === srv
                            ? 'bg-black text-[#F8EAA5] border-[#EABC48] shadow-sm'
                            : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Square footage */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      2. Project Scope ({currentRate.unit})
                    </label>
                    <span className="text-sm font-bold text-black bg-[#F8EAA5]/60 px-3 py-1 rounded-full border border-[#EABC48]/40">
                      {sqFt.toLocaleString()} {currentRate.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currentRate.minSqFt}
                    max={currentRate.maxSqFt}
                    step={10}
                    value={sqFt}
                    onChange={(e) => setSqFt(Number(e.target.value))}
                    className="w-full accent-[#EABC48] h-2 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                    <span>{currentRate.minSqFt} {currentRate.unit}</span>
                    <span>{currentRate.maxSqFt} {currentRate.unit}</span>
                  </div>
                </div>

                {/* 3. Finish Grade */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    3. Craftsmanship & Material Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'standard', label: 'Standard', desc: 'Durable quality' },
                      { id: 'premium', label: 'Premium', desc: 'Custom finishes' },
                      { id: 'luxury', label: 'Luxury', desc: 'Top architectural' },
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setFinishGrade(tier.id as any)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          finishGrade === tier.id
                            ? 'bg-black text-[#F8EAA5] border-[#EABC48] shadow-md'
                            : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        <div className="font-bold text-xs">{tier.label}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{tier.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Add-on Checkboxes */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-700">
                    <input
                      type="checkbox"
                      checked={includeDemo}
                      onChange={(e) => setIncludeDemo(e.target.checked)}
                      className="accent-[#EABC48] w-4 h-4 rounded"
                    />
                    Include Tear-out & Disposal
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-700">
                    <input
                      type="checkbox"
                      checked={includePermits}
                      onChange={(e) => setIncludePermits(e.target.checked)}
                      className="accent-[#EABC48] w-4 h-4 rounded"
                    />
                    NJ Municipal Permit Coordination
                  </label>
                </div>
              </div>

              {/* Estimate Summary Box (5 cols) */}
              <div className="lg:col-span-5 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-[#EABC48]/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#F8EAA5]">
                      Estimated Range
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                      <Sparkles className="w-3.5 h-3.5 text-[#EABC48]" /> NJ Market Rates
                    </span>
                  </div>

                  <div className="py-6">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      ${calculation.min.toLocaleString()} - ${calculation.max.toLocaleString()}
                    </div>
                    <p className="text-xs text-neutral-400 mt-2">
                      Based on {sqFt} {currentRate.unit} of {selectedService} with {calculation.finishGradeName} tier craftsmanship.
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 py-4 border-t border-neutral-800 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#EABC48]" />
                      <span>Dedicated Project Manager on site</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#EABC48]" />
                      <span>Licensed & Insured NJ Contractors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#EABC48]" />
                      <span>Full Labor & Workmanship Warranty</span>
                    </div>
                  </div>
                </div>

                {/* Rounded CTA button */}
                <div className="pt-6">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-full bg-[#EABC48] hover:bg-[#d8ab3a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-98"
                  >
                    <span>Lock In This Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-neutral-500 mt-2">
                    Exact in-person quote provided after free on-site walk-through.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EstimateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}
