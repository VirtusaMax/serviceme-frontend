import React from "react";
import backgroundImage from "/work_section/worksbg.png";
import ReactPlayer from "react-player";

const HowItWorks: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 px-4 sm:px-8 md:px-14 h-auto w-full top-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-85"></div>

      <div className="relative z-10 w-full">
        <h2 className="text-yellow-400 text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mt-4 animate-fade-in-up mb-8 text-left">
          HOW IT WORKS?
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden">
            <ReactPlayer
              url="https://youtu.be/0x5mf8BUJZY?si=xNZbFJSKlt9bKY4A"
              className="absolute top-0 left-0 w-full h-full"
              width="100%"
              height="100%"
              controls
              playing
              muted
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
