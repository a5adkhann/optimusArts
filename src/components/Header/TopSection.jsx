import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaRegClock } from "react-icons/fa";
import { CiMobile4, CiSearch } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineShoppingBag } from "react-icons/md";

const TopSection = () => {
    return (
        <div className='hidden md:flex flex-col md:flex-row items-center justify-between py-3 px-26 border border-b-1 border-[#ccc]'>

            {/* Left Section - Social Icons */}
            <div className='leftSection flex space-x-3 items-center mb-2 md:mb-0'>
                <span className="social-icon"><FaFacebook className='hover:text-[#EE5929] hover:mb-2 transition-all duration-300 ease-in-out cursor-pointer'/></span>
                <span className="social-icon"><FaTwitter className='hover:text-[#EE5929] hover:mb-2 transition-all duration-300 ease-in-out cursor-pointer'/></span>
                <span className="social-icon"><FaInstagram className='hover:text-[#EE5929] hover:mb-2 transition-all duration-300 ease-in-out cursor-pointer'/></span>
            </div>

            {/* Right Section - Contact & Actions */}
            <div className='rightSection flex flex-wrap justify-center md:justify-end items-center gap-3'>
                <div className='number flex items-center gap-1'>
                    <CiMobile4 className='font-bold'/>
                    <span className='hover:text-[#EE5929] font-bold transition-all duration-300 ease-in-out cursor-pointer'>+92 7899456544</span>
                </div>
                <div className='email flex items-center gap-1'>
                    <MdOutlineEmail className='font-bold'/>
                    <span className='hover:text-[#EE5929] font-bold transition-all duration-300 ease-in-out cursor-pointer'>info@abc.com</span>
                </div>
                <div className='schedule flex items-center gap-1'>
                    <FaRegClock className='font-bold'/>
                    <span className='font-bold'>Mon - Sat: 10:00 - 22:00</span>
                </div>
                <div className='action-icons flex items-center gap-1'>
                    <CiSearch className='text-xl'/>
                    <MdOutlineShoppingBag className='text-xl'/>
                </div>
            </div>

        </div>
    );
};

export default TopSection;
