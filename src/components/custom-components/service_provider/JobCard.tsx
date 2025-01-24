import React from "react";

interface JobCardProps {
  name: string;
  location: string;
  phone: string;
  date: string;
  profileImage: string;
  category: string;
}

const JobCard: React.FC<JobCardProps> = ({ name, location, phone, date, profileImage, category }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-amber-300 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col sm:flex-row p-6 mb-6 border border-amber-400 opacity-90 hover:opacity-100">
      {/* Profile Image Section */}
      <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-amber-500">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="ml-0 sm:ml-6 mt-4 sm:mt-0 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-semibold text-amber-300 hover:text-amber-400 transition-colors">
          {name}
        </h2>
        <p className="text-sm text-amber-200 mt-2">
          Category: <span className="font-medium text-amber-400">{category}</span>
        </p>
        <p className="text-sm text-amber-200 mt-1">Location: {location}</p>
        <p className="text-sm text-amber-200 mt-1">Phone: {phone}</p>
        <p className="text-xs text-amber-500 mt-2">Member since {date}</p>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-4 sm:mt-0 sm:ml-auto">
        <button className="bg-amber-500 text-gray-900 py-2 px-6 rounded shadow-md hover:bg-amber-600 hover:shadow-lg transition-transform duration-300 active:scale-95">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default JobCard;