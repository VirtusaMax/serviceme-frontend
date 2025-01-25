import React from "react";
import { useParams } from "react-router-dom";
import workprofile1 from "../assets/images/service_provider/workprofile1.png";
import workprofile2 from "../assets/images/service_provider/workprofile2.jpg";
import workprofile3 from "../assets/images/service_provider/workprofile3.png";
import bgImage from "../assets/images/service_provider/bg1.png"; // Add your background image here

const ProfilePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  // Mock data (replace this with actual data retrieval logic)
  const profiles = [
    {
      name: "Mike S.",
      location: "Colombo",
      phone: "070 455####",
      date: "Jun 2019",
      profileImage: workprofile1,
      category: "Cleaner",
      description: "Experienced cleaner specializing in residential cleaning.",
    },
    {
      name: "John D.",
      location: "Galle",
      phone: "070 123####",
      date: "Aug 2020",
      profileImage: workprofile2,
      category: "Chef",
      description: "Professional chef with expertise in multi-cuisine dishes.",
    },
    {
      name: "Sara P.",
      location: "Kandy",
      phone: "070 789####",
      date: "Feb 2021",
      profileImage: workprofile3,
      category: "Painter",
      description: "Creative painter with experience in wall art and home painting.",
    },
  ];

  const profile = profiles.find((p) => p.name === name);

  if (!profile) {
    return <div className="text-center text-white mt-20">Profile not found</div>;
  }

  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="relative py-12">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-36 h-36 rounded-full border-4 border-amber-400 shadow-lg"
              />
              <span className="absolute bottom-0 right-0 bg-amber-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                {profile.category}
              </span>
            </div>

            {/* Name and Details */}
            <h1 className="text-4xl font-bold text-amber-400 mt-6">{profile.name}</h1>
            <p className="text-sm text-amber-300 mt-2">Location: {profile.location}</p>
            <p className="text-sm text-amber-300">Phone: {profile.phone}</p>
            <p className="text-sm text-amber-300">Member since {profile.date}</p>

            {/* Description */}
            <div className="bg-gray-800 mt-6 p-6 rounded-lg shadow-md w-full max-w-lg">
              <h2 className="text-lg font-semibold text-amber-400 mb-3">
                About {profile.name}
              </h2>
              <p className="text-md text-amber-100">{profile.description}</p>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-12 bg-gray-800 py-6">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-amber-400">Get in Touch</h2>
            <p className="text-amber-200 mt-2">
              Reach out to {profile.name} directly or contact us for more details.
            </p>
            <button className="mt-6 px-8 py-3 bg-amber-500 text-gray-900 font-bold rounded shadow-md hover:bg-amber-600 hover:shadow-lg transition-transform duration-300">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
