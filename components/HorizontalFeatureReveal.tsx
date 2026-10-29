'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { WHY_CHOOSE_US_CARDS } from '@/lib/data';
import FlipFadeText from './FlipFadeText';
import { CheckCircle2, ShieldCheck, Clock, Award, Hammer, ChevronLeft, ChevronRight } from 'lucide-react';

const icons = [Award, ShieldCheck, Clock, CheckCircle2, Hammer];

export default function HorizontalFeatureReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScrollDistance, setMaxScrollDistance] = useState<number>(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Measure dynamic scroll difference between track and viewport
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current && containerRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const diff = Math.max(0, trackWidth - viewportWidth + 64);
        setMaxScrollDistance(diff);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth translation based on actual scrollable distance
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -maxScrollDistance]);

  // Keep track of active card index based on scroll
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        WHY_CHOOSE_US_CARDS.length - 1,
        Math.floor(latest * WHY_CHOOSE_US_CARDS.length)
      );
      setActiveCardIndex(idx);
    });
  }, [scrollYProgress]);

  // Manual scroll trigger for mobile / clicking arrows
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerTop + (index / (WHY_CHOOSE_US_CARDS.length - 1)) * containerHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#F2F1EF]"
    >
      {/* Sticky viewport frame pinned while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-6 sm:py-10 z-20">
        {/* Header container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Strictly NO eyebrow label! */}
              <FlipFadeText
                text="Why Homeowners Choose RAM Fencing"
                as="h2"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight"
              />
            </div>

            {/* Interactive arrows and progress counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider hidden sm:inline">
                Card {activeCardIndex + 1} of {WHY_CHOOSE_US_CARDS.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollToCard(Math.max(0, activeCardIndex - 1))}
                  disabled={activeCardIndex === 0}
                  className="w-9 h-9 rounded-full bg-white border border-neutral-300 flex items-center justify-center text-black disabled:opacity-40 hover:bg-neutral-100 transition-colors shadow-sm"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToCard(Math.min(WHY_CHOOSE_US_CARDS.length - 1, activeCardIndex + 1))}
                  disabled={activeCardIndex === WHY_CHOOSE_US_CARDS.length - 1}
                  className="w-9 h-9 rounded-full bg-black text-[#F8EAA5] border border-black flex items-center justify-center disabled:opacity-40 hover:bg-neutral-800 transition-colors shadow-sm"
                  aria-label="Next card"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Cards Reel pinned to scroll */}
        <div className="w-full pl-4 sm:pl-6 lg:pl-12 overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 sm:gap-6 md:gap-8 w-max items-stretch pr-8 sm:pr-16"
          >
            {WHY_CHOOSE_US_CARDS.map((card, index) => {
              const IconComponent = icons[index % icons.length];
              const isCurrent = activeCardIndex === index;

              return (
                <div
                  key={card.id}
                  className={`w-[290px] sm:w-[380px] md:w-[440px] flex-shrink-0 bg-white rounded-3xl border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group ${
                    isCurrent ? 'border-[#EABC48] ring-2 ring-[#EABC48]/30' : 'border-neutral-200'
                  }`}
                >
                  <div className="relative w-full h-44 sm:h-60 md:h-64 overflow-hidden bg-neutral-900">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 290px, 440px"
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-[#EABC48]/40 flex items-center justify-center text-[#EABC48]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-[#F8EAA5]">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-black group-hover:text-[#C99723] transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500">
                      <span className="text-[#C99723] font-bold">RAM Guarantee</span>
                      <span>Plainfield, NJ</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Progress Bar at bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
          <div className="w-full bg-neutral-300 h-1.5 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-[#EABC48]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
