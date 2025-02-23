import React from "react";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface JobCardProps {
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  category: string; // Add category field
  onViewProfile: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  name,
  location,
  rating = 4.5,
  image,
  description,
  category, // Accept category prop
  onViewProfile,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full max-w-[280px] bg-white border-2 border-black rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      {/* Image Section with margin and rounded corners */}
      <div className="w-full h-40 overflow-hidden p-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl" // Fully rounded corners (circle)
        />
      </div>

      {/* Details Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Name & Rating Row */}
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center text-sm text-gray-800 font-medium">
            <Star size={14} className="text-yellow-500 mr-1" />
            {rating}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <MapPin size={14} className="mr-1 text-gray-500" />
          {location}
        </div>

        {/* Category */}
        <div className="text-sm text-gray-600 mt-2">
          <p className="font-semibold text-gray-800">{category}</p> 
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {/* View Profile Button */}
        <button
          onClick={onViewProfile}
          className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold"
        >
          View Profile
        </button>
      </div>
    </motion.div>
  );
};

export default JobCard;
