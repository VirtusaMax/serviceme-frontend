import React from "react";
import backgroundImage from "@/assets/images/about_section/about1.png";

interface AboutUsItem {
  icon: string;
  title: string;
  description: string;
}

interface AboutUsProps {
  data: AboutUsItem[];
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <section
      className="relative isolate overflow-hidden text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Header Content */}
      <div className="text-center py-16 px-4 sm:px-8 lg:px-16">
        <p className="text-sm sm:text-lg uppercase tracking-widest animate-fade-in">
          Service Me
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 animate-fade-in-up">
          About Our Services
        </h1>
      </div>

      {/* Cards Section */}
      <div className="text-black py-12 px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mx-auto max-w-7xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 bg-opacity-75 rounded-xl shadow-lg p-4 sm:p-6 text-center border-2 border-custom-yellow transform transition-transform hover:scale-105 animate-fade-in-delay"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-custom-yellow rounded-full flex items-center justify-center border-2 border-yellow-400">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
