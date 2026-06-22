"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const, // Premium easing
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Parallax & Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero_bg.png')",
          }}
        />
        {/* Subtle radial gradient overlay to draw attention to the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-transparent h-1/3 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark/80 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtle Label */}
          <motion.span
            variants={itemVariants}
            className="text-gold font-sans text-[10px] md:text-xs font-semibold tracking-[0.35em] uppercase mb-6"
          >
            Nishi Creation Atelier
          </motion.span>

          {/* Main Editorial Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-8 text-cream"
          >
            The Art of <span className="font-editorial text-gold italic">Permanence</span>
          </motion.h1>

          {/* Luxury Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-cream/70 max-w-2xl leading-relaxed tracking-wide font-light mb-12"
          >
            We elevate industrial customization into luxury craftsmanship. Bespoke sandblasting, 3D sand etching, and custom-precision engravings for trophies, corporate recognitions, and personal treasures.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button href="/services" variant="gold" className="px-10">
              Explore Our Services
            </Button>
            <Button href="/contact" variant="outline" className="px-10">
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{
          delay: 1.8,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer select-none"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight - 80,
            behavior: "smooth",
          });
        }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">
          Discover The Craft
        </span>
        <ArrowDown className="w-4 h-4 text-gold" />
      </motion.div>
    </section>
  );
}
