import { useNavigate } from "react-router-dom";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";


const RegisterDialogContent: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    console.log("Job posted successfully!");
    
    // Redirect to ServiceProvider page after submitting the form
    navigate("/postjob");
  };

  return (
    <DialogContent className="bg-gradient-to-br from-custom-blue to-custom-blue text-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
      <DialogHeader>
        <DialogTitle className="text-white text-center text-2xl font-bold mb-6 tracking-wide">
          Post Job
        </DialogTitle>
      </DialogHeader>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Category
          </label>
          <div className="relative">
            <select className="w-full px-4 py-3 pr-10 rounded-xl bg-white text-gray-800 shadow-md border border-gray-300 focus:ring-2 focus:ring-custom-yellow focus:outline-none transition duration-300 ease-in-out appearance-none">
              <option value="" disabled selected>
                Choose category
              </option>
              <option value="driving">Driving</option>
              <option value="cooking">Cooking</option>
              <option value="painting">Painting</option>
              <option value="cleaning">Home Cleaning</option>
              <option value="childcare">Child Caring</option>
            </select>
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
            className="w-1/2 px-4 py-2 bg-white text-custom-blue font-semibold rounded-xl shadow-md transition duration-300 ease-in-out hover:text-black hover:shadow-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 px-4 py-2 bg-custom-yellow text-black font-semibold rounded-xl shadow-md transition duration-300 ease-in-out hover:text-black hover:shadow-lg"
          >
            Post
            
          </button>
        </div>
      </form>
    </DialogContent>
  );
};

export default RegisterDialogContent;