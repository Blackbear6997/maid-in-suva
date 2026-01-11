"use client";

import { CheckCircle, Users, Heart, Leaf } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "5-Star Resort Experience",
      description: "Our team consists of former employees from Fiji's finest 5-star resorts, bringing world-class hospitality to your home.",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Born during COVID-19, we employed displaced hotel housekeepers who needed support, creating opportunities for our community.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Approach",
      description: "We're committed to protecting Fiji's beautiful environment by using only environmentally friendly cleaning products.",
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Maid In Suva
          </h2>
          <p className="text-lg text-gray-600">
            Since our founding, Maid In Suva has been known for quality services,
            exceptional efficiency, and the highest level of professionalism.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              100% Fijian Owned
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Professional Care You Deserve
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Maid In Suva provides quality services to clients by delivering the professional
              care they deserve. Our team is made up of former employees of Fiji&apos;s 5-star
              resorts who lost their jobs due to the COVID-19 pandemic.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With their vast experience and training in the hospitality industry, our staff
              are trained to handle any job efficiently and to a high standard. Whether it&apos;s
              cleaning, babysitting, pet-sitting, or house-sitting, we get the job done.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t">
          <div className="text-center">
            <div className="text-4xl font-bold text-sky-600 mb-2">26+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">5-Star</div>
            <div className="text-gray-600">Resort Training</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-gray-600">Fijian Owned</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">Eco</div>
            <div className="text-gray-600">Friendly Products</div>
          </div>
        </div>
      </div>
    </section>
  );
}
