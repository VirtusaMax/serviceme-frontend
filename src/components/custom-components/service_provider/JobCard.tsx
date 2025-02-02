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
    <div className="bg-black bg-opacity-70 text-white shadow-xl rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center p-6 space-x-6">
      {/* Profile Image */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Job Details */}
      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-white">{name}</h2>
        <p className="text-sm text-gray-400">
          <span className="font-medium text-white">{category}</span>
        </p>
        <p className="text-sm text-gray-300">{location}</p>
        <p className="text-sm text-gray-300">{phone}</p>
        <p className="text-xs text-gray-500">Member since {date}</p>
      </div>

      {/* View Profile Button (Smaller Size) */}
      <div>
        <button className="bg-white bg-opacity-80 text-black text-xs px-3 py-1 rounded-md shadow-md hover:bg-gray-200 hover:shadow-lg transition-all duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default JobCard;
