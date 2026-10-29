'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeight();

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && footerRef.current) {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(footerRef.current);
    }

    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    /* Efferd sticky footer with dynamic height container to prevent mobile cropping */
    <div
      className="relative w-full"
      style={{
        height: footerHeight > 0 ? `${footerHeight}px` : 'auto',
        minHeight: '400px',
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div
        className="fixed bottom-0 left-0 w-full z-0"
        style={{
          height: footerHeight > 0 ? `${footerHeight}px` : 'auto',
        }}
      >
        <footer
          ref={footerRef}
          className="relative w-full bg-black text-[#F2F1EF] border-t border-[#EABC48]/30 overflow-hidden flex flex-col justify-between pt-8 sm:pt-12 pb-8 sm:pb-10"
        >
          {/* Subtle gold glow accents */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#EABC48]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F8EAA5]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Top row: Brand & Contacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start md:items-center mb-8">
              {/* Brand, Logo & Required Subtext */}
              <div className="space-y-3 sm:space-y-4">
                <Link href="/" className="inline-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt={COMPANY_INFO.name}
                    className="h-14 sm:h-18 w-auto object-contain"
                  />
                </Link>
                <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                  {COMPANY_INFO.name}
                </h3>
                {/* Required exact subtext */}
                <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed max-w-lg">
                  we combine skilled craftsmanship, attention to detail, and dependable service to bring your vision to life.
                </p>
              </div>

              {/* Direct Contact Points */}
              <div className="space-y-3 md:text-right">
                <div className="inline-flex flex-col md:items-end space-y-2.5 text-xs sm:text-sm text-neutral-300">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center md:flex-row-reverse gap-2.5 hover:text-[#EABC48] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#EABC48] shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block font-bold text-white text-sm sm:text-base">
                        {COMPANY_INFO.phone}
                      </span>
                      <span className="text-[10px] text-neutral-400">Direct Contractor Line</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center md:flex-row-reverse gap-2.5 hover:text-[#EABC48] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#EABC48] shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-300 break-all">
                      {COMPANY_INFO.email}
                    </span>
                  </a>

                  <div className="flex items-center md:flex-row-reverse gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#EABC48] shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-300">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials & Bottom bar */}
            <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Socials */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] text-neutral-400 font-medium">Follow Us:</span>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#EABC48] hover:border-[#EABC48] transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#EABC48] hover:border-[#EABC48] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#EABC48] hover:border-[#EABC48] transition-colors"
                >
                  <TiktokIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-[#EABC48] hover:border-[#EABC48] transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-[11px] text-neutral-400 text-center sm:text-right">
                &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Licensed & Insured in New Jersey.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
