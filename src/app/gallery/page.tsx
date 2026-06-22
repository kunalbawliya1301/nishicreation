"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye } from "lucide-react";
import PageWrapper from "../../components/layout/PageWrapper";
import { galleryItems } from "../../data/mockData";

const categories = [
  "All",
  "Mugs",
  "Wine Glasses",
  "Trophies",
  "Corporate Awards",
  "Ceramics",
  "Custom Work",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<(typeof galleryItems)[0] | null>(null);

  // Check URL query parameters for category to deep-link
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      if (catParam) {
        // Convert to matched category name
        const matched = categories.find(
          (c) => c.toLowerCase() === catParam.toLowerCase()
        );
        if (matched) setSelectedCategory(matched);
      }
    }
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <PageWrapper>
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            Atelier Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal max-w-3xl leading-tight">
            The Gallery of{" "}
            <span className="font-editorial text-gold italic">Finished Works</span>
          </h1>
        </div>
      </section>

      {/* 2. Filter Category Controls */}
      <section className="bg-dark pt-20 pb-4 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap gap-3 md:gap-4 justify-center border-b border-gold/10 pb-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 border ${
                  isSelected
                    ? "bg-gold text-dark border-gold"
                    : "bg-transparent text-cream/70 border-gold/10 hover:border-gold/30 hover:text-cream"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Filterable Gallery Grid */}
      <section className="bg-dark pb-32 text-cream min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={item.id}
                  className="group relative flex flex-col bg-charcoal border border-gold/5 overflow-hidden cursor-pointer"
                  onClick={() => setActiveItem(item)}
                >
                  {/* Image wrapper */}
                  <div className="aspect-[4/5] w-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        <Eye className="w-4 h-4 text-dark" />
                      </div>
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="p-5 border-t border-gold/5 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] tracking-[0.2em] uppercase text-gold/80 block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-sm tracking-wide text-cream group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      {item.client && (
                        <span className="text-[9px] text-cream/40 italic block mt-1">
                          {item.client}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-6"
            onClick={() => setActiveItem(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full bg-charcoal border border-gold/15 grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-dark/80 text-cream hover:text-gold transition-colors border border-gold/10 hover:border-gold"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image side */}
              <div className="md:col-span-7 aspect-square md:aspect-auto md:h-[550px] relative overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detail side */}
              <div className="md:col-span-5 p-8 flex flex-col justify-between h-full bg-charcoal">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-gold block mb-2 font-semibold">
                      {activeItem.category}
                    </span>
                    <h2 className="font-serif text-2xl text-cream tracking-wide">
                      {activeItem.title}
                    </h2>
                    {activeItem.client && (
                      <span className="text-[10px] text-cream/40 italic block mt-1.5">
                        Commissioned by {activeItem.client}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-cream/70 leading-relaxed font-light">
                    {activeItem.description}
                  </p>
                </div>

                <div className="border-t border-gold/10 pt-6 mt-8 space-y-3">
                  <span className="text-[9px] tracking-widest text-cream/40 uppercase block">
                    Interested in this craft style?
                  </span>
                  <a
                    href={`/contact?inquiry=${encodeURIComponent(
                      activeItem.title
                    )}`}
                    className="relative inline-flex items-center justify-center w-full px-5 py-3 text-[10px] font-bold tracking-[0.15em] uppercase border border-gold bg-gold text-dark hover:bg-gold-hover hover:border-gold-hover transition-colors"
                  >
                    Inquire About Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
