import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
const googlePlayBadge = '/register_section/playbutton.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#0E0524] text-white py-10">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
            <h5 className="font-bold text-lg mb-4">Links</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/jobs" className="hover:text-gray-100">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/service-providers" className="hover:text-gray-100">
                  Service Providers
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-gray-100">
                  How it Works
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-gray-100">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h5 className="font-bold text-lg mb-4">Info</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/terms" className="hover:text-gray-100">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-gray-100">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="text-right">
            <h5 className="font-bold text-lg mb-4">Download Our App</h5>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <span className="text-sm">Get it on</span>
              <img src={googlePlayBadge} alt="Google Play" className="w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-300 mt-10">
          <p className="text-yellow-500">&copy; 2024 Service Me. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
