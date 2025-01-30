import React, { useState } from "react";
import JobCard from "../components/custom-components/service_provider/JobCard";

import workprofile from "../assets/images/service_provider/painter.jpg";
import workprofile1 from "../assets/images/service_provider/workprofile1.png";
import workprofile2 from "../assets/images/service_provider/workprofile2.jpg";
import workprofile3 from "../assets/images/service_provider/workprofile3.png";
import bg1 from "../assets/images/service_provider/bg1.png";
import TopNavbar from "../components/custom-components/topNavbar/TopNavBar";
import Navbar from "@/section/mainSection/Navbar";

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

  const jobs: Job[] = [
    {
      name: "Mike S.",
      location: "Colombo",
      phone: "070 455####",
      date: "Jun 2019",
      profileImage: workprofile1,
      category: "Cleaner",
    },
    {
      name: "John D.",
      location: "Galle",
      phone: "070 123####",
      date: "Aug 2020",
      profileImage: workprofile2,
      category: "Chef",
    },
    {
      name: "Sara P.",
      location: "Kandy",
      phone: "070 789####",
      date: "Feb 2021",
      profileImage: workprofile3,
      category: "Painter",
    },
  ];

  const filteredJobs = selectedCategory === "ALL" ? jobs : jobs.filter((job) => job.category === selectedCategory);

  return (
    <>
      {/* Navbar */}
      <div className="bg-black text-white shadow-md">
        <Navbar />
      </div>

      {/* TopNavbar */}
      <div className="fixed top-14 w-full z-40 bg-black text-white shadow-md pt-5">
        <TopNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pt-28 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:col-span-1">
            <img
              src={workprofile}
              alt="Worker"
              className="object-cover rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-lg"
            />
          </div>

          {/* Job Cards Section */}
          <div
            className="lg:col-span-2 bg-opacity-50 p-6 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
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
              ))
            ) : (
              <div className="text-center text-white font-semibold">
                No jobs available in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
