import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Profile Preview - ShadCN Card */}
        <Card className="cursor-pointer shadow-lg  bg-custom-blue rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hover:shadow-xl transition-transform transform hover:scale-95 hover:text-custom-blue border-2 border-custom-yellow">
          <img
            src={img}
            alt={name}
            className="rounded-t-lg w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72 xl:h-80"
          />
          <CardHeader className="text-center">
            <CardTitle className="text-lg font-bold text-white">{name}</CardTitle>
            <p className="text-custom-yellow">{role}</p>
            <p className="text-sm text-gray-200">{location}</p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-400">
              I'm {name}, a dedicated {role} from {location}. I take pride in
              keeping spaces spotless and organized.
            </p>
            <p className="text-custom-yellow text-sm">{`⭐ ${rating}`} ({reviews} reviews)</p>
          </CardContent>
        </Card>
      </DialogTrigger>

      {/* Dialog - Detailed Profile View */}
      <DialogContent className="max-w-lg w-full rounded-lg p-6 bg-white border-2 border-gray-800">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
          <img
            src={img}
            alt={name}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full "
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">{name}</h3>
            <h3 className="text-lg font-bold text-custom-yellow">{role}</h3>
            <p className="text-gray-600">{location}</p>
            <p className="text-sm text-gray-500">{contact}</p>
            <p className="text-yellow-500 text-sm">
              {`⭐ ${rating}`} ({reviews} reviews)
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileCard;
