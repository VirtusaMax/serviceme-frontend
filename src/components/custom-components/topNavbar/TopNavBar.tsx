import React, { useState } from "react";
import { GiBroom, GiChefToque, GiPaintBrush, GiMechanicGarage, GiWrench, GiLipstick, GiBabyBottle, GiSteeringWheel } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { MdWork, MdSearch } from "react-icons/md";

type Category = {
  icon: JSX.Element;
  label: string;
};

type TopNavbarProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const TopNavbar: React.FC<TopNavbarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories: Category[] = [
    { icon: <GiBroom />, label: "Cleaner" },
    { icon: <GiChefToque />, label: "Chef" },
    { icon: <GiPaintBrush />, label: "Painter" },
    { icon: <GiMechanicGarage />, label: "Mechanic" },
    { icon: <GiWrench />, label: "Plumber" },
    { icon: <GiLipstick />, label: "Beautician" },
    { icon: <GiBabyBottle />, label: "Child Care" },
    { icon: <GiSteeringWheel />, label: "Driver" },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 text-gray-800 shadow-sm">
      {/* Left Section for Categories */}
      <div className="hidden sm:flex sm:space-x-3">
        {/* 'ALL' Category */}
        <div
          className="bg-white hover:bg-gray-200 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-sm cursor-pointer"
          onClick={() => setSelectedCategory("ALL")}
        >
          <span className="font-bold">ALL</span>
        </div>
        {/* Render Other Categories */}
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:bg-gray-200 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-sm cursor-pointer"
            onClick={() => setSelectedCategory(item.label)}
          >
            <span className="text-2xl">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* Dropdown for Smaller Screens */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-white p-2 rounded-lg shadow-sm hover:bg-gray-200 focus:outline-none"
        >
          <span className="text-gray-800 font-bold">Categories</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white shadow-lg mt-2 rounded-lg w-40">
            {/* Dropdown Item for 'ALL' */}
            <div
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelectedCategory("ALL");
                setIsDropdownOpen(false);
              }}
            >
              All
            </div>
            {/* Dropdown Items for Other Categories */}
            {categories.map((item, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSelectedCategory(item.label);
                  setIsDropdownOpen(false);
                }}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Section for Actions */}
      <div className="flex items-center space-x-4">

        {/* Find Work Button */}
        <button className="flex flex-col items-center bg-white hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm transition duration-300">
          <MdSearch className="text-2xl mb-1" />
          <span className="text-sm font-bold">FIND WORK</span>
        </button>
        {/* Notifications Button */}
        <button className="p-2 bg-white hover:bg-gray-200 rounded-full shadow-sm transition duration-300">
          <FaBell className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
