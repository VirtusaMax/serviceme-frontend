import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import JobCard from "../components/custom-components/service_provider/JobCard";
import TopNavbar from "../components/custom-components/topNavbar/TopNavBar";
import Navbar from "@/section/mainSection/Navbar";
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
      <div className="bg-black text-white ">
        <Navbar />
      </div>

      <div className="fixed top-14 w-full z-40 pt-5">
        <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      <div className="w-full pt-36 pb-6 flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center bg-opacity-50 p-6 rounded-lg shadow-lg min-h-screen">
          {filteredJobs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
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
              className="text-center text-white font-semibold text-lg"
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
