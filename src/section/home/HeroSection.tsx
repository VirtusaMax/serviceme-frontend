import React from "react";
import heroImg from "../../assets/images/hero_section/heropic.png";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import PostJobDialogContent from "@/components/dialog/PostJobDialogContent";
import FindJobDialogContent from "@/components/dialog/FindJobDialogContent";

const HeroSection: React.FC = () => {
  return (
    <div className=" bg-[#0E0524] flex flex-col md:flex-row h-[800px] md:h-[650px] justify-center items-center">
      {/* Left Section */}
      <div className="relative flex flex-col justify-center py-20 px-6 md:pr-16 xl:pr-40 md:py-0 md:w-1/2 top-16 md:top-6">
        <div className="text-center text-white md:text-left space-y-4">
          <p className="text-3xl md:text-5xl font-semibold lg:text-6xl">
            Your Trusted Partner for Home Services
          </p>
          <p className="flex-wrap">
            New way to find people to do your jobs. If you are one of those
            thousands of people who struggle to find people to do jobs or
            struggle to find jobs, this is for you.
          </p>
          <div className="w-full flex justify-center md:justify-start xl:justify-center">
            <div
              className="flex flex-col xl:flex-row w-8/12 md:w-10/12 xl:w-full space-y-4 xl:space-y-2
              xl:space-x-4"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-xl mt-2 hover:bg-custom-white">
                    Explore Opportunities
                  </button>
                </DialogTrigger>
                <FindJobDialogContent />
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-xl mt-2 hover:bg-custom-white">
                    Find Professionals
                  </button>
                </DialogTrigger>
                <PostJobDialogContent />
              </Dialog>
              
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="flex justify-center items-center w-full ">
          <img src={heroImg} alt="Hero" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
