"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Eye, Award, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Artistic Consultation",
    description: "Collaborate with our designers to choose materials, size profiles, and outline your personalization goals.",
    icon: Coffee,
  },
  {
    number: "02",
    title: "Digital Design Approval",
    description: "Receive high-resolution vector proofs of your layouts. Nothing goes to print without your written confirmation.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Precision Engraving",
    description: "We print film negatives, construct photo-resist stencils, and perform micro-sandblasting in our studio.",
    icon: Award,
  },
  {
    number: "04",
    title: "Quality Inspection",
    description: "Every item is hand washed, cleared of stencil residues, and inspected under high-intensity task lighting.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Secure Delivery",
    description: "Your commissions are tissue-wrapped and boxed in custom gold foil presentation packaging before dispatch.",
    icon: Truck,
  },
];

export default function Timeline() {
  return (
    <section className="bg-charcoal py-32 text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Header */}
        <div className="mb-20">
          <span className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase block mb-2">
            The Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal">
            From Design to <span className="font-editorial text-gold italic">Permanence</span>
          </h2>
          <p className="text-xs text-cream/40 max-w-md mt-4 font-light leading-relaxed">
            Our structured multi-phase pipeline ensures flawless, repeatable results for single custom keepsakes or large corporate distributions.
          </p>
        </div>

        {/* Timeline Desktop Grid / Mobile Stack */}
        <div className="relative">
          {/* Progress Connecting Line for Desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold/10 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="bg-dark border border-gold/5 p-8 flex flex-col justify-between h-full group hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Number and Icon */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-serif text-3xl text-gold/30 group-hover:text-gold transition-colors duration-300">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 bg-charcoal border border-gold/10 group-hover:border-gold/30 flex items-center justify-center transition-colors">
                        <StepIcon className="w-4 h-4 text-gold" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-lg text-cream mb-3 font-medium tracking-wide">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-[11px] text-cream/50 leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
