import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-15">
      {/* Header Section */}
      <div className="bg-gray-200 h-auto lg:h-[400px] pt-28">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start flex-wrap lg:flex-nowrap px-6 lg:px-0 h-full">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-10 lg:mt-16">
              FAQs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-6">
              Have questions? Here you’ll find the answers most valued by our
              partners, along with access to step-by-step instructions and
              support.
            </p>
          </div>
          <div className="relative lg:w-1/2">
            <img
              src="/faq_page/pic_1.png"
              alt="FAQ Illustration"
              className="max-w-full h-auto object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section with Animation */}
      <div className="bg-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="mt-10 space-y-6">
            {[
              {
                question: "How will I manage my services?",
                answer:
                  "You can manage your services through our intuitive dashboard. Access your account, make changes, and view reports easily.",
              },
              {
                question:
                  "Is the content on this website available in other languages?",
                answer:
                  "Yes, our website supports multiple languages. You can select your preferred language from the settings menu.",
              },
              {
                question: "What if I have more questions?",
                answer:
                  "Feel free to contact our support team via email or live chat. We're here to help!",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-5">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left flex justify-between items-center text-gray-700 text-base sm:text-lg font-medium focus:outline-none"
                >
                  <span>{item.question}</span>
                  <span>
                    {activeIndex === index ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>
                    )}
                  </span>
                </button>

                {/* Popup Animation for Answer */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-sm sm:text-base text-gray-600"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
