'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Star } from 'lucide-react';
import { COMPANY_INFO, ALL_SERVICES } from '@/lib/data';
import FlipFadeText from '@/components/FlipFadeText';
import StaggerText from '@/components/StaggerText';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Kitchen Remodeling',
    address: '',
    zip: '07060',
    preferredTime: 'Morning',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F2F1EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading & Subtext: Strictly NO eyebrow label! */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <FlipFadeText
            text="Get an instant quote"
            as="h1"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight"
          />
          {/* Little sub text as requested */}
          <StaggerText
            text="Tell us about your project or renovation goals. We will provide an upfront, transparent estimate tailored specifically to your home."
            className="mt-3 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed"
          />
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left: Contact Info & Value Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black text-[#F2F1EF] rounded-3xl p-6 sm:p-8 border border-[#EABC48]/30 shadow-xl space-y-5">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Licensed and fully insured contractor based in Plainfield, NJ, specializing in custom home transformations, kitchen & bath remodeling, decks, roofing, and fencing.
              </p>

              <div className="pt-2 space-y-3.5 text-xs sm:text-sm">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#EABC48] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EABC48] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-neutral-400">Call Direct</span>
                    <span className="font-bold text-white">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#EABC48] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#EABC48] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-neutral-400">Email Us</span>
                    <span className="font-bold text-white break-all text-xs">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <MapPin className="w-4 h-4 text-[#EABC48] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-neutral-400">Location</span>
                    <span className="font-bold text-white text-xs">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
                  <Clock className="w-4 h-4 text-[#EABC48] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-semibold text-neutral-400">Working Hours</span>
                    <span className="font-bold text-white text-xs">Mon – Sat: 7:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* 5-star review trust badge */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex text-[#EABC48]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#F8EAA5]">
                  5 Star Verified ({COMPANY_INFO.reviewsCount} Reviews)
                </span>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-neutral-200/80 shadow-md space-y-2 text-xs text-neutral-700">
              <div className="flex items-center gap-2 font-semibold text-black">
                <ShieldCheck className="w-4 h-4 text-[#C99723]" />
                <span>Zero Obligation Estimates</span>
              </div>
              <p className="text-neutral-500 text-[11px] leading-relaxed">
                We respect your time. Our project lead will review your submission and reply with honest scheduling and realistic budget guidance.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EABC48]/20 text-[#C99723] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Your Instant Quote Request is In!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-black">{formData.name}</span>. We have logged your request for{' '}
                  <span className="font-semibold text-black">{formData.service}</span> in{' '}
                  <span className="font-semibold text-black">{formData.address || 'New Jersey'}</span>. We will call you at{' '}
                  <span className="font-bold text-black">{formData.phone}</span> shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="px-6 py-3 rounded-full bg-black text-[#F8EAA5] hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Call Directly Now
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-[#EABC48] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#d8ab3a] transition-all"
                  >
                    Submit Another Inquiry
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
                      placeholder="Jane Doe"
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(908) 555-0199"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Service Requested *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                      Project Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. 450 Mountain Ave, Plainfield"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      placeholder="07060"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Describe Your Vision or Scope
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the remodel, materials preferred, dimensions, or timeline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#EABC48] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#EABC48] hover:bg-[#d8ab3a] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-99"
                >
                  <span>Submit Instant Quote Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Live Google Map Section */}
        <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xl">
          <div className="p-6 sm:p-8 border-b border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-black">
                Our Service Headquarters in Plainfield, NJ
              </h2>
              <p className="text-xs text-neutral-600 mt-1">
                Centrally located to dispatch renovation crews promptly across New Jersey.
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-black text-[#F8EAA5] hover:bg-neutral-800 text-xs font-bold transition-all whitespace-nowrap"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="w-full h-[400px] sm:h-[480px]">
            <iframe
              title="RAM Fencing Live Map Plainfield NJ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48479.52909403079!2d-74.45347209741916!3d40.61869818816823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b0fce09696ab%3A0xb7c8fa172cfd864b!2sPlainfield%2C%20NJ%2007060!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
