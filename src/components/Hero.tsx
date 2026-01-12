"use client";

import { motion } from "framer-motion";
import { Star, ArrowDown } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Full-screen background with overlay */}
      <div className="absolute inset-0 bg-earth-deep" />

      {/* Decorative masi-inspired geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large geometric shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03]">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="100" width="600" height="600" stroke="white" strokeWidth="1"/>
            <rect x="200" y="200" width="400" height="400" stroke="white" strokeWidth="1"/>
            <line x1="100" y1="100" x2="700" y2="700" stroke="white" strokeWidth="0.5"/>
            <line x1="700" y1="100" x2="100" y2="700" stroke="white" strokeWidth="0.5"/>
            <circle cx="400" cy="400" r="200" stroke="white" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.03]">
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="300,50 550,250 450,550 150,550 50,250" stroke="white" strokeWidth="1" fill="none"/>
            <polygon points="300,150 450,280 400,450 200,450 150,280" stroke="white" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-earth-deep via-earth-deep/80 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-earth-deep/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 xl:px-32 pt-32 pb-20">
        <div className="max-w-3xl text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-start gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Premium Cleaning Services
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-white leading-[0.95] mb-8"
          >
            Five-Star
            <br />
            <span className="text-gold">Excellence</span>
            <br />
            <span className="text-white/60">For Your Home</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed"
          >
            Fiji&apos;s premier housekeeping service, staffed exclusively by
            professionals from the nation&apos;s most prestigious 5-star resorts.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-start gap-4 mb-16"
          >
            <ScrollLink
              href="#contact"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-earth-deep px-10 py-5 text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-gold/20"
            >
              Request a Quote
            </ScrollLink>
            <ScrollLink
              href="#services"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white px-10 py-5 text-lg font-medium transition-all hover:bg-white/5"
            >
              View Services
            </ScrollLink>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-start gap-8 text-white/50"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-sm">Resort Quality</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-sm">26+ Years Experience</span>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-sm">100% Fijian Owned</span>
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "26+", label: "Years of Excellence" },
              { value: "5-Star", label: "Resort Trained Staff" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "Eco", label: "Friendly Products" },
            ].map((stat, index) => (
              <div key={index} className="py-8 px-6 text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ScrollLink href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
}
