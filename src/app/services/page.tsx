"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle, CheckCircle } from "lucide-react";
import PageWrapper from "../../components/layout/PageWrapper";
import Button from "../../components/ui/Button";
import { services } from "../../data/mockData";

export default function Services() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <PageWrapper>
      {/* 1. Header Banner */}
      <section className="relative pt-36 pb-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            Atelier Offerings
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal max-w-3xl leading-tight">
            Specialized Carving &{" "}
            <span className="font-editorial text-gold italic">Engraving Services</span>
          </h1>
        </div>
      </section>

      {/* 2. Services Grid Showcase */}
      <section className="bg-dark py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const isOpen = activeSlug === service.slug;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (idx % 2) * 0.15 }}
                  className="bg-charcoal border border-gold/5 hover:border-gold/15 transition-colors p-8 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Block */}
                    <div className="aspect-video w-full overflow-hidden relative mb-6">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-dark/20" />
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-xl md:text-2xl mb-3 tracking-wide">
                      {service.title}
                    </h2>

                    {/* Short Description */}
                    <p className="text-xs text-cream/70 leading-relaxed font-light mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Expandable Deep Details */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden border-t border-gold/10 pt-4 mt-4 space-y-4"
                        >
                          <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                            {service.description}
                          </p>
                          <div className="space-y-2">
                            <span className="text-[9px] tracking-widest text-gold uppercase block font-semibold">
                              Key Characteristics:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.map((feat) => (
                                <span
                                  key={feat}
                                  className="text-[10px] text-cream/60 flex items-center gap-1.5"
                                >
                                  <CheckCircle className="w-3 h-3 text-gold shrink-0" />
                                  {feat}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center mt-6 border-t border-gold/5 pt-4">
                    <button
                      onClick={() => setActiveSlug(isOpen ? null : service.slug)}
                      className="text-[10px] tracking-widest text-gold uppercase font-bold hover:text-cream transition-colors flex items-center gap-1"
                    >
                      {isOpen ? "Hide Details" : "Read Details"}{" "}
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    <Button href="/contact" variant="outline" className="px-5 py-2 text-[9px] tracking-[0.15em]">
                      Book Order
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Custom Process Information */}
      <section className="bg-charcoal py-32 text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <HelpCircle className="w-8 h-8 text-gold mx-auto" />
          <h2 className="font-serif text-3xl">Have a Unique Object?</h2>
          <p className="text-xs md:text-sm text-cream/70 leading-relaxed font-light max-w-xl mx-auto">
            We regularly personalize client-supplied artifacts like high-end wine bottles, heavy tools, stone tablets, and antique hardware. Contact our master engravers to review sizing tolerances and test stencils.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="gold">
              Consult with our Engraver
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
