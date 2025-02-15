import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaRegClock } from "react-icons/fa";
import { CiMobile4, CiSearch } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineShoppingBag } from "react-icons/md";

const TopSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between py-2 px-4 border border-b-1 border-[#ccc]'>

            {/* Left Section - Social Icons */}
            <div className='leftSection flex space-x-3 items-center mb-2 md:mb-0'>
                <span className="social-icon"><FaFacebook /></span>
                <span className="social-icon"><FaTwitter /></span>
                <span className="social-icon"><FaInstagram /></span>
            </div>

            {/* Right Section - Contact & Actions */}
            <div className='rightSection flex flex-wrap justify-center md:justify-end items-center gap-3'>
                <div className='number flex items-center gap-1'>
                    <CiMobile4 />
                    +92 7899456544
                </div>
                <div className='email flex items-center gap-1'>
                    <MdOutlineEmail />
                    info@abc.com
                </div>
                <div className='schedule flex items-center gap-1'>
                    <FaRegClock />
                    Mon - Sat: 10:00 - 22:00
                </div>
                <div className='action-icons flex items-center gap-1'>
                    <CiSearch />
                    <MdOutlineShoppingBag />
                </div>
            </div>

        </div>
    );
};

export default TopSection;
