import React, { useState, useEffect } from "react";
import JobCard from "../components/custom-components/service_provider/JobCard";

import bg1 from "../assets/images/service_provider/bg1.png";
import TopNavbar from "../components/custom-components/topNavbar/TopNavBar";
import Navbar from "@/section/mainSection/Navbar";

// Import JSON data
import jobsData from "../data/jobs.json"; // Path to your jobs.json file

type Job = {
  name: string;
  location: string;
  phone: string;
  date: string;
  profileImage: string;
  category: string;
};

const ServiceProvider: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Set jobs from the imported JSON file
    setJobs(jobsData);
  }, []);

  const filteredJobs =
    selectedCategory === "ALL"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <>
      {/* Navbar */}
      <div className="bg-black text-white shadow-md">
        <Navbar />
      </div>

      {/* TopNavbar */}
      <div className="fixed top-14 w-full z-40 bg-black text-white shadow-md pt-5">
        <TopNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Main Content Section */}
      <div className="w-full pt-28 pb-6 flex flex-col items-center">
        <div
          className="w-full flex flex-col sm:flex-row items-center justify-center bg-opacity-50 p-6 rounded-lg shadow-lg"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover", // Ensures the image covers the full container
            backgroundPosition: "center", // Centers the background image
            minHeight: "100vh", // Ensure it takes full height on all screens
            width: "100%", // Ensure full width
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-0">
              {filteredJobs.map((job, index) => (
                <div className="mb-4" key={index}>
                  <JobCard
                    name={job.name}
                    location={job.location}
                    phone={job.phone}
                    date={job.date}
                    profileImage={job.profileImage}
                    category={job.category}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white font-semibold text-lg">
              No jobs available in this category.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
