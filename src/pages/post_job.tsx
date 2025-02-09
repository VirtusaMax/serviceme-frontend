import { useState, useEffect } from "react";
import jobData from "../data/postJobCardData.json";
import TopNavbar from "@/components/custom-components/topNavbar/TopNavBar";

const PostJob = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [columns, setColumns] = useState(2);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setColumns(1);
        setShowImage(false);
      } else if (window.innerWidth < 1200) {
        setColumns(2);
        setShowImage(false);
      } else {
        setColumns(2);
        setShowImage(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredJobs = selectedCategory === "ALL"
    ? jobData
    : jobData.filter((job) => job.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="flex flex-col min-h-screen pt-28 px-4 md:px-6 lg:px-8 w-full max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="fixed top-14 w-full z-40 pt-4 left-0 bg-white shadow-md">
        <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col pt-24 lg:flex-row flex-1 p-4 md:p-6 gap-4 w-full">
        {/* Cards Section */}
        <div
          className={`grid grid-cols-${columns} gap-2 flex-1`}
          style={{ gridAutoRows: "minmax(auto, 1fr)" }}
        >
          {filteredJobs.slice(0, 6).map((job, i) => (
            <div
              key={i}
              className="relative bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl w-full md:w-[428px] h-auto md:h-[211px]"
            >
              {/* Edit and Delete Icons */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="text-bg-custom-blue hover:text-gray-500">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-bg-custom-blue hover:text-gray-500">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
              <div className="flex items-center mb-4">
                {/* Profile Image */}
                <img
                  src={job.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-700">{job.name}</h3>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                  <p className="text-gray-500 text-sm">{job.category}</p>
                </div>
              </div>
              {/* Description */}
              <p className="text-gray-700 mb-4 truncate">{job.description}</p>
              <p className="text-gray-500 text-xs">Date: {job.date}</p>
              <div className="flex justify-between mt-4 px-4 md:px-20 bg-custom-blue">
                <button className="bg-custom-blue px-6 md:px-10 py-2 rounded text-white">
                  Contact
                </button>
                <button className="bg-custom-blue px-6 md:px-10 py-2 rounded text-white">
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Right Image Section - Only visible above 1200px */}
        {showImage && (
          <div className="hidden xl:block w-full lg:w-1/3">
            <img
              src="/post_job/cle_1.jpg"
              alt="House Cleaning"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostJob;
