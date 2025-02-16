import React from "react";
import Navbar from "@/section/mainSection/Navbar";
import bg1 from "/service_provider/bg1.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-gray-50 text-gray-900 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-15 z-50 border-b border-gray-300 ">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-40 flex justify-center items-center "
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Contact Us</h1>
           
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg border border-gray-200 rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Write your message here"
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-gray-600 outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white px-6 py-3  shadow-md hover:bg-gray-900 transition rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-8  shadow-lg border border-gray-200 rounded-xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Details</h2>
          <p className="text-lg text-gray-700">Have questions? Feel free to reach us through the following channels:</p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-gray-700" />
              <p className="text-lg text-gray-900 hover:text-gray-600 transition cursor-pointer">serviceme@company.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-gray-700" />
              <p className="text-lg text-gray-900 hover:text-gray-600 transition cursor-pointer">+94 11 522####</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-gray-700" />
              <p className="text-lg text-gray-900 hover:text-gray-600 transition cursor-pointer">123 Main Street, Colombo 05</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
