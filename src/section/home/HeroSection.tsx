import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/images/hero_section/heropic.png';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='top-20 bg-[#0E0524] flex flex-col md:flex-row h-[800px] md:h-[650px] justify-center items-center'>
            {/* Left Section */}
            <div className='flex flex-col justify-center py-20 px-6 md:pr-16 xl:pr-40 md:py-0'>
                <div className='text-center text-white md:text-left space-y-4'>
                    <p className='text-3xl md:text-5xl font-semibold lg:text-6xl'>
                        Your Trusted Partner for Home Services
                    </p>
                    <p className='flex-wrap'>
                        New way to find people to do your jobs. If you are one of those thousands of people who struggle to find people to do jobs or struggle to find jobs, this is for you.
                    </p>
                    <div className='space-x-2'>
                        <button 
                            className='bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-full mt-2'
                        >
                            I want to work
                        </button>
                        <button 
                            className='bg-[#FCC215] text-[#0E0524] font-bold text-s h-[39px] px-6 py-0 rounded-full mt-2' 
                            onClick={() => navigate('PostJob')}
                        >
                            I want to hire
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='flex justify-center items-center'>
                <img
                    src={heroImg}
                    alt='Hero'
                    className='max-w-full h-auto md:w-[100%]'
                />
            </div>
        </div>
    );
};

export default HeroSection;
