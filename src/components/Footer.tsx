"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import ScrollLink from "./ScrollLink";
import { MasiGridPattern } from "./MasiPatterns";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "House Cleaning",
    "Deep Cleaning",
    "Floor Washing",
    "Babysitting",
    "House Sitting",
    "Blooming Flowers",
  ];

  return (
    <footer className="bg-earth-deep text-white relative overflow-hidden">
      {/* Masi Pattern Overlay */}
      <MasiGridPattern opacity={0.05} color="#FFFFFF" />

      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-terracotta to-gold" />

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-primary/30">
                <Image
                  src="/logo.jpg"
                  alt="Maid In Suva Logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <span className="text-xl font-serif font-semibold">Maid In Suva</span>
                <p className="text-xs text-gold font-medium">100% Fijian Owned</p>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Premium cleaning and housekeeping services in Suva, Fiji.
              Experience 5-star resort quality in your own home.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/maidinsuva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <ScrollLink
                    href="#services"
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {service}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Suva, Fiji</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+6799926768" className="text-white/70 hover:text-gold transition-colors">+679 992 6768</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:maidinsuva@gmail.com" className="text-white/70 hover:text-gold transition-colors">maidinsuva@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} Maid In Suva. All rights reserved. 100% Fijian Owned.
            </p>
            <p className="text-white/50 text-sm">
              Website by{" "}
              <a
                href="https://www.limitlessfiji.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                Limitless Marketing Pte Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
