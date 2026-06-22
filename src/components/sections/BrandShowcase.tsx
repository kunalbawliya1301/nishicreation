"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Luxury Drinkware",
    description: "Monogrammed wine chalices and custom frosted whiskey sets.",
    image: "/images/wine_glass_luxury.png",
    link: "/gallery?category=wine%20glasses",
  },
  {
    title: "Corporate Recognition",
    description: "3D sandblasted optical crystal plaques and corporate shields.",
    image: "/images/crystal_trophy.png",
    link: "/gallery?category=trophies",
  },
  {
    title: "Artisan Ceramics",
    description: "Colored glazes custom-relief carved to reveal raw porcelain beauty.",
    image: "/images/matte_mugs.png",
    link: "/gallery?category=ceramics",
  },
];

export default function BrandShowcase() {
  return (
    <section className="bg-charcoal py-32 text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Brand Statement / Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start">
          <div className="lg:col-span-4">
            <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug">
              Bespoke Carvings,<br />
              <span className="font-editorial italic text-gold">Eternal Impressions.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-cream/80 text-sm md:text-base leading-relaxed font-light">
              At Nishi Creation, we do not view engraving as a manufacturing line. We treat it as an art form. By leveraging sandblasting and precision sand etching, we carve deep, permanent designs into the finest crystal, glass, and metal—avoiding the brittle fractures of laser engraving.
            </p>
            <p className="text-cream/60 text-xs md:text-sm leading-relaxed font-light max-w-2xl">
              Every curve is hand-finished, every stencil is individually developed, and every piece undergoes multi-stage inspections. Whether honoring an executive milestone or building a wedding heirloom, we create pieces designed to withstand the test of time.
            </p>
          </div>
        </div>

        {/* Featured Categories Grid */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-2">
                Featured Work
              </span>
              <h3 className="font-serif text-2xl md:text-3xl">Curated Categories</h3>
            </div>
            <Link
              href="/gallery"
              className="text-xs tracking-[0.2em] font-semibold uppercase text-gold hover:text-cream transition-colors flex items-center gap-1.5 group"
            >
              View All Work{" "}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group flex flex-col h-full bg-dark/40 border border-gold/5 hover:border-gold/20 transition-all duration-500 overflow-hidden"
              >
                {/* Image Container with Zoom effect */}
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <motion.img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500" />
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div className="mb-6">
                    <h4 className="font-serif text-lg text-cream mb-2 tracking-wide group-hover:text-gold transition-colors duration-300">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-cream/50 leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>
                  <Link
                    href={cat.link}
                    className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold hover:text-cream transition-colors flex items-center gap-1 group/btn"
                  >
                    Browse Collection{" "}
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
