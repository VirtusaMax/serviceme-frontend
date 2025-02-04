import React from "react";

interface JobCardProps {
  name: string;
  location: string;
  phone: string;
  date: string;
  profileImage: string;
  category: string;
}

const JobCard: React.FC<JobCardProps> = ({
  name,
  location,
  phone,
  date,
  profileImage,
  category,
}) => {
  return (
    <div className="w-72 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r bg-black text-white p-6 relative flex justify-between items-center">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        {/* Name and Category on Right */}
        <div className="text-right">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm mt-1">{category}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <h4 className="text-lg font-bold">{location}</h4>
        <p className="text-sm text-gray-500">📞 {phone}</p>
        <p className="text-xs text-gray-400 mt-1">Member since {date}</p>

        {/* View Profile Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-black text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-gray-600 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
