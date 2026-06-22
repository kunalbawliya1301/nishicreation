"use client";

import React from "react";
import { motion } from "framer-motion";
import { Anchor, ShieldAlert, Sliders, Gem } from "lucide-react";
import PageWrapper from "../../components/layout/PageWrapper";
import Button from "../../components/ui/Button";

export default function About() {
  return (
    <PageWrapper>
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal max-w-3xl leading-tight">
            Elevating Abrasive Engraving Into a{" "}
            <span className="font-editorial text-gold italic">Luxury Medium</span>
          </h1>
        </div>
      </section>

      {/* 2. Brand Story / The Atelier Narrative */}
      <section className="bg-dark py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-light">
              Crafting Legacy Markers
            </h2>
            <p className="text-cream/80 text-xs md:text-sm leading-relaxed font-light">
              Founded in 2011, Nishi Creation was established to counter the rapid mechanization and diminishing quality of the personalization industry. Traditional computerized laser engraving machines burned surfaces, resulting in jagged lines, fractures, and templates that lacked character.
            </p>
            <p className="text-cream/75 text-xs md:text-sm leading-relaxed font-light">
              We took a step backward in technology to move forward in quality. By reviving physical sandblasting—pressurizing aluminum-oxide crystals through photo-chemically constructed stencils—we discovered how to carve deep, tactile ridges and soft, frosted shadows onto curved glass, heavy crystal, and solid brass.
            </p>
            <p className="text-cream/60 text-xs leading-relaxed font-light">
              Today, Nishi Creation functions as a high-end personalization atelier. We collaborate with national sports organizations, luxury hospitality events, and premium corporate offices, delivering custom items that carry emotional weight and stand as permanent markers of success.
            </p>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 bg-charcoal border border-gold/5 p-8 md:p-10 space-y-8">
            <h3 className="font-serif text-xl text-gold border-b border-gold/10 pb-4">
              Atelier Metrics
            </h3>
            <div className="space-y-6">
              <div>
                <span className="font-serif text-3xl text-cream block mb-1">15+ Years</span>
                <span className="text-[9px] tracking-widest text-cream/40 uppercase">
                  Of Combined Craft Experience
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-cream block mb-1">50,000+ Items</span>
                <span className="text-[9px] tracking-widest text-cream/40 uppercase">
                  Etched with Flawless Precision
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-cream block mb-1">100% Custom</span>
                <span className="text-[9px] tracking-widest text-cream/40 uppercase">
                  Vector Artwork Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Materials & Standards */}
      <section className="bg-charcoal py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-2">
              Our Materials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl">
              Strict Standards, <span className="font-editorial text-gold italic">No Placeholders</span>
            </h2>
            <p className="text-xs text-cream/50 mt-4 leading-relaxed font-light">
              The quality of an engraving is only as good as the material underneath it. We refuse to etch low-quality blanks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <Gem className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl">Optical Crystal</h3>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                Completely lead-free, optically pure silica crystal that offers maximum transparency and refractive index. Our trophies do not exhibit green tints or inclusions.
              </p>
            </div>

            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <Sliders className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl">Tactile Glass Glazes</h3>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                Our ceramics feature thick, double-fired glazes. This allows our abrasives to carve deep glazes, exposing the raw contrasting colors beneath without fracturing the cup structure.
              </p>
            </div>

            <div className="p-8 bg-dark border border-gold/5 space-y-4">
              <Anchor className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl">C360 Brass & Steel</h3>
              <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                Premium architectural-grade C360 solid brass and stainless steel plates. We do not use thin metallic films that flake off over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contrast Comparison Banner */}
      <section className="bg-dark py-32 text-cream border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-video w-full overflow-hidden border border-gold/10">
            <img
              src="/images/custom_order.png"
              alt="Artisan at work"
              className="w-full h-full object-cover grayscale opacity-60"
            />
          </div>
          <div className="space-y-6">
            <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block">
              The Quality Benchmark
            </span>
            <h2 className="font-serif text-3xl">
              Can You Feel <span className="font-editorial text-gold italic">The Depth?</span>
            </h2>
            <p className="text-cream/70 text-xs md:text-sm leading-relaxed font-light">
              Run your finger across a laser-engraved glass, and you will feel thin, jagged, scratching textures. Run it across a Nishi Creation sandblasted glass, and you will feel a smooth, deep, sculpted groove that mirrors the touch of hand-blown crystal.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="gold">
                Initiate Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
