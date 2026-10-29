'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import FlipFadeText from './FlipFadeText';
import { COMPANY_INFO } from '@/lib/data';

interface HeroParallaxProps {
  onEstimateClick: () => void;
}

export default function HeroParallax({ onEstimateClick }: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms inspired by osmosupply parallax scrolling
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Parallax Video Background */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={COMPANY_INFO.heroVideo} type="video/mp4" />
        </video>
        {/* Soft cinematic vignette */}
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Hero Content - Centered in all device views */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center pt-24 sm:pt-28"
      >
        {/* Strictly NO eyebrow label! Heading aligned center in all device views */}
        <div className="w-full flex justify-center text-center">
          <FlipFadeText
            text="READY TO TRANSFORM YOUR HOME?"
            as="h1"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight text-center drop-shadow-md max-w-3xl leading-snug justify-center"
          />
        </div>

        {/* Call to action buttons - on mobile in one single line, rounded corner shape */}
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <button
            onClick={onEstimateClick}
            className="flex-1 sm:flex-initial px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#EABC48] hover:bg-[#d8ab3a] text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-center whitespace-nowrap"
          >
            Get Estimate
          </button>
          <Link
            href="/services"
            className="flex-1 sm:flex-initial px-5 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all border border-white/40 shadow-xl hover:scale-105 active:scale-95 text-center whitespace-nowrap flex items-center justify-center gap-1.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </Link>
        </div>
      </motion.div>

      {/* Gentle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none text-[#F8EAA5]/80 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-semibold mb-1">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
}
