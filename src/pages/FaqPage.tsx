import React, { useState } from "react";

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-200 min-h-screen pt-20">
      {/* Header Section */}
      <div className="bg-gray-200 h-auto lg:h-[341px]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start flex-wrap lg:flex-nowrap px-6 lg:px-0 h-full">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
              FAQs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-4">
              Have questions? Here you’ll find the answers most valued by our
              partners, along with access to step-by-step instructions and
              support.
            </p>
          </div>
          <div className="relative lg:w-1/2">
            <img
              src="src/assets/images/faq_page/pic_1.png"
              alt="FAQ Illustration"
              className="max-w-full h-auto object-cover mx-auto"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            About Us
          </h2>
          <div className="mt-8 space-y-4">
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
              <div key={index} className="border-b border-gray-300 pb-4">
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
                {activeIndex === index && (
                  <p className="mt-4 text-sm sm:text-base text-gray-600">
                    {item.answer}
                  </p>
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
