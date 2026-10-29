'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Expand,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/data';
import FlipFadeText from '@/components/FlipFadeText';
import StaggerText from '@/components/StaggerText';
import Portal from '@/components/Portal';

type Dims = { w: number; h: number };

const MIN_SCALE = 1;
const MAX_SCALE = 5;

export default function GalleryPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [dims, setDims] = useState<Dims | null>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const isActive = activeIdx !== null;
  const activeImage = isActive ? GALLERY_IMAGES[activeIdx] : null;

  const openLightbox = (index: number) => setActiveIdx(index);
  const closeLightbox = () => setActiveIdx(null);

  const nextImage = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % GALLERY_IMAGES.length);
  }, [activeIdx]);

  const prevImage = useCallback(() => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [activeIdx]);

  // Reset + measure whenever the visible image changes so the frame can be
  // sized to the photo's real aspect ratio (nothing gets cropped).
  useEffect(() => {
    if (activeIdx === null) return;
    setDims(null);
    setScale(1);
    setOffset({ x: 0, y: 0 });

    const src = GALLERY_IMAGES[activeIdx].url;
    const probe = new window.Image();
    probe.decoding = 'async';
    probe.src = src;
    const apply = () => {
      if (probe.naturalWidth && probe.naturalHeight) {
        setDims({ w: probe.naturalWidth, h: probe.naturalHeight });
      }
    };
    probe.onload = apply;
    if (probe.complete) apply();

    // Preload neighbours for instant navigation
    const preload = (i: number) => {
      const img = new window.Image();
      img.src = GALLERY_IMAGES[i].url;
    };
    preload((activeIdx + 1) % GALLERY_IMAGES.length);
    preload((activeIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

    return () => {
      probe.onload = null;
    };
  }, [activeIdx]);

  // Lock page scroll and hide the site header while the lightbox is open,
  // so nothing sits on top of the lightbox's own controls.
  useEffect(() => {
    if (!isActive) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('overlay-open');
    return () => {
      document.body.style.overflow = previous;
      document.body.classList.remove('overlay-open');
    };
  }, [isActive]);

  // Keyboard controls
  useEffect(() => {
    if (!isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === '+' || e.key === '=') setScale((s) => Math.min(MAX_SCALE, s + 0.5));
      else if (e.key === '-') setScale((s) => Math.max(MIN_SCALE, s - 0.5));
      else if (e.key === '0' || e.key.toLowerCase() === 'f') {
        setScale(1);
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isActive, nextImage, prevImage]);

  // Keep the zoomed image inside the viewport so it can never be lost off-screen
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const maxX = Math.max(0, (frame.offsetWidth * scale - window.innerWidth) / 2);
    const maxY = Math.max(0, (frame.offsetHeight * scale - window.innerHeight) / 2);
    setOffset((o) => ({
      x: Math.min(maxX, Math.max(-maxX, o.x)),
      y: Math.min(maxY, Math.max(-maxY, o.y)),
    }));
  }, [scale]);

  const toggleZoom = () => {
    if (scale > MIN_SCALE) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= MIN_SCALE) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = { px: e.clientX, py: e.clientY, ox: offset.x, oy: offset.y };
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const d = dragStart.current;
    setOffset({ x: d.ox + (e.clientX - d.px), y: d.oy + (e.clientY - d.py) });
  };

  const endDrag = () => {
    dragStart.current = null;
    setIsDragging(false);
  };

  // Frame sized from the photo's true ratio: always shows 100% of the image,
  // as large as the screen allows.
  const ratio = dims ? dims.w / dims.h : 3 / 4;
  const frameStyle = {
    width: `min(94vw, calc(84vh * ${ratio}))`,
    height: `min(84vh, calc(94vw / ${ratio}))`,
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F2F1EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Main Heading & Subheading: NO eyebrow label! NO subsections! */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <FlipFadeText
            text="See our recent work"
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight"
          />
          {/* Subheading included as requested */}
          <StaggerText
            text="A showcase of real residential projects completed across New Jersey, highlighting our dedication to fine craftsmanship and lasting beauty."
            className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed"
          />
        </div>

        {/* Gallery Grid: 3 images in one row on mobile, 4-5 on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-300/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                priority={index < 5}
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-center justify-center gap-2 p-2">
                <div className="w-8 h-8 rounded-full bg-[#EABC48] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View full photo
                </span>
              </div>

              {/* Gold border accent on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#EABC48] rounded-xl sm:rounded-2xl transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal — portaled to <body> so the fixed header can never
          land on top of the lightbox controls (see components/Portal.tsx) */}
      <Portal>
      <AnimatePresence>
        {isActive && activeImage && (
          <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/92 backdrop-blur-md overflow-hidden">
            {/* Click anywhere on the dark area to close */}
            <div className="absolute inset-0 z-0 cursor-zoom-out" onClick={closeLightbox} aria-hidden="true" />

            {/* Top bar: counter + close */}
            <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4">
              <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md">
                {activeIdx + 1} / {GALLERY_IMAGES.length} &bull; {activeImage.title}
                {dims ? ` • ${dims.w}×${dims.h}px • shown 100%` : ''}
              </div>
              <button
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#EABC48] hover:text-black text-white flex items-center justify-center transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Zoomable / pannable stage */}
            <div
              ref={frameRef}
              onClick={(e) => e.stopPropagation()}
              onDoubleClick={toggleZoom}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              className="relative z-10 flex items-center justify-center select-none touch-none"
              style={{
                ...frameStyle,
                transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.25s ease-out',
                cursor: scale > MIN_SCALE ? 'grab' : 'zoom-in',
              }}
            >
              {!dims && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-[#EABC48] animate-spin" />
                </div>
              )}
              <Image
                src={activeImage.url}
                alt={activeImage.title}
                fill
                priority
                sizes="(max-width: 768px) 94vw, 94vw"
                className={`object-contain rounded-lg ${dims ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
                draggable={false}
              />
            </div>

            {/* Side navigation */}
            <button
              onClick={prevImage}
              className="absolute left-3 sm:left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 sm:right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom toolbar */}
            <div className="absolute bottom-0 inset-x-0 z-20 flex justify-center px-4 py-4">
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-full bg-black/70 border border-[#EABC48]/40 backdrop-blur-md shadow-lg">
                <button
                  onClick={() => setScale((s) => Math.max(MIN_SCALE, +(s - 0.5).toFixed(2)))}
                  disabled={scale <= MIN_SCALE}
                  className="w-9 h-9 rounded-full text-white hover:bg-white/15 disabled:opacity-35 disabled:hover:bg-transparent flex items-center justify-center transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="w-14 text-center text-white text-xs font-bold tabular-nums">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={() => setScale((s) => Math.min(MAX_SCALE, +(s + 0.5).toFixed(2)))}
                  disabled={scale >= MAX_SCALE}
                  className="w-9 h-9 rounded-full text-white hover:bg-white/15 disabled:opacity-35 disabled:hover:bg-transparent flex items-center justify-center transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setScale(1);
                    setOffset({ x: 0, y: 0 });
                  }}
                  className="w-9 h-9 rounded-full text-white hover:bg-white/15 flex items-center justify-center transition-colors"
                  aria-label="Fit whole image on screen"
                  title="Fit whole image"
                >
                  <Expand className="w-4 h-4" />
                </button>
                <a
                  href={activeImage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 px-3 rounded-full text-white hover:bg-white/15 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
                  title="Open the original full-size photo"
                >
                  <ExternalLink className="w-4 h-4" />
                  Original
                </a>
                <span className="hidden sm:block pl-2 text-[11px] text-white/60">
                  {scale > MIN_SCALE ? 'Drag to pan • Esc close • ← → browse' : 'Double-click to zoom • Esc close • ← → browse'}
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
      </Portal>
    </div>
  );
}
