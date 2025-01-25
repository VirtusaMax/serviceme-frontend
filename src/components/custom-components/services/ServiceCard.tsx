import React from "react";

type ServiceCardProps = {
  name: string;
  img: string;
  img1: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ name, img, img1, description }) => {
  return (
    <div className="bg-[#0E0524] h-[350px] w-fit text-black rounded-xl shadow-lg flex flex-col p-4">
      <div className="flex justify-center items-center w-full h-[175px]">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover rounded-xl border-4 border-[#FCC215]"
        />
      </div>

      <div className="relative flex justify-start mt-[-40px]">
        <div className="rounded-full ml-3">
          <img
            src={img1}
            alt={`${name} Icon`}
            className="w-[66px] h-[66px] object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 p-1 text-center">
        <p className="text-[12px] text-white font-regular m-0">{description}</p>
        <button className="bg-[#FCC215] text-[#0E0524] text-xs h-[25px] px-6 py-0 rounded-xl mt-2">
          {name}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
