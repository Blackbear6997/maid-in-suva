"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { MasiGridPattern } from "./MasiPatterns";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Suva, Fiji",
      subtext: "Serving the greater Suva area",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+679 992 6768",
      subtext: "Available during business hours",
      href: "tel:+6799926768",
    },
    {
      icon: Mail,
      title: "Email",
      content: "maidinsuva@gmail.com",
      subtext: "We respond within 24 hours",
      href: "mailto:maidinsuva@gmail.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Sat: 8am - 6pm",
      subtext: "Flexible scheduling available",
    },
  ];

  const services = [
    "House Cleaning",
    "Deep Cleaning",
    "Floor Washing",
    "Babysitting",
    "House Sitting",
    "Blooming Flowers",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream/50 relative overflow-hidden">
      {/* Background Pattern */}
      <MasiGridPattern opacity={0.02} />

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
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-6"
          >
            Ready to Book Your Service?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-warm-gray leading-relaxed">
            Contact us today for a free quote. We guarantee to not only meet,
            but exceed your expectations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-warm-white rounded-2xl shadow-xl shadow-charcoal/5 p-6 sm:p-8 lg:p-10 border border-sand">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-charcoal mb-6 lg:mb-8">
                Request a Free Quote
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 lg:py-16 text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-charcoal mb-2">
                    Thank You!
                  </h4>
                  <p className="text-warm-gray">
                    We&apos;ve received your request and will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-cream/50 border border-sand rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-charcoal placeholder:text-warm-gray/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-cream/50 border border-sand rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-charcoal placeholder:text-warm-gray/60"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-cream/50 border border-sand rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-charcoal placeholder:text-warm-gray/60"
                        placeholder="+679"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-cream/50 border border-sand rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-charcoal"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3.5 bg-cream/50 border border-sand rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none text-charcoal placeholder:text-warm-gray/60"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-warm-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-sand hover:shadow-lg hover:shadow-charcoal/5 transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a href={info.href} className="text-charcoal font-medium text-sm sm:text-base hover:text-primary transition-colors break-all">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-charcoal font-medium text-sm sm:text-base">{info.content}</p>
                    )}
                    <p className="text-xs sm:text-sm text-warm-gray hidden sm:block mt-1">{info.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick booking note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-2 lg:col-span-1 relative overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-terracotta" />
              <MasiGridPattern opacity={0.1} color="#FFFFFF" />
              <div className="relative p-4 sm:p-5 lg:p-6 text-white">
                <h4 className="font-serif font-semibold text-lg mb-2">
                  Quick Response Guaranteed
                </h4>
                <p className="text-white/80 text-sm">
                  We typically respond within 2-4 hours during business hours.
                  For urgent requests, please call us directly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
