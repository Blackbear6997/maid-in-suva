"use client";

import Image from "next/image";
import { Award, Star, ShieldCheck, Zap, HandHeart } from "lucide-react";

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
      name: "Ms Safaira",
      role: "Senior Team Member",
      experience: "Expert",
      description: "A valuable team member bringing extensive experience and skills. Her dedication and professionalism set the standard.",
      specialty: "Professional Cleaning",
      image: "/ms-safaira.avif",
    },
    {
      name: "Aviame",
      role: "Senior Housekeeper",
      experience: "17+ years",
      description: "Over 17 years experience in 5-star resorts, joining us from Sheraton Fiji. Professional, caring, and always smiling.",
      specialty: "5-Star Housekeeping",
      image: "/ms-aviame.avif",
    },
    {
      name: "Mr Ledge",
      role: "House Coordinator",
      experience: "Specialist",
      description: "A versatile worker specializing in Bar, Dining, and House Coordinating. A joy to be around every single day.",
      specialty: "Bar & Dining",
      image: "/mr-ledge.avif",
    },
    {
      name: "Ms Nanise",
      role: "Team Member",
      experience: "Dedicated",
      description: "Experienced, energetic, trustworthy, and fun. A valuable member who makes it a pleasure to work together.",
      specialty: "Reliable Service",
      image: "/ms-nanise.avif",
    },
    {
      name: "Ms Lotise",
      role: "Team Member",
      experience: "Dedicated",
      description: "Committed and hardworking with excellent attention to detail. A positive attitude that's invaluable to our team.",
      specialty: "Detailed Cleaning",
      image: "/ms-lotise.avif",
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            Meet Our Team
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            The Experts Behind Our Service
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Our team brings decades of combined experience from Fiji&apos;s most prestigious 5-star resorts.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 border border-gray-100 hover:shadow-xl transition-all group"
            >
              {/* Photo */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gradient-to-br from-amber-400 to-amber-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 112px, 128px"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-amber-100 text-amber-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1">
                    <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {member.experience}
                  </div>
                </div>

                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-medium text-xs sm:text-sm mb-2 sm:mb-3">{member.role}</p>

                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3 hidden sm:block">
                  {member.description}
                </p>

                <div className="flex items-center justify-center gap-1 sm:gap-2 text-[10px] sm:text-xs">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium line-clamp-1">
                    {member.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team values */}
        <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 sm:p-6 lg:p-8 bg-sky-50 rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-sky-600" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Honest</h4>
            <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">Integrity and transparency in all we do.</p>
          </div>
          <div className="text-center p-4 sm:p-6 lg:p-8 bg-teal-50 rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Efficient</h4>
            <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">Quality results delivered promptly.</p>
          </div>
          <div className="text-center p-4 sm:p-6 lg:p-8 bg-amber-50 rounded-xl sm:rounded-2xl">
            <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
              <HandHeart className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-amber-600" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Reliable</h4>
            <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">Always there when you need us.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
