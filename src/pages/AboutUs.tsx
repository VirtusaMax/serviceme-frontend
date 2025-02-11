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
    <div className="my-12 max-w-[1600px] mx-auto flex flex-col w-full items-center px-4 py-3 bg-gradient-to-b from-white to-white">
      {/* Cover Section */}
      <div 
        className="relative w-full max-w-[1600px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/about_section/about.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-custom-blue uppercase">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-white mt-4 max-w-3xl">Fix, Build, Repair - All on ServiceMe!</p>
        </div>
      </div>

      {/* About Us Sections */}
      {[{
        title: "Who We Are",
        highlight: "Making Home Services Effortless",
        content: "ServiceMe is the leading platform connecting individuals with skilled, pre-screened professionals for household services. From home cleaning to repairs, we ensure every customer gets high-quality assistance quickly and reliably. With an easy-to-use booking system, secure payment options, and trusted professionals, we make home maintenance stress-free."
      }, {
        title: "Our Story",
        highlight: "",
        content: "ServiceMe was founded with a simple mission: to make home services accessible and convenient. It all started when our founder faced the frustration of finding reliable repair services. Seeing a gap in the market, we built ServiceMe as a seamless solution, ensuring skilled professionals are just a click away. Today, we help thousands of customers connect with trusted experts, making everyday tasks easier than ever."
      }, {
        title: "Thank You",
        highlight: "",
        content: "Thank you to everyone who has contributed to the growth of ServiceMe. From our early team members who helped shape the platform to the dedicated professionals who deliver top-notch services every day, your efforts have been invaluable. ServiceMe is more than just an app—it’s a community built on trust, convenience, and excellence."
      }].map(({ title, highlight, content }, index) => (
        <div key={index} className="w-full max-w-[1200px] bg-white shadow-lg py-12 px-6 sm:px-10 md:px-12 rounded-xl mt-10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold uppercase text-custom-yellow tracking-wide">{title}</h2>
          {highlight && <p className="text-3xl font-bold max-w-3xl mt-6 text-custom-blue">{highlight}</p>}
          <p className="text-gray-600 max-w-3xl mt-4">{content}</p>
        </div>
      ))}

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