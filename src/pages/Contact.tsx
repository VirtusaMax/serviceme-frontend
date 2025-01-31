import React from "react";
import Navbar from "@/section/mainSection/Navbar";
import bg1 from "../assets/images/service_provider/bg1.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-white text-gray-800 min-h-screen">
      {/* Navbar */}
      <div className="bg-white text-gray-800 py-5 shadow-lg">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white mt-3">
            We're here to assist you. Reach out to us today!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform transition-transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                placeholder="Write your message here"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition-all duration-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 transform transition-transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have any questions or concerns? Feel free to contact us via email,
            phone, or visit our office.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-indigo-400" />
              <p className="text-lg text-gray-800 hover:text-indigo-400 transition">
                service@company.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-indigo-400" />
              <p className="text-lg text-gray-800 hover:text-indigo-400 transition">
                +94 11 522####
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-indigo-400" />
              <p className="text-lg text-gray-800 hover:text-indigo-400 transition">
                123 Main Street, Colombo 05
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
