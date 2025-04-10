import { SetStateAction, useState } from "react";
import jobData from "../data/postJobCardData.json";
import TopNavbar from "../components/custom-components/topNavbar/TopNavBar";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const PostJob = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // Number of jobs per page

  const filteredJobs = jobData.filter(
    (job) =>
      selectedCategory === "ALL" ||
      job.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Get jobs for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change Page
  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen pt-14 w-full max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="w-full z-40 pt-4 left-0 bg-white">
        <TopNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 flex-1">
          {currentJobs.map((job, i) => (
            <div
              key={i}
              className="relative hover:border-black hover:border-2 justify-between shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition duration-300 flex flex-col h-auto sm:h-[300px] md:h-[300px] lg:h-[300px] overflow-hidden"
            >
              {/* Title */}
              <h4 className="font-semibold text-gray-900 text-lg">{job.title}</h4>
              <p className="text-gray-600 font-medium">{job.name}</p>

              {/* Date and Location */}
              <div className="flex items-center text-gray-800 text-sm my-2">
                <MdDateRange className="mr-1 text-blue-500" />
                <span className="mr-3">{job.date}</span>
                <MdLocationOn className="mr-1 text-red-500" />
                <span>{job.location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm max-h-40 overflow-auto">
                {job.description}
              </p>

              {/* Category Selection */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="flex items-center border rounded-full px-2 text-sm text-gray-700 border-gray-300 bg-gray-100">
                  {job.category}
                  <IoClose className="ml-2 text-gray-500 cursor-pointer hover:text-gray-700" />
                </span>
              </div>

              {/* Contact and Share Buttons */}
              <div className="flex justify-end gap-2">
                <button className="bg-[#0E0524] text-white px-4 py-2 rounded-[10px] text-sm hover:bg-[#FCC215] hover:text-[#0E0524] transition">
                  Share
                </button>
                <button className="bg-[#0E0524] text-white px-4 py-2 rounded-[10px] text-sm hover:bg-[#FCC215] hover:text-[#0E0524] transition">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md text-sm transition ${
                currentPage === index + 1
                  ? "bg-[#FCC215] text-[#0E0524] font-bold"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostJob;
