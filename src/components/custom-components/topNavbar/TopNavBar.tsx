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
    <div className="bg-gray-900 text-white p-3">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <IoMenu className="text-2xl" />
          </button>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isDropdownOpen && (
          <div className="absolute top-12 left-0 w-full bg-gray-800 p-2 rounded-md shadow-lg md:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsDropdownOpen(false); // Close dropdown after selection
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                  selectedCategory === category ? "bg-blue-500 text-white" : "hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Categories List for Large Screens */}
        <div className="hidden md:flex space-x-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 sm:px-2 sm:py-1 text-base sm:text-sm rounded-lg transition-all ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Section - Find Work Button & Notification Icon */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Find Work Button */}
          <button className="px-4 py-2 sm:px-3 sm:py-1 text-base sm:text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all">
            Find Work
          </button>

          {/* Notification Icon */}
          <IoNotificationsOutline className="text-2xl sm:text-xl cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
