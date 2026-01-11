"use client";

import { Sparkles, Shield, Clock, Award } from "lucide-react";
import ScrollLink from "./ScrollLink";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50" />

      {/* Decorative elements - smaller on mobile */}
      <div className="absolute top-20 left-0 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-0 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Professional Cleaning Services in Suva
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Your Home Deserves the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">
                5-Star Treatment
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Experience exceptional cleaning from Fiji&apos;s finest hospitality professionals.
              Our team brings 5-star resort expertise directly to your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 lg:mb-12">
              <ScrollLink
                href="#contact"
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-sky-500/25 text-center"
              >
                Get a Free Quote
              </ScrollLink>
              <ScrollLink
                href="#services"
                className="border-2 border-gray-200 hover:border-sky-500 text-gray-700 hover:text-sky-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all text-center"
              >
                Our Services
              </ScrollLink>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 text-center lg:text-left">First Aid Trained</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 text-center lg:text-left">Reliable Service</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 sm:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 text-center lg:text-left">5-Star Quality</span>
              </div>
            </div>
          </div>

          {/* Image/Visual - Desktop only */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image container */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-teal-400 rounded-3xl transform rotate-3 opacity-20" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-sky-500 to-teal-400 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Maid In Suva</h3>
                    <p className="text-gray-600">Excellence in Every Detail</p>
                  </div>
                </div>
              </div>

              {/* Floating cards - desktop only */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Eco-Friendly</p>
                  <p className="text-sm text-gray-500">Green products</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏨</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Resort Quality</p>
                  <p className="text-sm text-gray-500">5-star experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
