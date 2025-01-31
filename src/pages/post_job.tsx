import React, { useState } from "react";
import jobData from "../data/postJobCardData.json";
import TopNavbar from "@/components/custom-components/topNavbar/TopNavBar";

const PostJob: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Top Navbar */}
      <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row flex-1 p-4 md:p-6 gap-4">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 flex-1 justify-center place-items-center">
          {jobData
            .filter((job) => (selectedCategory === "ALL" ? true : job.category === selectedCategory))
            .slice(0, 6)
            .map((job, i) => (
              <div key={i} className="relative bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl w-full max-w-[400px] h-auto md:h-[211px]">
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="text-bg-custom-blue hover:text-gray-500">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-bg-custom-blue hover:text-gray-500">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>

                <div className="flex items-center mb-4">
                  <img src={job.profileImage} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-700">{job.name}</h3>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                    <p className="text-gray-500 text-sm">{job.category}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 truncate">{job.description}</p>
                <p className="text-gray-500 text-xs">Date: {job.date}</p>

                <div className="flex w-full mt-4 bg-custom-blue rounded overflow-hidden">
                  <button className="w-1/2 py-2 text-white hover:bg-opacity-80">Contact</button>
                  <button className="w-1/2 py-2 text-white hover:bg-opacity-80 border-l border-white">Share</button>
                </div>
              </div>
            ))}
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:block lg:w-1/3">
          <img
            src="src/assets/images/post_job/cle_1.jpg"
            alt="House Cleaning"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
