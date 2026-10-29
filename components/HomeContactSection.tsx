'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '@/lib/data';
import FlipFadeText from './FlipFadeText';
import StaggerText from './StaggerText';

export default function HomeContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Kitchen Remodeling',
    address: '',
    zip: '07060',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Sticky still background image - NO dark fade as specified */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{
          backgroundImage: `url('${COMPANY_INFO.contactStickyBg}')`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#EABC48]/40 shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left info column (5 cols) - location and operating hours removed */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                {/* Strictly NO eyebrow label! */}
                <FlipFadeText
                  text="Get In Touch With Our Craftsmen"
                  as="h2"
                  className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight"
                />
                <StaggerText
                  text="Ready to discuss your home renovation, fencing, deck, or roofing project? Reach out today for dependable guidance and a prompt on-site estimate."
                  className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed"
                />
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-[#EABC48] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-neutral-500">
                      Direct Phone
                    </span>
                    <span className="text-sm font-bold text-black group-hover:text-[#C99723]">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-[#EABC48] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-neutral-500">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-black group-hover:text-[#C99723] break-all">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right form column (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EABC48]/20 text-[#C99723] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Thank You!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Your request has been submitted to RAM Fencing & Home Improvement. We will contact you at{' '}
                    <span className="font-bold text-black">{formState.phone}</span> shortly to coordinate your consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-black text-[#F8EAA5] hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(908) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
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
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Service Needed *
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
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
                        Project Street Address
                      </label>
                      <input
                        type="text"
                        value={formState.address}
                        onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                        placeholder="123 Front St"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        value={formState.zip}
                        onChange={(e) => setFormState({ ...formState, zip: e.target.value })}
                        placeholder="07060"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us what you are looking to build or renovate..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#EABC48] hover:bg-[#d8ab3a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.01]"
                  >
                    <span>Request Free Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
