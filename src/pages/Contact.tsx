import React from "react";
import Navbar from "@/section/mainSection/Navbar";
import bg1 from "../assets/images/service_provider/bg1.png";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen">
      {/* Navbar */}
      <div className="bg-black text-white py-5 shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-amber-200 mt-4">
            We’re here to help. Get in touch with us today!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-amber-400 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-amber-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-amber-100 border border-amber-400 focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-amber-100 border border-amber-400 focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-300 mb-1">
                Message
              </label>
              <textarea
                placeholder="Write your message here"
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-amber-100 border border-amber-400 focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-amber-600 hover:shadow-lg transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-semibold text-amber-400 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-amber-200">
            Have any questions or concerns? Contact us via email, phone, or visit our office.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-amber-400">📧</span>
              <p className="text-lg text-amber-100">serviceme@.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-amber-400">📞</span>
              <p className="text-lg text-amber-100">+94 11 522#### </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-amber-400">📍</span>
              <p className="text-lg text-amber-100">123 Main Street, Colombo 05 </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <iframe
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.93452222858!2d79.86507274586334!3d6.893618924665669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2592764b7f8cf%3A0x47a80f45a8e8d839!2sColombo%2005!5e0!3m2!1sen!2slk!4v1674119843894!5m2!1sen!2slk"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
