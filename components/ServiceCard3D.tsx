'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ServiceItem } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

interface ServiceCard3DProps {
  service: ServiceItem;
  onEstimateClick: (serviceName: string) => void;
}

export default function ServiceCard3D({ service, onEstimateClick }: ServiceCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full h-full"
    >
      <div
        className="relative h-full flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group preserve-3d"
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        {/* Subtle gold accent border glow */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-[#EABC48]/60 transition-colors pointer-events-none z-20" />

        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
            referrerPolicy="no-referrer"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between bg-white">
          <div>
            <h3 className="text-xs sm:text-base font-bold text-black group-hover:text-[#C99723] transition-colors line-clamp-1">
              {service.name}
            </h3>
            <p className="mt-1 text-[10px] sm:text-xs text-neutral-600 line-clamp-2 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Rounded Get Estimate Button */}
          <div className="pt-3 sm:pt-4">
            <button
              onClick={() => onEstimateClick(service.name)}
              className="w-full py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-full bg-black hover:bg-[#EABC48] text-[#F8EAA5] hover:text-black font-semibold text-[10px] sm:text-xs tracking-tight transition-all duration-300 flex items-center justify-center gap-1 shadow-sm"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
