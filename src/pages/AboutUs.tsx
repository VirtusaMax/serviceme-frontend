import teamMembers from "@/data/teamMembers.json";
import { useState } from "react";
import TeamMemberDialog from "@/components/dialog/TeamMemberDialog"; // Import Dialog Component

interface TeamMember {
  name: string;
  position: string;
  image?: string;
  bio?: string;
}

const AboutUsPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="my-16 max-w-[1600px] mx-auto flex flex-col w-full items-center py-6 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Cover Section with Responsive Background Image */}
      <div
        className="relative w-full max-w-[1600px] h-[360px] md:h-[420px] bg-center bg-no-repeat bg-cover"
      >
        <picture>
          {/* Extra Small Screens (max-width: 560px) */}
          <source srcSet="/about_section/about_xs.png" media="(max-width: 560px)" />

          {/* Small Screens (max-width: 640px) */}
          <source srcSet="/about_section/about_small.png" media="(max-width: 640px)" />

          {/* Medium Screens (max-width: 1024px) */}
          <source srcSet="/about_section/about_medium.png" media="(max-width: 1024px)" />

          {/* Large Screens (default) */}
          <img
            src="/about_section/about.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* About Us Section */}
      <div className="w-full max-w-4xl text-justify mt-12 px-4">
        <h2 className="text-2xl font-bold uppercase text-custom-yellow tracking-wide">About ServiceMe</h2>
        <p className="text-gray-600 mt-4">
          ServiceMe is the leading platform connecting individuals with skilled, pre-screened professionals for household services. From home cleaning to handyman tasks, ServiceMe seamlessly matches thousands of customers every week with top-rated experts across various cities. With an easy-to-use booking system, secure payments, and a commitment to customer satisfaction, ServiceMe makes home maintenance effortless, reliable, and stress-free.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="w-full max-w-4xl text-justify mt-12 px-4">
        <h3 className="text-2xl font-bold uppercase text-custom-yellow tracking-wide">Our Story</h3>
        <p className="text-gray-600 mt-4">
          ServiceMe was founded with a simple mission: to make home services more accessible and convenient. The idea was born from a common frustration—finding reliable professionals for household tasks. Our founder faced challenges in locating skilled service providers who were trustworthy and efficient. Recognizing this gap, we built ServiceMe as a seamless solution to connect customers with top-rated, pre-screened professionals. With a commitment to reliability, convenience, and customer satisfaction, ServiceMe has grown into a trusted platform, making home maintenance stress-free for everyone.
        </p>
      </div>

      <div className="w-full max-w-4xl text-justify mt-12 px-4">
        <p className="text-gray-600 mt-4">
          <strong>Thank you to the many people who helped ServiceMe get started.</strong>
        </p>
        <p className="text-gray-600 mt-4">
          From our early team members who shaped the platform to the dedicated professionals who deliver top-quality services daily, your contributions have been invaluable. A special thanks to our early supporters, developers, and investors who believed in our mission to simplify home services. Your dedication and hard work have helped us expand, reaching more cities and connecting more customers with trusted professionals.
        </p>
        <p className="text-gray-600 mt-4">
          <strong>Thank you to the many people who’ve subsequently joined the team and invested in ServiceMe.</strong>
          It’s because of your support that we continue to grow, remaining committed to innovation, reliability, and customer satisfaction. ServiceMe is more than just a platform it’s a community built on trust, convenience, and excellence.
        </p>
      </div>

      {/* Leadership Team Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 px-6">
        <h3 className="text-3xl font-bold text-center text-custom-blue">Leadership Team</h3>
        <p className="text-center text-gray-600 max-w-xl mx-auto mt-2">Meet the talented individuals leading the way.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {teamMembers?.length > 0 ? (
            teamMembers.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.image || "https://via.placeholder.com/100"}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full border-4 border-gray-300 shadow-sm transition-transform hover:rotate-3"
                />
                <p className="mt-4 font-semibold text-lg text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-500">{member.position}</p>
                <p className="text-xs text-gray-400 mt-2 italic">{member.bio || "Experienced professional in the industry."}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">No team members found.</p>
          )}
        </div>
      </div>

      {/* Profile Popup */}
      <TeamMemberDialog member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default AboutUsPage;