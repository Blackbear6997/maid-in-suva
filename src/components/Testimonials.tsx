"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail is remarkable. It's like having a 5-star hotel experience in our own home. We've been using Maid In Suva for over a year now.",
      author: "Sarah T.",
      role: "Homeowner, Suva",
      rating: 5,
    },
    {
      quote:
        "Professional, punctual, and thorough. Our corporate apartment has never looked better. Highly recommend for any business looking for reliable cleaning services.",
      author: "Michael R.",
      role: "Property Manager",
      rating: 5,
    },
    {
      quote:
        "The team's hospitality background really shows. They treat our home with the same care as a luxury resort. Exceptional service every single time.",
      author: "Jennifer L.",
      role: "Resident, Pacific Harbour",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-earth-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-64 h-64 text-white" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <Quote className="w-48 h-48 text-white rotate-180" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 h-full">
                {/* Quote mark */}
                <div className="text-gold mb-6">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-white/80 text-lg leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-white/50 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 text-white/50">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-sm">5-Star Rated Service</span>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-sm">100% Satisfaction Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
