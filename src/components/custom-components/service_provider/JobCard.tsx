import React from "react";
import CustomCarousel from "./CustomCarousel";

interface JobCardProps {
  name: string;
  location: string;
  rating: number;
  images: string[];
  description: string;
  category: string;
}

const JobCard: React.FC<JobCardProps> = ({
  name,
  location,
  rating,
  images,
  description,
  category,
}) => {
  return (
    <div className="bg-white border-4 border-gray-400 hover:border-gray-500 rounded-[10px] shadow-lg p-4 w-full max-w-sm md:max-w-md lg:max-w-lg transition duration-200">
      <CustomCarousel>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${name} ${idx}`}
            className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-[10px]"
          />
        ))}
      </CustomCarousel>

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold truncate w-3/4">{name}</h3>
          <p className="text-sm text-yellow-500">⭐ {rating.toFixed(1)}</p>
        </div>
        <p className="text-sm text-gray-600 truncate">{location}</p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{description}</p>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 mt-2 rounded-[10px]">
          {category}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
