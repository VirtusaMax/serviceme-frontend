import React, { useState, useEffect, ReactNode } from "react";

interface CustomCarouselProps {
  children: ReactNode[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = children.length;

  useEffect(() => {
    const autoSlideTimeout = setTimeout(() => {
      slideNext();
    }, 5000);

    return () => clearTimeout(autoSlideTimeout);
  }, [activeIndex]);

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
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

      {/* Navigation Buttons */}
      <button
        onClick={slidePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        ❮
      </button>
      <button
        onClick={slideNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-1 h-2 rounded-full ${
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
