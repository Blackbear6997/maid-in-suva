"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

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
    <section id="contact" className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left Panel - Dark with contact info */}
        <div className="bg-earth-deep py-20 lg:py-32 px-6 lg:px-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rotate-45 translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.02] rotate-45 -translate-x-24 translate-y-24" />

          <div className="relative max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white leading-[1.1] mb-6">
                Ready to experience
                <br />
                <span className="text-gold">five-star</span> service?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-12">
                Contact us today for a complimentary quote. We guarantee to not
                only meet, but exceed your expectations.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                      {info.title}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-gold transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.content}</p>
                    )}
                    <p className="text-sm text-white/50 mt-1">{info.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-white/60 text-sm">
                  We typically respond within 2-4 hours during business hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Panel - Light with form */}
        <div className="bg-warm-white py-20 lg:py-32 px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-2">
              Request a Quote
            </h3>
            <p className="text-warm-gray mb-8">
              Fill out the form below and we&apos;ll get back to you promptly.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center bg-cream"
              >
                <div className="w-20 h-20 bg-primary/10 flex items-center justify-center mb-6">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-charcoal uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-cream border-0 border-b-2 border-sand focus:border-primary outline-none transition-colors text-charcoal placeholder:text-warm-gray/60"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-charcoal uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-cream border-0 border-b-2 border-sand focus:border-primary outline-none transition-colors text-charcoal placeholder:text-warm-gray/60"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-charcoal uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-cream border-0 border-b-2 border-sand focus:border-primary outline-none transition-colors text-charcoal placeholder:text-warm-gray/60"
                      placeholder="+679"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-charcoal uppercase tracking-wider mb-2">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-cream border-0 border-b-2 border-sand focus:border-primary outline-none transition-colors text-charcoal appearance-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-xs font-medium text-charcoal uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-cream border-0 border-b-2 border-sand focus:border-primary outline-none transition-colors resize-none text-charcoal placeholder:text-warm-gray/60"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-earth-deep hover:bg-charcoal text-white px-8 py-5 font-semibold text-lg transition-all flex items-center justify-center gap-3 group"
                >
                  Send Request
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
