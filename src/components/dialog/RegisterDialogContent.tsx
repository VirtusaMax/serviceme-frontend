import React, { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const RegisterDialogContent: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between Sign Up and Sign In forms

  return (
    <DialogContent className="bg-gradient-to-br from-custom-blue to-custom-blue text-white p-6 rounded-xl shadow-xl max-w-md mx-auto">
      <DialogHeader>
        <DialogTitle className="text-white text-center text-xl font-semibold mb-4">
          {isSignIn ? "Welcome Back!" : "Join Us Today!"}
        </DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        {!isSignIn ? (
          <>
            {/* Sign Up Form */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="7x xxx xxx"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
              <input
                type="text"
                placeholder="Your Location"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a Password"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter Password"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-5 py-2 bg-custom-yellow hover:bg-custom-yellow text-black font-semibold rounded-full shadow-lg transition-all"
              >
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Sign In Form */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-5 py-2 bg-custom-yellow hover:bg-custom-yellow text-white font-semibold rounded-full shadow-lg transition-all"
              >
                Sign In
              </button>
            </div>
          </>
        )}
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-300 text-sm">
          {isSignIn ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className="text-custom-yellow hover:underline"
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-custom-yellow hover:underline"
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
            </>
          )}
        </p>
      </div>
    </DialogContent>
  );
};

export default RegisterDialogContent;
