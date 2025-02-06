import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import googlePlayBadge from "../../assets/images/footer_section/playbutton.png";

type IconStyle = {
  position: "absolute";
  fontSize: string;
  color: string;
};

const Footer: React.FC = () => {
  const iconStyle: IconStyle = {
    position: "absolute",
    fontSize: "clamp(40px, 5vw, 70px)",
    color: "rgba(255, 255, 255, 0.05)",
  };

  return (
    <footer
      className="relative max-w-[1600px] mx-auto w-full text-gray-300 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, #0a0e1a 20%, #1a1a2e 65%, #f7b731 200%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <i
          className="fas fa-cogs"
          style={{ ...iconStyle, top: "10%", right: "5%" }}
        ></i>
        <i
          className="fas fa-tools"
          style={{ ...iconStyle, top: "50%", right: "15%" }}
        ></i>
        <i
          className="fas fa-briefcase"
          style={{ ...iconStyle, top: "75%", right: "6%" }}
        ></i>
        <i
          className="fas fa-wrench"
          style={{ ...iconStyle, top: "10%", right: "18%" }}
        ></i>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-bold text-lg mb-4 text-yellow-400">About Service Me</h5>
            <p className="text-sm leading-relaxed">
              Service Me connects you with trusted professionals and service providers for all your needs. Explore jobs, find providers, and learn more about our services.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-yellow-400 transition duration-200">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/ServiceProvider" className="hover:text-yellow-400 transition duration-200">
                  Service Providers
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-yellow-400 transition duration-200">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-yellow-400 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="hover:text-yellow-400 transition duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-right md:text-left">
            <h5 className="font-bold text-lg mb-4 text-yellow-400">Get the App</h5>
            <p className="text-sm mb-4">Download our app to access services on the go!</p>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-200"
            >
              <span className="text-sm font-medium">Google Play</span>
              <img src={googlePlayBadge} alt="Google Play" className="w-5" />
            </a>
          </div>
        </div>
        <hr className="border-gray-700 my-10" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; 2024 <span className="text-yellow-400">Service Me</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-200"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-200"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-200"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-200"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
