import React, { useState } from "react";
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import logo from "../../assets/images/header_section/logo1.png";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-us" },
    { name: "Contact", link: "/contact" },
    { name: "Services", link: "/services" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50 shadow-md w-full fixed top-0 left-0 border-b-4 border-white">
      <div className="max-w-[1600px] mx-auto md:px-10 py-4 px-7 flex justify-between items-center bg-[#0E0524] h-[80px]">
        {/* Logo Section */}
        <div className="flex text-2xl items-center gap-2">
          <img src={logo} alt="Logo" className="w-32 h-auto mt-8" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute left-2 top-7 cursor-pointer md:hidden text-white"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomLeftIcon />}
        </div>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:items-center md:ml-auto md:pb-0 pb-14 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all bg-[#0E0524] text-white duration-500 ease-in ${
            isOpen ? "top-14" : "top-[-490px]"
          } space-x-4`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="font-inter font-semibold my-7 md:my-0 md:ml-8"
            >
              <Link
                to={link.link}
                className="text-white hover:underline hover:text-yellow-400 transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}

          
          {/* POST JOB Button */}
          <li className="md:ml-8 my-7 md:my-0">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="bg-yellow-400 text-black py-1 px-3 rounded-xl hover:bg-yellow-500 transition-all">
                  POST JOB
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="fixed inset-0 flex items-center justify-center">
                  <PostJobDialogContent />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </li>

          {/* User Circle Icon */}
          <li className="md:ml-8 my-7 md:my-0">
            <UserCircleIcon className="w-10 h-10 text-white cursor-pointer hover:text-yellow-400 transition-all" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
