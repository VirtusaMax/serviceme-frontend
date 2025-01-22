import React, { useState } from 'react';
import {
    Bars3BottomLeftIcon,
    XMarkIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid'; // Import icons
import logo from "../../assets/images/header_section/logo1.png";

interface Link {
    name: string;
    link: string;
}

const Navbar: React.FC = () => {
    const Links: Link[] = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Find Job', link: '/findjob' },
        { name: 'Services', link: '/services' },
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 border-b-4 border-white z-50'>
            <div className='flex justify-center items-center bg-[#0E0524] h-[80px] w-full'>
            <div className='max-w-[1800px]  flex w-full'>
                <div className='flex text-2xl items-center gap-2'>
                    <img src={logo} alt="Logo" className="w-32 h-auto mt-8" />
                </div>

                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='w-7 h-7 absolute left-2 top-7 cursor-pointer md:hidden'
                    style={{ color: 'white' }}
                >
                    {isOpen ? (
                        <XMarkIcon style={{ color: 'white' }} />
                    ) : (
                        <Bars3BottomLeftIcon style={{ color: 'white' }} />
                    )}
                </div>

                <ul
                    className={`md:flex md:items-center md:ml-auto md:pb-0 pb-14 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all text-white duration-500 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}
                    style={{ color: isOpen ? '' : 'white' }}
                >
                    {Links.map((link, index) => (
                        <li key={index} className='font-inter font-semibold my-7 md:my-0 md:ml-8'>
                            <a
                                href={link.link}
                                className="text-white hover:underline">
                                {link.name}
                            </a>
                        </li>
                    ))}

                    <button className='btn bg-yellow-400 text-black py- px-3 md:ml-8 rounded md:static mr-4'>
                        POST JOB
                    </button>
                </ul>

                <div className="md:flex md:ml-0">
                    <div className="absolute right-4 top-6 md:static md:right-auto">
                        <UserCircleIcon
                            className="w-10 h-10 text-white cursor-pointer hover:text-yellow-400"
                        />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
