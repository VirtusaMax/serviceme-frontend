import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ProfileCard from "@/components/dialog/ProfileCard";
import RegisterDialogContent from "@/components/dialog/RegisterDialogContent";

interface Profile {
  img: string;
  name: string;
  role: string;
  location: string;
  contact: string;
  rating: number;
  reviews: number;
}

interface RegisterProps {
  profiles: Profile[];
}

const Register: React.FC<RegisterProps> = ({ profiles }) => {
  return (
    <div className=" relative isolate overflow-hidden bg-gradient-to-br from-custom-blue via-custom-blue to-custom-blue py-16 sm:py-20 px-6 sm:px-10 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:ml-[-40px]">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            Meet the Best Service Providers
          </h2>
          <p className="mt-4 text-lg sm:text-lg text-gray-300 leading-relaxed px-4 md:px-0">
            Join our platform today to connect with trusted professionals ready to assist you. Sign up now and get started!
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-block px-1 py-1 sm:px-7 sm:py-4 bg-custom-yellow text-custom-blue font-semibold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg hover:bg-custom-white transition-transform duration-300 transform hover:scale-105">
                  REGISTER NOW
                </button>
              </DialogTrigger>
              <RegisterDialogContent />
            </Dialog>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
            loop={true}
            coverflowEffect={{
              rotate: 40,
              stretch: 5,
              depth: 120,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: false }}
            grabCursor={true}
            className="w-full mx-auto"
          >
            {profiles.map((profile, index) => (
              <SwiperSlide key={index} className="text-center">
                <div className="relative mt-6 mb-12 bg-custom-blue border-4 border-custom-white rounded-xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                  <img
                    src={profile.img}
                    alt={profile.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 bg-custom-blue">
                    <h3 className="text-lg font-semibold text-yellow-400">{profile.name}</h3>

                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="mt-3 px-4 py-2 text-sm bg-yellow-500 text-custom-blue font-medium hover:bg-custom-white transition duration-300 rounded-xl">
                          View Profile
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <ProfileCard
                          img={profile.img}
                          name={profile.name}
                          role={profile.role}
                          location={profile.location}
                          contact={profile.contact}
                          rating={profile.rating}
                          reviews={profile.reviews}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Register;
