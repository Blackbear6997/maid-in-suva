"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Heart, Leaf } from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { MasiDivider } from "./MasiPatterns";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "5-Star Resort Experience",
      description:
        "Our team consists of former employees from Fiji's finest 5-star resorts, bringing world-class hospitality to your home.",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description:
        "Born during COVID-19, we employed displaced hotel housekeepers who needed support, creating opportunities for our community.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Approach",
      description:
        "We're committed to protecting Fiji's beautiful environment by using only environmentally friendly cleaning products.",
    },
  ];

  const highlights = [
    "Honest, reliable & efficient staff",
    "Fully trained in First Aid",
    "26+ years hospitality experience",
    "COVID-safe protocols",
    "100% satisfaction guaranteed",
    "Locally owned & operated",
  ];

  const stats = [
    { value: "26+", label: "Years Experience", color: "primary" },
    { value: "5-Star", label: "Resort Training", color: "terracotta" },
    { value: "100%", label: "Fijian Owned", color: "gold" },
    { value: "Eco", label: "Friendly Products", color: "primary" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cream/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              Our Story
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-6"
          >
            About Maid In Suva
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-warm-gray leading-relaxed">
            Since our founding, Maid In Suva has been known for quality services,
            exceptional efficiency, and the highest level of professionalism.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-gold/20">
              100% Fijian Owned
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-8">
              Professional Care You Deserve
            </h3>

            <div className="space-y-6 text-warm-gray leading-relaxed mb-10">
              <p>
                Maid In Suva provides quality services to clients by delivering the
                professional care they deserve. Our team is made up of former
                employees of Fiji&apos;s 5-star resorts who lost their jobs due to the
                COVID-19 pandemic.
              </p>
              <p>
                With their vast experience and training in the hospitality industry,
                our staff are trained to handle any job efficiently and to a high
                standard. Whether it&apos;s cleaning, babysitting, pet-sitting, or
                house-sitting, we get the job done.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-charcoal text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features cards */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream/50 p-6 lg:p-8 rounded-2xl border border-sand hover:shadow-xl hover:shadow-charcoal/5 transition-all group"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-semibold text-charcoal mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-warm-gray leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <MasiDivider className="my-20" />

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-6 lg:p-8 bg-cream/30 rounded-2xl border border-sand/50"
            >
              <div
                className={`text-4xl lg:text-5xl font-serif font-bold mb-3 ${
                  stat.color === "primary"
                    ? "text-primary"
                    : stat.color === "terracotta"
                    ? "text-terracotta"
                    : "text-gold"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-warm-gray font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
