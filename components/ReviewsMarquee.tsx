'use client';

import React, { useState } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS, COMPANY_INFO } from '@/lib/data';
import FlipFadeText from './FlipFadeText';

export default function ReviewsMarquee() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Duplicate for seamless loop
  const marqueeItems = [...REVIEWS, ...REVIEWS];

  // Longer list => slower scroll so every card stays readable
  const marqueeDuration = `${Math.max(40, REVIEWS.length * 5)}s`;

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Sticky still background image - NO dark fade as explicitly requested */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{
          backgroundImage: `url('${COMPANY_INFO.reviewsStickyBg}')`,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
          {/* Strictly NO eyebrow label, NO subheading, NO subsections! */}
          <FlipFadeText
            text="Read what our client says"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight drop-shadow-sm"
          />

          {/* 5-Star indicator pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#EABC48] shadow-lg">
            <div className="flex text-[#EABC48]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-black">
              {COMPANY_INFO.rating.toFixed(1)} Star Rating &bull; {REVIEWS.length} Verified Reviews in NJ
            </span>
          </div>
        </div>

        {/* Single Line Marquee */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Marquee Track */}
          <div className="animate-marquee flex items-stretch gap-6 px-4" style={{ animationDuration: marqueeDuration }}>
            {marqueeItems.map((review, idx) => {
              const isExpanded = expandedId === review.id;
              return (
                <div
                  key={`${review.id}-${idx}`}
                  onClick={() => setExpandedId(isExpanded ? null : review.id)}
                  className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 flex flex-col bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#EABC48]/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#EABC48]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#EABC48]/40" />
                  </div>

                  <p
                    className={`text-neutral-800 text-xs sm:text-sm leading-relaxed mb-6 font-medium italic ${
                      isExpanded ? '' : 'line-clamp-6'
                    }`}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {review.text.length > 190 && (
                    <span className="mb-4 -mt-2 text-[10px] font-bold uppercase tracking-wider text-[#C99723]">
                      {isExpanded ? 'Show less' : 'Tap to read full review'}
                    </span>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-200">
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-black flex items-center gap-1.5">
                        <span className="truncate">{review.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99723] flex-shrink-0" />
                      </h3>
                      <p className="text-[11px] text-neutral-500">{review.source}</p>
                    </div>
                    <span className="ml-3 flex-shrink-0 px-3 py-1 rounded-full bg-[#F8EAA5]/60 text-black text-[10px] font-bold uppercase tracking-wider">
                      {review.service}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
