import React from "react";
import { IoNotificationsOutline } from "react-icons/io5"; // Import Icons

interface TopNavbarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  "ALL", "Cleaner", "Chef", "Painter", "Mechanic", "Plumber", "Beautician", "ChildCare", "Driver"
];

const TopNavbar: React.FC<TopNavbarProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-gray-900 text-white shadow-lg max-w-[1600px] mx-auto w-full border-b border-gray-700 pt-4">
      <div className="max-w-[1600px] mx-auto w-full px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Categories List for Medium to Large Screens */}
        <div className="flex overflow-x-auto space-x-4 md:space-x-6 py-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all ${
                selectedCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg"
                  : "bg-gray-700 hover:bg-gray-600 hover:scale-105 transform duration-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Section - Hidden on Small Screens */}
        <div className="hidden md:flex items-center space-x-3 sm:space-x-5">
          <button className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm lg:text-base bg-yellow-500 text-gray-900 font-semibold shadow-md hover:bg-yellow-400 transition-all">
            Find Work
          </button>
          <IoNotificationsOutline className="text-xl sm:text-2xl cursor-pointer hover:text-yellow-500 transition-all" />
        </div>

        {/* Mobile View - Empty section for Mobile */}
        <div className="md:hidden"></div>
      </div>
    </div>
  );
};

export default TopNavbar;
