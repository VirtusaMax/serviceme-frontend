import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-amber-300 shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col sm:flex-row p-4 mb-4 border border-amber-400 opacity-90 hover:opacity-100">
      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-amber-500">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 sm:ml-4 mt-2 sm:mt-0 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold text-amber-300 hover:text-amber-400 transition-colors">
          {name}
        </h2>
        <p className="text-xs text-amber-200 mt-1">
          Category: <span className="font-medium text-amber-400">{category}</span>
        </p>
        <p className="text-xs text-amber-200">Location: {location}</p>
        <p className="text-xs text-amber-200">Phone: {phone}</p>
        <p className="text-xs text-amber-500 mt-1">Member since {date}</p>
      </div>

      <div className="flex justify-center mt-3 sm:mt-0 sm:ml-auto">
        <button
          onClick={() => navigate(`/profile/${name}`)}
          className="bg-amber-500 text-gray-900 text-xs py-1 px-4 rounded shadow hover:bg-amber-600 hover:shadow-md transition-transform duration-300 active:scale-95"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default JobCard;
