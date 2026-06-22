"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Award, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";
import PageWrapper from "../components/layout/PageWrapper";
import Hero from "../components/sections/Hero";
import BrandShowcase from "../components/sections/BrandShowcase";
import CraftStory from "../components/sections/CraftStory";
import Timeline from "../components/sections/Timeline";
import Button from "../components/ui/Button";
import { galleryItems, testimonials } from "../data/mockData";

export default function Home() {
  // Take first 3 gallery items for the preview section
  const previewItems = galleryItems.slice(0, 3);

  return (
    <PageWrapper>
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Brand statement and featured categories */}
      <BrandShowcase />

      {/* 3. Our Craft storytelling */}
      <CraftStory />

      {/* 4. Process timeline */}
      <Timeline />

      {/* 5. Premium Gallery Preview */}
      <section className="bg-dark py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-2">
                Portfolio Preview
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal">
                Crafted for <span className="font-editorial text-gold italic">Distinction</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs tracking-[0.2em] font-semibold uppercase text-gold hover:text-cream transition-colors flex items-center gap-1.5 mt-4 md:mt-0 group"
            >
              Browse The Full Gallery{" "}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          {/* 3-column elegant layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group flex flex-col h-full bg-charcoal border border-gold/5 overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/20" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-gold/80 block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-cream mb-1">
                      {item.title}
                    </h3>
                    {item.client && (
                      <span className="text-[10px] text-cream/40 italic block mb-3">
                        {item.client}
                      </span>
                    )}
                    <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="bg-charcoal py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block">
              Atelier Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight">
              The Standards of <span className="font-editorial text-gold italic">Exclusivity</span>
            </h2>
            <p className="text-cream/75 text-xs md:text-sm leading-relaxed font-light">
              Unlike industrial manufacturers, we treat every order as a signature work of art. We source only high-purity optical crystal, thick borosilicate glazes, and heavy metal plates.
            </p>
            <div className="pt-4">
              <Button href="/about" variant="outline">
                Learn About Our Standards
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                <Award className="w-4 h-4 text-gold" />
              </div>
              <h4 className="font-serif text-lg">Indestructible Frost</h4>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                Our designs are deep-blasted physically into the core structure, ensuring they can withstand decades of washing without degrading.
              </p>
            </div>

            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                <ShieldCheck className="w-4 h-4 text-gold" />
              </div>
              <h4 className="font-serif text-lg">Flawless Tolerances</h4>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                With photographic film stenciling, we map vectors at micro-resolutions, ensuring zero distortion on logos, margins, and curves.
              </p>
            </div>

            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                <Heart className="w-4 h-4 text-gold" />
              </div>
              <h4 className="font-serif text-lg">Artistic Integrity</h4>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                Every engraving layout is reviewed by our creative directors. We optimize scales, margins, and fonts to match luxury branding codes.
              </p>
            </div>

            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                <Sparkles className="w-4 h-4 text-gold" />
              </div>
              <h4 className="font-serif text-lg">Presentation Packaging</h4>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                Every trophy and decanter set is delivered in our signature textured gold-embossed boxes, creating a premium unboxing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Editorial Testimonials */}
      <section className="bg-dark py-32 text-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            Client Endorsements
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-16">
            Words of <span className="font-editorial text-gold italic">Permanence</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {testimonials.slice(0, 2).map((test) => (
              <div
                key={test.id}
                className="p-10 bg-charcoal border border-gold/5 flex flex-col justify-between"
              >
                <p className="font-serif text-base md:text-lg italic text-cream/80 leading-relaxed mb-8">
                  &ldquo;{test.content}&rdquo;
                </p>
                <div>
                  <h4 className="font-serif text-gold tracking-wide">{test.name}</h4>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mt-1">
                    {test.role}, {test.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final Conversion CTA */}
      <section className="bg-charcoal py-36 text-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block">
            Commence Your Project
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight">
            Let's Carve Something <br />
            <span className="font-editorial text-gold italic">Unforgettable.</span>
          </h2>
          <p className="text-xs md:text-sm text-cream/60 max-w-lg mx-auto leading-relaxed font-light">
            Contact our designers to review catalog options, custom glassware dimensions, vector logo templates, or request a bespoke quote.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-5">
            <Button href="/contact" variant="gold" className="px-10">
              Inquire Now
            </Button>
            <Button href="/gallery" variant="outline" className="px-10">
              Browse Custom Works
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
