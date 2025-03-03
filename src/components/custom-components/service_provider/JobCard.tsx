import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface JobCardProps {
  name: string;
  location: string;
  rating: number;
  images: string[]; // Multiple images
  description: string;
  category: string;
}

const JobCard: React.FC<JobCardProps> = ({ name, location, rating, images, description, category }) => {
  return (
    <div className="bg-white border-4 border-gray-400 hover:border-gray-500 rounded-[10px] shadow-lg p-4 w-72 transition-colors duration-200">
      {/* Smooth Image Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        className="rounded-[10px]"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`${name} ${idx}`} className="w-full h-48 object-cover rounded-[10px]" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Job Details */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-yellow-500">⭐ {rating.toFixed(1)}</p>
        </div>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 mt-2 rounded-[10px]">{category}</span>
      </div>
    </div>
  );
};

export default JobCard;
