import React from "react";

interface TopNavbarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ["ALL", "Cleaner", "Chef", "Painter", "Mechanic"];

const TopNavbar: React.FC<TopNavbarProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex overflow-x-auto p-3 space-x-3 bg-gray-900 text-white">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TopNavbar;
