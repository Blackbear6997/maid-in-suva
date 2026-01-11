"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

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
    // In production, this would send to an API
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
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Contact us today for a free quote. We guarantee to not only meet,
            but exceed your expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">
                Request a Free Quote
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We&apos;ve received your request and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                        placeholder="+679"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white text-sm sm:text-base"
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a href={info.href} className="text-gray-800 font-medium text-sm sm:text-base hover:text-amber-600 transition-colors break-all">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-medium text-sm sm:text-base">{info.content}</p>
                    )}
                    <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">{info.subtext}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick booking note */}
            <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-white">
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                Quick Response Guaranteed
              </h4>
              <p className="text-amber-100 text-xs sm:text-sm">
                We typically respond within 2-4 hours during business hours.
                For urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
