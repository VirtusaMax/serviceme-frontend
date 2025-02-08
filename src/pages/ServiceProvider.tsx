import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import JobCard from "../components/custom-components/service_provider/JobCard";
import TopNavbar from "../components/custom-components/topNavbar/TopNavBar";
import jobsData from "../data/jobs.json";

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
    setJobs(jobsData);
  }, []);

  const filteredJobs =
    selectedCategory === "ALL"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  // Handle View Profile button click
  const handleViewProfile = (job: Job) => {
    console.log(`Viewing profile of ${job.name}`);
    // You can navigate to a profile page or open a modal here
  };

  return (
    <>
      <div className="fixed top-14 w-full z-40 pt-5">
        <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      <div className="w-full py-16 pt-36 flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-center bg-opacity-50 p-6 rounded-lg shadow-lg min-h-[80vh] pt-5">
          {filteredJobs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4 pt-10 auto-rows-min"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                >
                  <JobCard
                    name={job.name}
                    location={job.location}
                    phone={job.phone}
                    image={job.profileImage}
                    onViewProfile={() => handleViewProfile(job)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center text-gray-700 font-semibold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No jobs available in this category.
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;