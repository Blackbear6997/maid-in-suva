"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-white/98 shadow-lg shadow-charcoal/5"
          : "bg-warm-white/80"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
              <Image
                src="/logo.jpg"
                alt="Maid In Suva Logo"
                fill
                className="object-cover"
                sizes="64px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-serif font-semibold text-charcoal tracking-tight">
                Maid In Suva
              </span>
              <p className="text-xs lg:text-sm text-primary font-medium tracking-wide">
                Premium Cleaning Service
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                href={item.href}
                className="relative text-charcoal hover:text-primary transition-colors font-medium text-[15px] tracking-wide group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </ScrollLink>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+6799926768"
              className="flex items-center gap-2 text-warm-gray hover:text-primary transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <span className="hidden lg:inline font-medium">+679 992 6768</span>
            </a>
            <ScrollLink
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Book Now
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-sand/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-sand"
            >
              <nav className="flex flex-col py-6 gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ScrollLink
                      href={item.href}
                      className="text-charcoal hover:text-primary hover:bg-sand/30 transition-all font-medium px-4 py-3 rounded-lg block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4 px-4"
                >
                  <ScrollLink
                    href="#contact"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-lg font-medium transition-all text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Now
                  </ScrollLink>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
