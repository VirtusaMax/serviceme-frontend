import React, { useState } from "react";
import { GiBroom, GiCookingPot, GiPaintBrush, GiMechanicGarage, GiWrench, GiSteeringWheel, GiLipstick } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { MdSearch, MdChildCare } from "react-icons/md";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  const categories: Category[] = [
    { icon: <GiBroom />, label: "Cleaner" },
    { icon: <GiCookingPot />, label: "Chef" },
    { icon: <GiPaintBrush />, label: "Painter" },
    { icon: <GiMechanicGarage />, label: "Mechanic" },
    { icon: <GiWrench />, label: "Plumber" },
    { icon: <GiLipstick />, label: "Beautician" },
    { icon: <MdChildCare />, label: "ChildCare" },
    { icon: <GiSteeringWheel />, label: "Driver" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredCategories(categories);
    } else {
      setFilteredCategories(
        categories.filter((category) =>
          category.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-200 to-gray-300 p-4 text-gray-700 shadow-lg rounded-xl backdrop-blur-md w-full">
      
      {/* Categories Section */}
      <div className="hidden sm:flex sm:space-x-3">
        {/* 'ALL' Category */}
        <div className="relative">
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
        </div>

        {/* Filtered Categories */}
        {filteredCategories.length > 0 ? filteredCategories.map((item, index) => (
          <div key={index} className="relative">
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
          </div>
        )) : categories.map((item, index) => (
          <div key={index} className="relative">
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
          </div>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="p-2 rounded-lg border border-gray-300 focus:outline-none"
          placeholder="Search category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          onClick={handleSearch}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <MdSearch className="text-xl" />
          <span className="text-sm font-semibold">Find Work</span>
        </button>
      </div>

      {/* Notifications Button */}
      <div className="relative">
        <button className="p-3 bg-gray-300 hover:bg-gray-400 rounded-full shadow-md transition-all duration-300 transform hover:scale-110">
          <FaBell className="text-2xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
