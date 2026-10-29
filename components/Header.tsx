'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-[#EABC48]/20 py-2.5'
          : 'bg-transparent border-transparent py-4 sm:py-6 shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo container */}
          <Link href="/" className="inline-flex items-center gap-3 group">
            {/* Logo: 2x larger in transparent header (h-20 sm:h-24) vs scrolled (h-10 sm:h-12) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={COMPANY_INFO.logoUrl}
              alt="RAM Fencing & Home Improvement"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled
                  ? 'h-10 sm:h-12'
                  : 'h-20 sm:h-24 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]'
              }`}
            />

            {/* Add company name in the glassmorphism header only */}
            {scrolled && (
              <div className="flex flex-col transition-opacity duration-300 animate-fadeIn">
                <span className="font-extrabold text-white text-xs sm:text-sm md:text-base tracking-tight leading-tight">
                  RAM Fencing & Home Improvement
                </span>
                <span className="text-[10px] text-[#F8EAA5] font-medium hidden sm:inline">
                  Plainfield, New Jersey
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold transition-all rounded-full ${
                    isActive
                      ? 'text-[#F8EAA5] bg-white/10 font-bold'
                      : 'text-white/90 hover:text-[#EABC48] hover:bg-black/20'
                  } ${!scrolled ? 'drop-shadow-sm' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button (Estimate button removed) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full focus:outline-none transition-colors ${
                scrolled
                  ? 'text-[#F8EAA5] hover:text-white hover:bg-neutral-800'
                  : 'text-white bg-black/40 backdrop-blur-sm hover:bg-black/60'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#EABC48]/30 px-5 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#EABC48]/20 text-[#F8EAA5]'
                      : 'text-neutral-200 hover:text-[#EABC48]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-neutral-800">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-neutral-900 text-neutral-300 hover:text-white text-xs font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#EABC48]" />
              Call {COMPANY_INFO.displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
