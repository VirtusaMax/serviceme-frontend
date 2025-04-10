import React, { useState, useEffect, ReactNode } from "react";

interface CustomCarouselProps {
  children: ReactNode[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const totalSlides = children.length;
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Generate random durations for each card (between 3s - 7s)
  const slideDurations = Array.from({ length: totalSlides }, () =>
    Math.floor(Math.random() * (7000 - 3000 + 1) + 3000)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      slideNext();
    }, slideDurations[activeIndex]); // Use specific duration for current slide

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
