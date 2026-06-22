"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Cpu, Anchor } from "lucide-react";

export default function CraftStory() {
  return (
    <section className="bg-dark py-32 text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            The Atelier Process
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal mb-6">
            Craftsmanship Meets <span className="font-editorial text-gold italic">Precision</span>
          </h2>
          <p className="text-xs md:text-sm text-cream/60 leading-relaxed font-light">
            We reject the shortcuts of modern lasers that burn materials. We embrace abrasive sand carving that respects the crystalline integrity of glass and the cold steel of metal.
          </p>
        </div>

        {/* Alternating Story Grid */}
        <div className="space-y-28">
          {/* Story Item 1: The Sandblasting Difference */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5" /> High-Pressure Abrasives
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Why We Choose Sand Carving
              </h3>
              <p className="text-cream/80 text-xs md:text-sm leading-relaxed font-light">
                Laser engraving uses heat to shock glass, resulting in micro-fractures, sharp edges, and a superficial white dust look. Our sandblasting process applies pressurized aluminum-oxide crystals to physically carve away the surface. The result is a smooth, satiny, deep channel that is completely dishwasher-safe and pleasant to touch.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "No micro-fracturing or glass stress",
                  "Smoothed, rounded satin borders",
                  "Variable depth controls (up to 2.5mm)",
                  "Eternal durability that never fades or stains",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-xs text-cream/70">
                    <span className="w-4 h-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-gold" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2 }}
                className="aspect-video lg:aspect-[4/3] w-full bg-charcoal border border-gold/10 overflow-hidden"
              >
                <img
                  src="/images/sommelier_glasses.png"
                  alt="Glass sandblasting detail"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Story Item 2: Optical Crystal Depth */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <span className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Photographic Stenciling
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-light">
                Micro-Precision Stencils
              </h3>
              <p className="text-cream/80 text-xs md:text-sm leading-relaxed font-light">
                To capture complex corporate logos, crests, and elaborate typography, we develop high-definition photographic stencils. Our stencils block the abrasive particles down to 100 microns of detail, allowing us to carve delicate scripts, clean hairlines, and solid vectors with mathematical exactness.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="p-4 bg-charcoal border border-gold/5">
                  <span className="font-serif text-2xl text-gold block mb-1">100μm</span>
                  <span className="text-[10px] text-cream/40 uppercase tracking-widest">
                    Detail Resolution
                  </span>
                </div>
                <div className="p-4 bg-charcoal border border-gold/5">
                  <span className="font-serif text-2xl text-gold block mb-1">100%</span>
                  <span className="text-[10px] text-cream/40 uppercase tracking-widest">
                    Hand-Inspected
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2 }}
                className="aspect-video lg:aspect-[4/3] w-full bg-charcoal border border-gold/10 overflow-hidden"
              >
                <img
                  src="/images/crystal_trophy.png"
                  alt="Optical crystal stencil details"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
