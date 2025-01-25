import React, { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const RegisterDialogContent: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(false); // State to toggle between Sign Up and Sign In forms

  return (
    <DialogContent className="bg-custom-blue text-custom-yellow p-7 rounded-md border border-custom-yellow">
      <DialogHeader>
        <DialogTitle className="text-custom-yellow text-center">
          {isSignIn ? "Login to post job" : "Create an account to post a job"}
        </DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        {!isSignIn ? (
          <>
            {/* Sign Up Form */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="text"
                placeholder="7x xxx xxx"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your password again"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-custom-blue rounded-md hover:bg-yellow-600 transition"
              >
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Sign In Form */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-custom-blue rounded-md hover:bg-yellow-600 transition"
              >
                Sign In
              </button>
            </div>
          </>
        )}
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-300">
          {isSignIn ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className="text-yellow-500 hover:underline"
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
                className="text-yellow-500 hover:underline"
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
