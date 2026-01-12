"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Adi Mitimiti Dreunimisimisi",
      role: "Managing Director",
      experience: "26+ Years",
      image: "/adi-mitimiti.avif",
    },
    {
      name: "Ms Safaira Olipani",
      role: "House Coordinator",
      experience: "Experienced",
      image: "/ms-safaira.avif",
    },
    {
      name: "Ms Aviame Naileqe",
      role: "House Coordinator",
      experience: "17+ Years",
      image: "/ms-aviame.avif",
    },
    {
      name: "Mr Ledge Draunibaka",
      role: "House Coordinator",
      experience: "Specialist",
      image: "/mr-ledge.avif",
    },
    {
      name: "Ms Nanise Adirabe",
      role: "House Coordinator",
      experience: "17+ Years",
      image: "/ms-nanise.avif",
    },
    {
      name: "Ms Lotise Naikobici",
      role: "House Coordinator",
      experience: "Professional",
      image: "/ms-lotise.avif",
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-warm-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-charcoal leading-[1.1] mb-6">
            The professionals
            <br />
            behind our <span className="text-primary">excellence.</span>
          </h2>
          <p className="text-lg text-warm-gray leading-relaxed">
            Every member of our team brings years of experience from Fiji&apos;s most
            prestigious 5-star resorts, ensuring world-class service in your home.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/90 via-earth-deep/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className="text-gold text-xs tracking-wider uppercase mb-1">
                    {member.experience}
                  </div>
                  <h3 className="text-white font-serif font-semibold text-sm lg:text-lg leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white/60 text-xs lg:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 text-warm-gray">
            <div className="h-px w-12 bg-sand" />
            <span className="text-sm uppercase tracking-wider">
              Trained at Fiji&apos;s finest 5-star resorts
            </span>
            <div className="h-px w-12 bg-sand" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
