"use client";

import React from "react";
import { Star, ArrowRight } from "lucide-react";
import PageWrapper from "../../components/layout/PageWrapper";
import Button from "../../components/ui/Button";
import { testimonials } from "../../data/mockData";

export default function Testimonials() {
  return (
    <PageWrapper>
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-3">
            Atelier Integrity
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-normal max-w-3xl leading-tight">
            Client Reviews &{" "}
            <span className="font-editorial text-gold italic">Endorsements</span>
          </h1>
        </div>
      </section>

      {/* 2. Client Grid */}
      <section className="bg-dark py-32 text-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-charcoal border border-gold/5 p-8 flex flex-col justify-between"
              >
                {/* Rating & Content */}
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-serif text-base md:text-lg italic text-cream/80 leading-relaxed mb-8">
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-gold/5 pt-4">
                  <h4 className="font-serif text-gold tracking-wide">{test.name}</h4>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest mt-1">
                    {test.role}, <span className="text-cream/60">{test.company}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Standards of Quality Verification Section */}
      <section className="bg-charcoal py-32 text-cream border-t border-gold/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block">
              Quality Inspection Standards
            </span>
            <h2 className="font-serif text-3xl">
              Verification in <span className="font-editorial text-gold italic">Every Stroke</span>
            </h2>
            <p className="text-cream/70 text-xs md:text-sm leading-relaxed font-light">
              To guarantee that every custom gift or corporate award meets high standards, we do not ship items with slight scratches, bubbles, or shallow etching depths. We replace any item that fails our strict multi-stage quality review process immediately, at our own expense.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="outline">
                Speak to Our Team
              </Button>
            </div>
          </div>
          <div className="relative aspect-video w-full overflow-hidden border border-gold/10">
            <img
              src="/images/corporate_gifting.png"
              alt="Artisan checking quality of award packaging"
              className="w-full h-full object-cover grayscale opacity-60"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
