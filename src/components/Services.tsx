"use client";

import { motion } from "framer-motion";
import { Home, Sparkles, Baby, Key, Droplets, Flower2, ArrowRight } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "House Cleaning",
      price: "$20",
      unit: "/hour",
      minimum: "3 hour minimum",
      description: "Comprehensive routine cleaning to keep your home spotless and fresh.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      price: "$25",
      unit: "/hour",
      minimum: "3 hour minimum",
      description: "Thorough top-to-bottom cleaning for a complete refresh of your space.",
    },
    {
      icon: Droplets,
      title: "Floor Washing",
      price: "$20",
      unit: "/hour",
      minimum: "3 hour minimum",
      description: "Professional floor care for all floor types with specialized techniques.",
    },
    {
      icon: Baby,
      title: "Babysitting",
      price: "$20",
      unit: "/hour",
      minimum: "2 hour minimum",
      description: "Trusted childcare from our experienced and First Aid trained staff.",
    },
    {
      icon: Key,
      title: "House Sitting",
      price: "$50",
      unit: "/day",
      minimum: "Daily rate",
      description: "Keep your home safe and maintained while you travel.",
    },
    {
      icon: Flower2,
      title: "Blooming Flowers",
      price: "Custom",
      unit: "quote",
      minimum: "Delivery available",
      description: "Stunning floral arrangements that brighten any occasion.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-[1.1]">
              Premium services,
              <br />
              <span className="text-primary">transparent</span> pricing.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-end"
          >
            <p className="text-lg text-warm-gray leading-relaxed max-w-md">
              Every service is delivered with the same attention to detail you&apos;d
              expect from a luxury resort. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/50">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-warm-white p-8 lg:p-10 group hover:bg-white transition-colors relative"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 bg-earth-deep/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-7 h-7 text-earth-deep group-hover:text-gold transition-colors" />
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-serif font-bold text-charcoal">
                  {service.price}
                </span>
                <span className="text-warm-gray">{service.unit}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {service.minimum}
              </p>
              <p className="text-warm-gray mb-6">
                {service.description}
              </p>

              {/* Link */}
              <ScrollLink
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal group-hover:text-gold transition-colors"
              >
                Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 text-center"
        >
          <p className="text-warm-gray mb-6">
            Need a custom package? We&apos;ll create a solution tailored to your needs.
          </p>
          <ScrollLink
            href="#contact"
            className="inline-flex items-center gap-3 bg-earth-deep hover:bg-charcoal text-white px-10 py-5 text-lg font-semibold transition-all"
          >
            Request Custom Quote
            <ArrowRight className="w-5 h-5" />
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
