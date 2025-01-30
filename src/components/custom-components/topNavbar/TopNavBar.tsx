import React, { useState } from "react";
import { GiBroom, GiCookingPot, GiPaintBrush, GiMechanicGarage, GiWrench, GiSteeringWheel, GiLipstick } from "react-icons/gi"; // Import GiLipstick
import { FaBell } from "react-icons/fa";
import { MdSearch, MdChildCare } from "react-icons/md"; // Import MdChildCare

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
    { icon: <GiCookingPot />, label: "Chef" },
    { icon: <GiPaintBrush />, label: "Painter" },
    { icon: <GiMechanicGarage />, label: "Mechanic" },
    { icon: <GiWrench />, label: "Plumber" },
    { icon: <GiLipstick />, label: "Beautician" }, // Replaced FaCut with GiLipstick
    { icon: <MdChildCare />, label: "ChildCare" },
    { icon: <GiSteeringWheel />, label: "Driver" },
  ];

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-200 to-gray-300 p-4 text-gray-700 shadow-lg rounded-xl backdrop-blur-md">
      {/* Categories Section */}
      <div className="hidden sm:flex sm:space-x-3">
        {/* 'ALL' Category */}
        <div className="relative group">
          <div
            className={`p-2 w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${
              selectedCategory === "ALL"
                ? "bg-gray-400 text-white shadow-md scale-105"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
            }`}
            onClick={() => setSelectedCategory("ALL")}
          >
            <span className="font-bold text-sm">ALL</span>
          </div>
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md transition-opacity duration-200">
            All Categories
          </span>
        </div>

        {/* Other Categories */}
        {categories.map((item, index) => (
          <div key={index} className="relative group">
            <div
              className={`p-2 w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${
                selectedCategory === item.label
                  ? "bg-gray-400 text-white shadow-md scale-105"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
              }`}
              onClick={() => setSelectedCategory(item.label)}
            >
              <span className="text-xl">{item.icon}</span>
            </div>
            {/* Tooltip */}
            <span className="absolute -top-15 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md transition-opacity duration-200">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Dropdown for Smaller Screens */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-gray-300 text-gray-700 p-3 rounded-xl hover:bg-gray-400 transition-all duration-300"
        >
          <span className="font-bold">Categories</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-gray-300 text-gray-700 shadow-lg mt-2 rounded-xl w-40 p-2 backdrop-blur-md">
            {/* Dropdown Item for 'ALL' */}
            <div
              className="p-2 cursor-pointer hover:bg-gray-400 rounded-md transition-all duration-200"
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
                className="p-2 cursor-pointer hover:bg-gray-400 rounded-md transition-all duration-200"
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
        <button className="flex items-center gap-2 bg-blue-300 hover:bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          <MdSearch className="text-xl" />
          <span className="text-sm font-semibold">Find Work</span>
        </button>

        {/* Notifications Button */}
        <div className="relative group">
          <button className="p-3 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition-all duration-300 transform hover:scale-110">
            <FaBell className="text-2xl text-gray-700" />
          </button>
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-md transition-opacity duration-200">
            Notifications
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
