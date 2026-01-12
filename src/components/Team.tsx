"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Zap, HandHeart } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Team() {
  const teamMembers = [
    {
      name: "Adi Mitimiti Dreunimisimisi",
      role: "Managing Director",
      experience: "26+ years",
      description: "Extensive experience in the tourism industry, managing high-end boutique resorts in Fiji. Overlooks staff training and placements.",
      specialty: "Staff Training & Management",
      image: "/adi-mitimiti.avif",
    },
    {
      name: "Ms Safaira Olipani",
      role: "House Coordinator",
      experience: "Experienced",
      description: "A proud team member bringing years of experience and skills to help our business grow and evolve.",
      specialty: "House Coordinating",
      image: "/ms-safaira.avif",
    },
    {
      name: "Ms Aviame Naileqe",
      role: "House Coordinator",
      experience: "17+ years",
      description: "Over 17 years experience in 5-star resorts, joining us from Sheraton Fiji. Professional, great carer, and never without a smile.",
      specialty: "5-Star Service",
      image: "/ms-aviame.avif",
    },
    {
      name: "Mr Ledge Draunibaka",
      role: "House Coordinator & Maitre'd",
      experience: "Specialist",
      description: "A versatile worker specialising in Bar and Dining to add to his House Coordinating skills. Truly a joy to be around.",
      specialty: "Bar & Dining",
      image: "/mr-ledge.avif",
    },
    {
      name: "Ms Nanise Adirabe",
      role: "House Coordinator",
      experience: "17+ years",
      description: "Energetic, trustworthy, and fun. A valuable member who makes it a pleasure to come to work every single day.",
      specialty: "Reliable Service",
      image: "/ms-nanise.avif",
    },
    {
      name: "Ms Lotise Naikobici",
      role: "House Coordinator",
      experience: "Professional",
      description: "Quick to make an impact with professionalism, great creativity, and never without a smile. A true asset to the team.",
      specialty: "Creative Solutions",
      image: "/ms-lotise.avif",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Honest",
      description: "Integrity and transparency in all we do.",
    },
    {
      icon: Zap,
      title: "Efficient",
      description: "Quality results delivered promptly.",
    },
    {
      icon: HandHeart,
      title: "Reliable",
      description: "Always there when you need us.",
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cream/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-sand/30 rounded-full blur-3xl translate-x-1/2" />

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
            <span className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-5 py-2 rounded-full text-sm font-medium mb-6 border border-terracotta/20">
              Meet Our Team
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-6"
          >
            The Experts Behind Our Service
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-warm-gray leading-relaxed">
            Our team brings decades of combined experience from Fiji&apos;s most prestigious 5-star resorts.
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-cream/30 rounded-2xl p-4 sm:p-6 lg:p-8 border border-sand hover:shadow-xl hover:shadow-charcoal/5 transition-all group"
            >
              {/* Photo */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-4 lg:mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-terracotta p-[3px]">
                  <div className="w-full h-full rounded-full bg-cream overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                {/* Experience badge */}
                <div className="inline-flex items-center gap-1.5 bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium mb-3 border border-gold/20">
                  <Award className="w-3 h-3" />
                  {member.experience}
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-serif font-semibold text-charcoal mb-1 line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-xs sm:text-sm mb-3">
                  {member.role}
                </p>

                <p className="text-warm-gray text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3 hidden sm:block">
                  {member.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-xs">
                  <Star className="w-3 h-3 text-gold flex-shrink-0" />
                  <span className="text-charcoal font-medium line-clamp-1">
                    {member.specialty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 lg:mt-20 grid grid-cols-3 gap-4 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center p-4 sm:p-6 lg:p-10 bg-cream/50 rounded-2xl border border-sand"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-6">
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              <h4 className="text-sm sm:text-lg lg:text-xl font-serif font-semibold text-charcoal mb-1 lg:mb-2">
                {value.title}
              </h4>
              <p className="text-warm-gray text-xs sm:text-sm hidden sm:block">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
