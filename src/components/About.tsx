"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "Former 5-star resort professionals",
    "Fully trained in First Aid",
    "26+ years combined experience",
    "Eco-friendly products only",
    "100% satisfaction guaranteed",
    "Locally owned & operated",
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Top section - Story */}
      <div className="bg-warm-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Large typography */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-[1.1] mb-8">
                Born from
                <br />
                <span className="text-primary">adversity,</span>
                <br />
                built on excellence.
              </h2>

              <div className="w-24 h-1 bg-gold mb-8" />

              <p className="text-lg text-warm-gray leading-relaxed">
                When COVID-19 closed Fiji&apos;s luxury resorts, our founders saw an
                opportunity to bring world-class hospitality directly into homes.
                Today, we employ the same professionals who once served in the
                nation&apos;s most prestigious hotels.
              </p>
            </motion.div>

            {/* Right - Feature blocks */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  number: "01",
                  title: "Resort-Trained Professionals",
                  description:
                    "Every team member comes from Fiji's elite 5-star resorts, bringing impeccable standards to your home.",
                },
                {
                  number: "02",
                  title: "Community First",
                  description:
                    "We created opportunities for displaced hospitality workers, turning crisis into community strength.",
                },
                {
                  number: "03",
                  title: "Environmental Stewardship",
                  description:
                    "We protect Fiji's pristine environment using only eco-friendly, biodegradable cleaning products.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-6 bg-cream/50 border-l-4 border-primary hover:bg-cream transition-colors"
                >
                  <span className="text-4xl font-serif font-bold text-primary/20">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-warm-gray">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom section - Credentials band */}
      <div className="bg-earth-deep py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-block">
                <div className="bg-gold/10 border border-gold/30 px-8 py-6 mb-6">
                  <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                    Proudly
                  </span>
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-white mt-2">
                    100% Fijian
                  </div>
                  <div className="text-white/60 mt-1">Owned & Operated</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                Why Choose Us
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
