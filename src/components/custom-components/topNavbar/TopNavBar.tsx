import React, { useState } from "react";
import { GiBroom, GiChefToque, GiPaintBrush, GiMechanicGarage, GiWrench, GiLipstick, GiBabyBottle, GiSteeringWheel } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

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
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-4 text-amber-300 shadow-md">
      {/* Categories Section */}
      <div className="hidden sm:flex sm:space-x-3">
        {/* 'ALL' Category */}
        <div
          className={`p-3 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer ${
            selectedCategory === "ALL" ? "bg-amber-500 text-black" : "bg-gray-800 hover:bg-gray-600"
          }`}
          onClick={() => setSelectedCategory("ALL")}
        >
          <span className="font-bold">ALL</span>
        </div>
        {/* Render Other Categories */}
        {categories.map((item, index) => (
          <div
            key={index}
            className={`p-3 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer ${
              selectedCategory === item.label ? "bg-amber-500 text-black" : "bg-gray-800 hover:bg-gray-600"
            }`}
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
          className="bg-gray-800 text-amber-300 p-3 rounded-lg hover:bg-gray-600"
        >
          <span className="font-bold">Categories</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-gray-800 text-amber-300 shadow-lg mt-2 rounded-lg w-40">
            {/* Dropdown Item for 'ALL' */}
            <div
              className="p-2 cursor-pointer hover:bg-gray-600"
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
                className="p-2 cursor-pointer hover:bg-gray-600"
                onClick={() => {
                  setSelectedCategory(item.label);
                  setIsDropdownOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        {/* Find Work Button */}
        <button className="flex flex-col items-center bg-gray-800 hover:bg-gray-600 text-amber-300 px-4 py-2 rounded-lg shadow-sm transition duration-300">
          <MdSearch className="text-2xl mb-1" />
          <span className="text-sm font-bold">FIND WORK</span>
        </button>
        {/* Notifications Button */}
        <button className="p-3 bg-gray-800 hover:bg-gray-600 rounded-full shadow-sm transition duration-300">
          <FaBell className="text-2xl text-amber-300" />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
