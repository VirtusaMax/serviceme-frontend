import React, { useState } from "react";
import { IoNotificationsOutline, IoMenu } from "react-icons/io5"; // Import Icons

interface TopNavbarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  "ALL", "Cleaner", "Chef", "Painter", "Mechanic", "Plumber", "Beautician", "ChildCare", "Driver"
];

const TopNavbar: React.FC<TopNavbarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white shadow-lg max-w-[1600px] mx-auto w-full border-b border-gray-700 pt-4">
      <div className="max-w-[1600px] mx-auto w-full px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="focus:outline-none">
            <IoMenu className="text-2xl transition-transform transform hover:scale-110" />
          </button>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isDropdownOpen && (
          <div className="absolute top-14 left-0 w-full bg-gray-800 p-3 rounded-lg shadow-xl md:hidden transition-opacity duration-300 z-50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-all text-sm ${
                  selectedCategory.toLowerCase() === category.toLowerCase()
                    ? "bg-yellow-500 text-gray-900 font-semibold"
                    : "hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Categories List for Medium to Large Screens (Hidden on Small Screens) */}
        <div className="hidden md:flex flex-wrap gap-2 lg:gap-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 lg:px-4 py-2 text-xs sm:text-sm lg:text-base rounded-md transition-all shadow-sm ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-yellow-500 text-gray-900 font-semibold"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Section - Find Work Button & Notification Icon */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm lg:text-base bg-yellow-500 text-gray-900 font-semibold rounded-md shadow-md hover:bg-yellow-400 transition-all">
            Find Work
          </button>
          <IoNotificationsOutline className="text-xl sm:text-2xl cursor-pointer hover:text-yellow-500 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
