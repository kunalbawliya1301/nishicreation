"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Add background blur/solid transition when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation drawer when path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-dark/80 backdrop-blur-md border-b border-gold/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="relative z-50 flex flex-col group">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-[0.25em] uppercase text-cream group-hover:text-gold transition-colors duration-300">
            Nishi Creation
          </span>
          <span className="text-[0.55rem] tracking-[0.45em] uppercase text-gold/80 ml-[0.2em] font-sans">
            Crafting Permanence
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-gold"
                    : "text-cream/75 hover:text-gold hover-gold-line"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/contact" variant="outline" className="px-6 py-2.5 text-[10px]">
            Inquire Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-cream hover:text-gold transition-colors"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-serif text-2xl tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive ? "text-gold italic" : "text-cream hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6">
            <Button
              href="/contact"
              variant="gold"
              className="w-full max-w-[280px]"
            >
              Inquire Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
