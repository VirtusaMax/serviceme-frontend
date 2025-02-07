import React from "react";
import truck from "src/assets/images/about_section/truck.png";
import workers from "src/assets/images/about_section/workers.png";
import help from "src/assets/images/about_section/help.png";
import okHand from "src/assets/images/about_section/ok_hand.png";
import backgroundImage from "@/assets/images/about_section/about2.jpg";

// Static data
const servicesData = [
  {
    title: "FAST & RELIABLE HOME SERVICES",
    description: "Looking for a fast fix, a spotless home, or a well-kept lawn? We connect you with trusted local experts ready to help!",
    icon: "truck",
  },
  {
    title: "LOCAL EXPERTS AT YOUR SERVICE",
    description: "Find skilled freelancers in your neighborhood for any home task repairs, cleaning, yard work, and more all at your convenience.",
    icon: "workers",
  },
  {
    title: "SUPPORTING YOUR COMMUNITY",
    description: "We believe in empowering local professionals while simplifying your life. Every service supports your community and is completed with the utmost care.",
    icon: "help",
  },
  {
    title: "SIMPLIFY YOUR LIFE",
    description: "Book easily, communicate directly, and enjoy hassle-free service—all in one platform!",
    icon: "okHand",
  }
];

// Map through the data to assign the correct icon image based on the icon name
const services = servicesData.map((service) => {
  switch (service.icon) {
    case "truck":
      service.icon = truck;
      break;
    case "workers":
      service.icon = workers;
      break;
    case "help":
      service.icon = help;
      break;
    case "okHand":
      service.icon = okHand;
      break;
    default:
      service.icon = ""; // Default case
  }
  return service;
});

interface AboutUsProps {
  data: typeof services; // Type of the services array
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  return (
    <section
      className="relative isolate overflow-hidden text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
        minHeight: "500px", // Fixed minimum height
        maxHeight: "700px", // Maximum height for large screens
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
      <div className="text-black py-12 px-6 sm:px-8 lg:px-16 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-screen-xl">
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
