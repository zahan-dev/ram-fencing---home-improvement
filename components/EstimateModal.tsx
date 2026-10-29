'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '@/lib/data';
import Portal from '@/components/Portal';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function EstimateModal({
  isOpen,
  onClose,
  defaultService = '',
}: EstimateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Kitchen Remodeling',
    address: '',
    zip: '07060',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  // Lock page scroll and hide the site header while the dialog is open
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('overlay-open');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('overlay-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  // Portaled to <body>: `<main>` creates a stacking context, so a fixed overlay
  // rendered inside it would sit under the z-50 header and its close button
  // would not be clickable. (see components/Portal.tsx)
  return (
    <Portal>
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative w-full max-w-xl bg-[#F2F1EF] text-black rounded-3xl shadow-2xl border border-[#EABC48]/30 overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-black text-[#F2F1EF] px-6 py-5 flex items-center justify-between border-b border-[#EABC48]/30">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt={COMPANY_INFO.name}
                  className="w-9 h-9 object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    Request an Estimate
                  </h3>
                  <p className="text-xs text-[#F8EAA5]">
                    Plainfield, NJ & All Surrounding Areas
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EABC48]/20 text-[#C99723] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-black">
                    Estimate Request Received!
                  </h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-black">{formData.name}</span>. Our specialist at RAM Fencing & Home Improvement will review your details and call you back at{' '}
                    <span className="font-semibold text-black">{formData.phone}</span> within 1-2 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-[#F8EAA5] hover:bg-neutral-800 font-semibold text-sm transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#EABC48]" />
                      Call Direct {COMPANY_INFO.displayPhone}
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full bg-[#EABC48] text-black font-semibold text-sm hover:bg-[#d8ab3a] transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(908) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      >
                        {ALL_SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Property Address
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="123 Main St, Plainfield"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        placeholder="07060"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Project Notes / Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe what you would like to remodel or construct..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#EABC48] hover:bg-[#d8ab3a] text-black font-bold text-sm tracking-wide uppercase transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Send Estimate Request
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#EABC48]" /> Plainfield, NJ 07060
                    </span>
                    <span>No obligation &middot; Free on-site consultation</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </Portal>
  );
}
