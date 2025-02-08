import React, { useState } from "react";
import { Star, MapPin, Phone, User } from "lucide-react";
import { motion } from "framer-motion";

interface JobCardProps {
  name: string;
  location: string;
  rating?: number;
  image: string;
  phone: string;
  onViewProfile: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ name, location, rating = 4.5, image, phone, onViewProfile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-xs bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="w-full h-40 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Details Section */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* Location */}
        <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
          <MapPin size={16} className="mr-1 text-gray-500" />
          {location}
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
          <Phone size={16} className="mr-1 text-gray-500" />
          {phone}
        </div>

        {/* Rating Section */}
        <div className="flex items-center justify-center mt-2">
          <Star size={18} className="text-yellow-500" />
          <span className="ml-1 text-sm text-gray-800 font-medium">{rating}</span>
        </div>

        {/* View Profile Button */}
        <div className="flex justify-end">
          <button
            onClick={onViewProfile}
            className="mt-4 w-32 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105"
          >
            <User size={16} className="inline-block" /> View Profile
          </button>
        </div>
      </div>

      {/* Pop-up on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }} 
           
        >
          
        </motion.div>
      )}
    </motion.div>
  );
};

export default JobCard;