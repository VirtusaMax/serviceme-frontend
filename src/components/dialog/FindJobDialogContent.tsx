import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const RegisterDialogContent: React.FC = () => {
  return (
    <DialogContent className="bg-gradient-to-br from-custom-blue to-custom-blue text-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
      <DialogHeader>
        <DialogTitle className="text-white text-center text-2xl font-bold mb-6 tracking-wide">
          Find Work
        </DialogTitle>
      </DialogHeader>

      <form className="space-y-5">
        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Category
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-3 pr-10 rounded-xl bg-white text-gray-800 shadow-md border border-gray-300 focus:ring-2 focus:ring-custom-yellow focus:outline-none transition duration-300 ease-in-out appearance-none"
            >
              <option value="" disabled selected>
                Choose category
              </option>
              <option value="driving">Driving</option>
              <option value="cooking">Cooking</option>
              <option value="painting">Painting</option>
              <option value="cleaning">Home Cleaning</option>
              <option value="childcare">Child Caring</option>
            </select>

            {/* Custom Arrow Icon */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter job details here..."
            className="w-full h-28 px-4 py-3 rounded-xl bg-white text-gray-800 border border-gray-300 shadow-md focus:ring-2 focus:ring-custom-yellow focus:outline-none resize-none transition duration-300 ease-in-out"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center space-x-4">
          <button
            type="button"
            className="w-1/2 px-4 py-2 bg-white text-custom-blue font-semibold rounded-xl shadow-md transition duration-300 ease-in-out  hover:text-black hover:shadow-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 px-4 py-2 bg-custom-yellow text-black font-semibold rounded-xl shadow-md transition duration-300 ease-in-out  hover:text-black hover:shadow-lg"
          >
            Post
          </button>
        </div>
      </form>
    </DialogContent>
  );
};

export default RegisterDialogContent;
