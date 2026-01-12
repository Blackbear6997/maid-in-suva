"use client";

import { motion } from "framer-motion";
import { Home, Sparkles, Baby, Key, Droplets, Flower2, ArrowRight } from "lucide-react";
import ScrollLink from "./ScrollLink";
import { MasiGridPattern } from "./MasiPatterns";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "House Cleaning",
      price: "$20",
      unit: "per hour",
      minimum: "Minimum 3 hours per day",
      description: "Comprehensive routine cleaning to keep your home spotless and fresh.",
      features: ["Dusting & wiping", "Vacuuming & mopping", "Kitchen cleaning", "Bathroom sanitization"],
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      price: "$25",
      unit: "per hour",
      minimum: "Minimum 3 hours per day",
      description: "Thorough top-to-bottom cleaning for a complete refresh of your space.",
      features: ["Inside appliances", "Detailed scrubbing", "Hard-to-reach areas", "Intensive sanitization"],
    },
    {
      icon: Droplets,
      title: "Floor Washing",
      price: "$20",
      unit: "per hour",
      minimum: "Minimum 3 hours per day",
      description: "Professional floor care for all floor types with specialized techniques.",
      features: ["Tile & grout cleaning", "Hardwood care", "Vinyl & laminate", "Polishing available"],
    },
    {
      icon: Baby,
      title: "Babysitting",
      price: "$20",
      unit: "per hour",
      minimum: "Minimum 2 hours per day",
      description: "Trusted childcare from our experienced and First Aid trained staff.",
      features: ["First Aid certified", "Experienced carers", "Flexible hours", "Engaging activities"],
    },
    {
      icon: Key,
      title: "House Sitting",
      price: "$50",
      unit: "per day",
      minimum: "Daily rate",
      description: "Keep your home safe and maintained while you travel with peace of mind.",
      features: ["Security presence", "Mail collection", "Plant watering", "Property checks"],
    },
    {
      icon: Flower2,
      title: "Blooming Flowers",
      price: "Custom",
      unit: "pricing",
      minimum: "Delivery available",
      description: "Stunning floral arrangements that brighten any occasion.",
      features: ["Custom arrangements", "Fresh flowers", "All occasions", "Doorstep delivery"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream/50 relative overflow-hidden">
      {/* Masi Pattern Background */}
      <MasiGridPattern opacity={0.025} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 bg-gold/10 text-gold px-5 py-2 rounded-full text-sm font-medium mb-6 border border-gold/20">
              What We Provide
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-6"
          >
            Our Services & Pricing
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-warm-gray leading-relaxed">
            Transparent pricing with no hidden fees. All services delivered with 5-star resort quality.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-warm-white rounded-2xl p-6 lg:p-8 border border-sand hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-charcoal/5 group"
            >
              {/* Icon & Price Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                    {service.price}
                  </div>
                  <div className="text-sm text-warm-gray">{service.unit}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gold font-medium mb-3">
                {service.minimum}
              </p>
              <p className="text-warm-gray mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-warm-gray text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <ScrollLink
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </ScrollLink>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 relative overflow-hidden rounded-3xl"
        >
          {/* Background with masi pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-rust to-terracotta" />
          <MasiGridPattern opacity={0.1} color="#FFFFFF" />

          <div className="relative p-8 md:p-12 lg:p-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Give yourself a break today and let us handle the cleaning.
              Contact us for a free quote!
            </p>
            <ScrollLink
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cream transition-colors hover:shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
