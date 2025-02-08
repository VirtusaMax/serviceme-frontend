import React from "react";
import { Star, MapPin, Phone, User } from "lucide-react";

interface JobCardProps {
  name: string;
  location: string;
  rating?: number;
  image: string;
  phone: string;
  onViewProfile: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ name, location, rating = 4.5, image, phone, onViewProfile }) => {
  return (
    <div className="w-48 sm:w-56 md:w-64 bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-full h-32 sm:h-40 md:h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-t-xl" />
      </div>

      {/* Details Section */}
      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>

        {/* Location */}
        <div className="flex items-center text-xs text-gray-600 mt-1">
          <MapPin size={14} className="mr-1 text-gray-500" />
          {location}
        </div>

        {/* Phone */}
        <div className="flex items-center text-xs text-gray-600 mt-1">
          <Phone size={14} className="mr-1 text-gray-500" />
          {phone}
        </div>

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          <Star size={16} className="text-yellow-500" />
          <span className="ml-1 text-sm text-gray-800 font-medium">{rating}</span>
        </div>

        {/* View Profile Button */}
        <div className="flex justify-end mt-3">
          <button
            onClick={onViewProfile}
            className="w-32 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105"
          >
            <User size={16} /> View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;