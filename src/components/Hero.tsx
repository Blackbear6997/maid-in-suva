"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Star } from "lucide-react";
import ScrollLink from "./ScrollLink";
import { MasiGridPattern } from "./MasiPatterns";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const trustBadges = [
    {
      icon: Shield,
      label: "First Aid Trained",
      color: "terracotta",
    },
    {
      icon: Clock,
      label: "Reliable Service",
      color: "primary",
    },
    {
      icon: Award,
      label: "5-Star Quality",
      color: "gold",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-warm-white to-sand/30" />

      {/* Masi Pattern Overlay */}
      <MasiGridPattern opacity={0.035} />

      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
                <Star className="w-4 h-4" />
                Premium Cleaning Services in Suva
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-charcoal leading-[1.1] mb-6"
            >
              Your Home Deserves the{" "}
              <span className="text-primary relative">
                5-Star
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-gold/40"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 9 Q50 0, 100 9 T200 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              Treatment
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-warm-gray mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Experience exceptional cleaning from Fiji&apos;s finest hospitality
              professionals. Our team brings 5-star resort expertise directly to
              your home.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <ScrollLink
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 text-center"
              >
                Get a Free Quote
              </ScrollLink>
              <ScrollLink
                href="#services"
                className="border-2 border-charcoal/20 hover:border-primary text-charcoal hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all text-center"
              >
                Our Services
              </ScrollLink>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8"
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      badge.color === "terracotta"
                        ? "bg-terracotta/10"
                        : badge.color === "primary"
                        ? "bg-primary/10"
                        : "bg-gold/10"
                    }`}
                  >
                    <badge.icon
                      className={`w-5 h-5 ${
                        badge.color === "terracotta"
                          ? "text-terracotta"
                          : badge.color === "primary"
                          ? "text-primary"
                          : "text-gold"
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-charcoal">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-4 bg-warm-white rounded-3xl shadow-2xl shadow-charcoal/10 border border-sand overflow-hidden">
                {/* Masi pattern accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-terracotta to-gold" />

                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    {/* Decorative masi-inspired element */}
                    <div className="w-32 h-32 mx-auto mb-8 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-terracotta rounded-2xl rotate-45 transform" />
                      <div className="absolute inset-2 bg-cream rounded-xl rotate-45 transform" />
                      <div className="absolute inset-4 bg-gradient-to-br from-primary to-terracotta rounded-lg rotate-45 transform flex items-center justify-center">
                        <Star className="w-8 h-8 text-white transform -rotate-45" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-charcoal mb-2">
                      Maid In Suva
                    </h3>
                    <p className="text-warm-gray text-sm">
                      Excellence in Every Detail
                    </p>
                    <div className="mt-6 flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-gold fill-gold"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-warm-white rounded-2xl shadow-xl border border-sand p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Eco-Friendly</p>
                  <p className="text-xs text-warm-gray">Green products</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-warm-white rounded-2xl shadow-xl border border-sand p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏨</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">Resort Quality</p>
                  <p className="text-xs text-warm-gray">5-star experience</p>
                </div>
              </motion.div>

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
