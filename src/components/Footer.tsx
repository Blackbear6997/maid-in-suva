"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import ScrollLink from "./ScrollLink";

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
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Maid In Suva Logo"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <span className="text-xl font-bold">Maid In Suva</span>
                <p className="text-xs text-amber-400">100% Fijian Owned</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional cleaning and housekeeping services in Suva, Fiji.
              Experience 5-star resort quality in your own home.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <ScrollLink
                    href="#services"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {service}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Suva, Fiji</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+6799926768" className="text-gray-400 hover:text-amber-400 transition-colors">+679 992 6768</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:maidinsuva@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">maidinsuva@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Maid In Suva. All rights reserved. 100% Fijian Owned.
            </p>
            <p className="text-gray-500 text-sm">
              Website by{" "}
              <a
                href="https://limitlessmarketing.fj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
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
