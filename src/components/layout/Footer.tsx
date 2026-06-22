import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-gold/10 pt-24 pb-12 text-cream/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        {/* Brand Block */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-[0.25em] uppercase text-cream">
              Nishi Creation
            </span>
            <span className="text-[0.6rem] tracking-[0.45em] uppercase text-gold/80 ml-[0.2em] font-sans font-medium">
              Precision Personalization
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-cream/50 max-w-sm">
            Crafting permanent memories on glass, ceramic, crystal, and metal. We blend advanced sandblasting craftsmanship with high-fidelity detailing for discerning corporate and private clients.
          </p>
        </div>

        {/* Sitemap Block */}
        <div className="md:col-span-2 flex flex-col space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold">
            Explore
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                About The Craft
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold transition-colors">
                The Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Block */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold">
            The Studio
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed text-cream/60">
                12, Artisan Industrial Plaza,<br />
                Crafts District, Mumbai, India
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+919876543210" className="hover:text-gold transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a
                href="mailto:studio@nishicreation.com"
                className="hover:text-gold transition-colors"
              >
                studio@nishicreation.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-gold shrink-0" />
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors inline-flex items-center gap-1"
              >
                Direct WhatsApp <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Updates Block */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          <h4 className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold">
            Journal Updates
          </h4>
          <p className="text-xs text-cream/50 leading-relaxed">
            Subscribe to receive notices on limited custom runs and technical craftsmanship publications.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
            <div className="relative border-b border-gold/20 hover:border-gold transition-colors py-1">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-none text-cream text-[10px] tracking-widest uppercase focus:outline-none w-full pr-10"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1 text-gold hover:text-cream transition-colors text-xs font-semibold"
                aria-label="Subscribe"
              >
                JOIN
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-cream/40 space-y-4 md:space-y-0">
        <p>&copy; {currentYear} NISHI CREATION. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gold transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Terms of Craft
          </a>
        </div>
      </div>
    </footer>
  );
}
