"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import PageWrapper from "../../components/layout/PageWrapper";
import Button from "../../components/ui/Button";

function ContactContent() {
  const searchParams = useSearchParams();
  const [inquiryName, setInquiryName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "Glass Sandblasting",
    message: "",
  });

  // Pull inquiry name from search params
  useEffect(() => {
    const inquiry = searchParams.get("inquiry");
    if (inquiry) {
      setInquiryName(inquiry);
      setFormData((prev) => ({
        ...prev,
        message: `Hello, I would like to receive pricing and parameter details regarding the custom commission: "${inquiry}".`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real application, you would send this to your API
  };

  return (
    <PageWrapper>
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            Atelier Booking
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal max-w-3xl leading-tight">
            Commence Your{" "}
            <span className="font-editorial text-gold italic">Commission</span>
          </h1>
        </div>
      </section>

      {/* 2. Contact Grid Details / Form */}
      <section className="bg-dark py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Details side */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-light mb-4">
                The Creative Studio
              </h2>
              <p className="text-xs text-cream/60 leading-relaxed font-light">
                Our designers are available for visual review, material tests, and digital vector proofs. Walk-in appointments require advanced scheduling.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-charcoal border border-gold/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-cream/40 uppercase tracking-widest block mb-1">
                    Studio Address
                  </span>
                  <p className="text-xs text-cream/80 leading-relaxed">
                    12, Artisan Industrial Plaza, Crafts District,<br />
                    Mumbai, 400011, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-charcoal border border-gold/15 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-cream/40 uppercase tracking-widest block mb-1">
                    Call Directory
                  </span>
                  <a href="tel:+919876543210" className="text-xs text-cream/80 hover:text-gold transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-charcoal border border-gold/15 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-cream/40 uppercase tracking-widest block mb-1">
                    Email Inquiries
                  </span>
                  <a href="mailto:studio@nishicreation.com" className="text-xs text-cream/80 hover:text-gold transition-colors">
                    studio@nishicreation.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media & WhatsApp CTA */}
            <div className="border-t border-gold/10 pt-8 space-y-6">
              <div>
                <span className="text-[10px] text-cream/40 uppercase tracking-widest block mb-3">
                  Direct Messenger
                </span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark text-[10px] tracking-widest uppercase font-bold hover:bg-gold-hover transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                </a>
              </div>

              <div>
                <span className="text-[10px] text-cream/40 uppercase tracking-widest block mb-3">
                  Find Us Online
                </span>
                <div className="flex space-x-4">
                  <a href="#" className="p-2.5 bg-charcoal border border-gold/10 hover:border-gold hover:text-gold transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 bg-charcoal border border-gold/10 hover:border-gold hover:text-gold transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2.5 bg-charcoal border border-gold/10 hover:border-gold hover:text-gold transition-colors" aria-label="Linkedin">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-7 bg-charcoal border border-gold/5 p-8 md:p-12 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-gold/10 pb-4 mb-4">
                    <h3 className="font-serif text-xl tracking-wide">
                      Commission Brief
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[9px] tracking-widest uppercase text-cream/40 font-semibold">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-dark border border-gold/10 focus:border-gold px-4 py-3 text-xs text-cream focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-[9px] tracking-widest uppercase text-cream/40 font-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-dark border border-gold/10 focus:border-gold px-4 py-3 text-xs text-cream focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="text-[9px] tracking-widest uppercase text-cream/40 font-semibold">Company Name (Optional)</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-dark border border-gold/10 focus:border-gold px-4 py-3 text-xs text-cream focus:outline-none transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="serviceType" className="text-[9px] tracking-widest uppercase text-cream/40 font-semibold">Service Requirement</label>
                      <select
                        name="serviceType"
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="bg-dark border border-gold/10 focus:border-gold px-4 py-3.5 text-xs text-cream focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Glass Sandblasting">Glass Sandblasting</option>
                        <option value="Sand Etching">Sand Etching</option>
                        <option value="Mug Engraving">Mug Engraving</option>
                        <option value="Ceramic Mug Engraving">Ceramic Mug Engraving</option>
                        <option value="Wine Glass Engraving">Wine Glass Engraving</option>
                        <option value="Trophy Customization">Trophy Customization</option>
                        <option value="Corporate Gifting">Corporate Gifting</option>
                        <option value="Custom Bespoke Order">Custom Bespoke Order</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-[9px] tracking-widest uppercase text-cream/40 font-semibold">Project Parameters & Quantities</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-dark border border-gold/10 focus:border-gold px-4 py-3 text-xs text-cream focus:outline-none transition-colors resize-none leading-relaxed"
                      placeholder="Outline dimensions, glass shapes, expected courier delivery dates, and required quantities."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-hover text-dark text-xs tracking-[0.2em] font-bold uppercase transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Brief & Reserve Proof
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-gold">Brief Received</h3>
                  <p className="text-xs text-cream/60 leading-relaxed max-w-sm mx-auto">
                    Thank you, <span className="text-cream">{formData.name}</span>. One of our design coordinators will follow up with pricing models and file upload instructions within 1 business day.
                  </p>
                  <div className="pt-4">
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Submit Another Inquiry
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Placeholder */}
      <section className="bg-charcoal py-20 text-cream border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-widest uppercase text-gold font-bold">Studio Directions</span>
          </div>
          <div className="w-full h-96 bg-dark border border-gold/10 relative overflow-hidden">
            {/* Embedded dark google maps placeholder structure for premium visual consistency */}
            <iframe
              title="Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803716947703!2d72.82299837592471!3d18.995325787121655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8be761c775%3A0xe541c888915b497b!2sHigh%20Street%20Phoenix!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-none opacity-65 grayscale invert"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-cream">
        <span className="font-serif text-xl tracking-widest text-gold mb-4">Nishi Creation</span>
        <span className="text-[10px] uppercase tracking-widest text-cream/40">Loading Atelier Booking...</span>
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
