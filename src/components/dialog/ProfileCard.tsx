import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProfileCardProps {
  img: string;
  name: string;
  role: string;
  location: string;
  contact: string;
  rating: number;
  reviews: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  img,
  name,
  role,
  location,
  contact,
  rating,
  reviews,
}) => {
  const [, setIsOpen] = useState(false);

  return (
    <>
      {/* Dialog Trigger */}
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="cursor-pointer bg-white shadow-lg rounded-lg p-4 max-w-xs hover:shadow-2xl transition-transform transform hover:scale-105 hover:text-custom-blue"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={img}
              alt={name}
              className="rounded-t-lg w-full h-50 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-custom-yellow">Cleaner</p>
              <p className="text-sm text-gray-800">Negombo</p>
              <p className="text-sm text-gray-500 text-justify">I'm Jessica, a dedicated cleaner from Negombo. I take pride in keeping spaces spotless and organized, ensuring a fresh and welcoming environment for every home or office I clean.</p>

              <p className="text-yellow-500 text-sm ">
                {`⭐⭐⭐⭐⭐ `}
              </p>
            </div>
          </div>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-row items-center text-center border-4">
            <div>

              <img
                src={img}
                alt={name}
                className="w-32 h-32 rounded-full border-4 border-yellow-400 mb-4"
              /></div>

            <h3 className="text-white text-xl font-bold">Sri Lanka</h3>
            <p className="text-gray-600">{role}</p>
            <p className="text-sm text-gray-500">{location}</p>
            <p className="text-sm text-gray-500">{contact}</p>
            <p className="text-yellow-500 text-sm">
              {`⭐ ${rating}`} ({reviews} reviews)
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileCard;
