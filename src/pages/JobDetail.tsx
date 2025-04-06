import { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"; // Icons for expanding response
import jobsData from "../data/jobs.json";

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobsData.find((job) => job.id === Number(jobId));
  const [isFavorited, setIsFavorited] = useState(false);
  const [visibleResponses, setVisibleResponses] = useState({});

  if (!job) {
    return <div className="text-center text-gray-600 mt-10">Job not found.</div>;
  }

  const toggleFavorite = () => setIsFavorited((prev) => !prev);

  const shareJob = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Job link copied to clipboard!");
  };

  const toggleResponse = (index) => {
    setVisibleResponses((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  return (
    <div className="py-20 max-w-5xl mx-auto p-6 mt-5 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Job Image */}
        <div className="relative w-full md:w-2/3">
          <img
            src={job.image}
            alt={job.name}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Job Details */}
        <div className="w-full md:w-1/3 space-y-4 relative">
          {/* Action Icons */}
          <div className="absolute top-0 right-0 flex gap-4">
            <button onClick={toggleFavorite} className="text-3xl text-red-500 hover:scale-110 transition">
              {isFavorited ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button onClick={shareJob} className="text-3xl text-gray-600 hover:scale-110 transition">
              <BiShareAlt />
            </button>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{job.name}</h1>
          <p className="text-gray-700">{job.description}</p>
          <p className="text-gray-800"><strong>Location:</strong> {job.location}</p>
          <p className="text-yellow-500"><strong>Rating:</strong> {job.rating} ⭐</p>
          <p className="text-blue-600"><strong>Category:</strong> {job.category}</p>

          {/* Pricing & Actions */}
          <div className="mt-6 p-6 border rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">Standard Package</h2>
            <p className="text-gray-600 text-sm mt-2">Full job details, customization, and premium support.</p>
            <p className="text-2xl font-bold mt-3">$600</p>

            <button className="text-white w-full border bg-custom-blue py-3 rounded-[15px] mt-2 hover:bg-custom-yellow transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* About Gig (About Me) Section */}
      <p className="mt-12 p-8 bg-white rounded-2xl ">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <p className="text-gray-700 text-lg text-center">{job.about}</p>
      </p>

      <div className="mt-12 p-8 bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
        {job.reviews?.length ? (
          <div className="space-y-6">
            {job.reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md border"
              >
                {/* Reviewer Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.profileImage}
                    alt={review.name}
                    className="w-12 h-12 object-cover rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="text-lg font-semibold">{review.name}</p>
                    <p className="text-gray-500">{review.location}</p>
                  </div>
                </div>

                {/* Rating & Date */}
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">
                      {i < review.rating ? <AiFillStar /> : <AiOutlineStar />}
                    </span>
                  ))}
                  <span className="text-gray-500 text-sm ml-2">
                    • {review.date}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 mt-3">{review.comment}</p>

                {/* Price & Duration */}
                <div className="flex justify-between mt-4 text-gray-900 font-semibold">
                  <p>
                    <span className="text-gray-500">Price:</span> {review.price}
                  </p>
                  <p>
                    <span className="text-gray-500">Duration:</span>{" "}
                    {review.duration}
                  </p>
                </div>

                {/* Seller's Response (Toggle) */}
                {review.sellerResponse && (
                  <div className="mt-4 p-3 border-t">
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleResponse(index)}
                    >
                      <p className="text-gray-600 font-medium">Service provider's Response</p>
                      <span className="text-xl text-gray-600">
                        {visibleResponses[index] ? <FiMinusCircle /> : <FiPlusCircle />}
                      </span>
                    </div>

                    {/* Smooth Transition Effect */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${visibleResponses[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="text-gray-700 mt-1">{review.sellerResponse}</p>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default JobDetail;
