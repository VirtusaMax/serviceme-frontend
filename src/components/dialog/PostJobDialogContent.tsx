import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const RegisterDialogContent: React.FC = () => {
  return (
    <DialogContent className="bg-gradient-to-br from-custom-blue to-custom-blue text-white p-6 rounded-xl shadow-xl max-w-md mx-auto">
      <DialogHeader>
        <DialogTitle className="text-white text-center text-xl font-semibold mb-4">
          Post Job
        </DialogTitle>
      </DialogHeader>
      <form className="space-y-4">
        {/* Dropdown Field for "Choose Category" */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Select Category
          </label>
          <select
            className="w-full px-2 py-2 rounded-xl bg-white text-gray-800 shadow border border-gray-300 focus:ring-2 focus:ring-custom-yellow focus:outline-none"
          >
            <option value="" disabled selected>
              Choose category
            </option>
            <option value="category1">Driving</option>
            <option value="category2">Cooking</option>
            <option value="category3">Painting</option>
            <option value="category1">Home Cleaning</option>
            <option value="category2">Child Carering</option>
            <option value="category3">Painting</option>
            
          </select>
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter your job details here"
            className="w-full px-4 py-2 rounded-xl bg-white text-gray-800 border-none shadow focus:ring-2 focus:ring-custom-yellow focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-20">
          <button
            type="button"
            className="px-3 py-1 bg-custom-white hover:bg-custom-yellow text-custom-blue font-semibold rounded-full shadow-lg transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-1 bg-custom-yellow hover:bg-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all"
          >
            Post
          </button>
        </div>
      </form>
    </DialogContent>
  );
};

export default RegisterDialogContent;
