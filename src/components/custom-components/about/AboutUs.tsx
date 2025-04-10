import React from "react";

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
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-300 text-custom-blue py-20 px-6 md:px-12">
      {/* Header Content */}
      <div className="text-center">
        <p className="font-bold text-sm sm:text-lg uppercase tracking-widest text-custom-yellow animate-fade-in">
          Service Me
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 animate-fade-in-up">
          About Our Services
        </h1>
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-105 p-6 text-center border border-gray-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800 transition duration-300 group-hover:text-yellow-600">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {item.description}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
