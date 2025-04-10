import React, { useState, useEffect } from "react";
import ServiceCard from "../../components/custom-components/services/ServiceCard";
import serviceCardData from "../../data/serviceCardData.json";
import "../../index.css";

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 554) {
        setVisibleCards(1);
      } else if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < serviceCardData.length ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="relative m-2 p-8">
      <div className="mt-5 m-1">
        <p className="text-3xl font-bold text-yellow-500 text-left mb-5">
          OUR SERVICES
        </p>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute -left-10 top-1/2 transform -translate-y-[70%] z-10 p-1 bg-yellow-500 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}
              style={{ width: "30px", height: "30px" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            className={`grid gap-4 w-full overflow-hidden ${
              visibleCards === 4 ? "grid-cols-4" :
              visibleCards === 3 ? "grid-cols-3" :
              visibleCards === 2 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {serviceCardData.slice(currentIndex, currentIndex + visibleCards).map((d, index) => (
              <div key={index}>
                <ServiceCard
                  name={d.name}
                  img={d.img}
                  img1={d.img1}
                  description={d.description}
                />
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute -right-10 top-1/2 transform -translate-y-[70%] z-10 p-1 bg-yellow-500 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}
              style={{ width: "30px", height: "30px" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
