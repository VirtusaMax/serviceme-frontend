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
    <div className="my-12 max-w-[1600px] mx-auto flex flex-col w-full items-center px-4 py-3 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* About Us Section */}
      <div className="w-full max-w-[1600px] mx-auto bg-white shadow-lg py-12 flex flex-col items-center px-6 md:px-12 rounded-2xl">
        <img
          src="/about_section/about.png"
          alt="About Us"
          className="w-full max-w-5xl object-cover rounded-xl shadow-md"
        />
        <h2 className="text-2xl font-bold uppercase mt-2 text-custom-yellow tracking-wide">About Us</h2>
        <p className="text-center text-3xl font-bold max-w-3xl mt-6 text-custom-blue">
          Transforming lives, one task at a time
        </p>
        <p className="text-center text-gray-600 max-w-3xl mt-4">
        At ServiceMe, we believe in making everyday tasks easier by connecting people who need help with skilled professionals who can get the job done. Whether it’s fixing furniture, repairing appliances, cleaning, or any other home service, we bring together reliable experts and customers who need their skills.

Our mission is simple: to transform lives, one task at a time. We empower local service providers by giving them a platform to grow while ensuring that customers get quick, high-quality services they can trust.  </p>

      </div>

      {/* Leadership Team Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 px-4">
        <h3 className="text-3xl font-bold text-center text-custom-blue">Leadership Team</h3>
        <p className="text-center text-gray-600 max-w-xl mx-auto mt-2">Meet the talented individuals leading the way.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {teamMembers?.length > 0 ? (
            teamMembers.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedMember(member)} // Open dialog
              >
                <img
                  src={member.image || "https://via.placeholder.com/100"} // Default image
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
