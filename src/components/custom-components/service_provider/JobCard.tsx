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
    <div className="w-72 bg-white shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 ease-in-out transform hover:-translate-y-2">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 relative flex justify-between items-center">
        {/* Profile Image */}
        <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-md">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
        {/* Name and Category on Right */}
        <div className="text-right">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm mt-1 opacity-80">{category}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5">
        <h4 className="text-lg font-bold text-gray-800">{location}</h4>
        <p className="text-sm text-gray-600">📞 {phone}</p>
        <p className="text-xs text-gray-400 mt-1">Member since {date}</p>

        {/* View Profile Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-gray-900 text-white px-5 py-2 text-sm font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;