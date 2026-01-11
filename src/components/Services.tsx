"use client";

import { Home, Sparkles, Baby, Key, Droplets, Flower2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "House Cleaning",
      price: "$20",
      unit: "per hour",
      minimum: "Minimum 3 hours per day",
      description: "Comprehensive routine cleaning to keep your home spotless and fresh. Our experienced coordinators deliver 5-star resort quality cleaning.",
      features: ["Dusting & wiping", "Vacuuming & mopping", "Kitchen cleaning", "Bathroom sanitization"],
      color: "sky",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      price: "$25",
      unit: "per hour",
      minimum: "Minimum 3 hours per day",
      description: "Thorough top-to-bottom cleaning for a complete refresh of your space. Perfect for move-ins, move-outs, or seasonal deep cleans.",
      features: ["Inside appliances", "Detailed scrubbing", "Hard-to-reach areas", "Intensive sanitization"],
      color: "teal",
    },
    {
      icon: Droplets,
      title: "Floor Washing",
      price: "$20",
      unit: "per hour",
      minimum: "Minimum 3 hours per day",
      description: "Professional floor care for all floor types. We'll have your floors gleaming like new with our specialized cleaning techniques.",
      features: ["Tile & grout cleaning", "Hardwood care", "Vinyl & laminate", "Polishing available"],
      color: "indigo",
    },
    {
      icon: Baby,
      title: "Babysitting",
      price: "$20",
      unit: "per hour",
      minimum: "Minimum 2 hours per day",
      description: "Trusted childcare from our experienced and First Aid trained staff. Safe, reliable, and nurturing care for your little ones.",
      features: ["First Aid certified", "Experienced carers", "Flexible hours", "Engaging activities"],
      color: "pink",
    },
    {
      icon: Key,
      title: "House Sitting",
      price: "$50",
      unit: "per day",
      minimum: "Daily rate",
      description: "Keep your home safe and maintained while you travel. Peace of mind knowing your property is in trusted, professional hands.",
      features: ["Security presence", "Mail collection", "Plant watering", "Property checks"],
      color: "amber",
    },
    {
      icon: Flower2,
      title: "Blooming Flowers",
      price: "Custom",
      unit: "pricing",
      minimum: "Delivery available",
      description: "Your go-to florist for stunning arrangements that brighten any occasion. Fresh, beautiful blooms delivered right to your doorstep.",
      features: ["Custom arrangements", "Fresh flowers", "All occasions", "Doorstep delivery"],
      color: "rose",
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; hover: string; price: string }> = {
    sky: { bg: "bg-sky-100", icon: "text-sky-600", hover: "hover:border-sky-300", price: "text-sky-600" },
    teal: { bg: "bg-teal-100", icon: "text-teal-600", hover: "hover:border-teal-300", price: "text-teal-600" },
    pink: { bg: "bg-pink-100", icon: "text-pink-600", hover: "hover:border-pink-300", price: "text-pink-600" },
    amber: { bg: "bg-amber-100", icon: "text-amber-600", hover: "hover:border-amber-300", price: "text-amber-600" },
    indigo: { bg: "bg-indigo-100", icon: "text-indigo-600", hover: "hover:border-indigo-300", price: "text-indigo-600" },
    rose: { bg: "bg-rose-100", icon: "text-rose-600", hover: "hover:border-rose-300", price: "text-rose-600" },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            What We Provide
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services & Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Transparent pricing with no hidden fees. All services delivered with 5-star resort quality standards.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border border-gray-100 ${colors.hover} transition-all hover:shadow-xl group`}
              >
                {/* Icon & Price Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${colors.price}`}>
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">{service.unit}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-sky-600 font-medium mb-3">
                  {service.minimum}
                </p>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#contact"
                  className={`inline-flex items-center gap-2 ${colors.icon} font-medium group-hover:gap-3 transition-all`}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-500 to-teal-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
            Give yourself a break today and let us handle the cleaning.
            Contact us for a free quote and discover why Suva trusts Maid In Suva.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-sky-50 transition-colors"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
