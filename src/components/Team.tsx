"use client";

import { Award, Star } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Adi Mitimiti Dreunimisimisi",
      role: "Operations Manager",
      experience: "26+ years",
      description: "One of our proud veteran team members. Adi Mitimiti has had extensive experience in the tourism industry, spanning 26 years, managing various high-end boutique resorts in Fiji. She brings vast knowledge of the hospitality industry and overlooks staff training and placements.",
      specialty: "Staff Training & Hospitality Management",
    },
    {
      name: "Aviame",
      role: "Senior Housekeeper",
      experience: "17+ years",
      description: "With over 17 years of experience working in 5-star resorts, Aviame joins us from the Sheraton Fiji. Professional to a tee, a great carer, and never without a smile. Aviame is a true asset to the growing Maid In Suva team.",
      specialty: "5-Star Housekeeping Standards",
    },
    {
      name: "Ledge",
      role: "House Coordinator",
      experience: "Specialist",
      description: "A versatile worker specializing in Bar and Dining to add to his House Coordinating skills. Ledge is truly a joy to be around and makes it a pleasure to come to work every single day.",
      specialty: "Bar, Dining & House Coordination",
    },
    {
      name: "Nanise",
      role: "Team Member",
      experience: "Dedicated",
      description: "Experienced, energetic, trustworthy, and fun. These are just a few of the ways coworkers describe this valuable member of our team. Nanise is truly a joy to be around and makes it a pleasure to work together.",
      specialty: "Reliable & Efficient Service",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Experts Behind Our Service
          </h2>
          <p className="text-lg text-gray-600">
            Our team brings decades of combined experience from Fiji&apos;s most prestigious
            5-star resorts, ensuring you receive world-class service.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="flex gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sky-600 font-medium">{member.role}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      {member.experience}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-teal-500" />
                    <span className="text-gray-700 font-medium">
                      Specialty: {member.specialty}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-sky-50 rounded-2xl">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Honest</h4>
            <p className="text-gray-600">We pride ourselves on integrity and transparency in all we do.</p>
          </div>
          <div className="text-center p-8 bg-teal-50 rounded-2xl">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Efficient</h4>
            <p className="text-gray-600">We respect your time and deliver quality results promptly.</p>
          </div>
          <div className="text-center p-8 bg-amber-50 rounded-2xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Reliable</h4>
            <p className="text-gray-600">Count on us to be there when you need us, every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
