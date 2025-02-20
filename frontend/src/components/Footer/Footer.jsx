import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] text-white px-6 py-10 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Section 1 - Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img src="./assets/main-logo.png" width={200} alt="Logo" />
          <p className="mt-6 text-sm leading-relaxed">
            We are a team of experienced and passionate professionals dedicated to delivering top-quality design services. Whether you need a new logo, website, or marketing materials, we bring your vision to life.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="font-bold leading-8">
          <p className="text-[#EF592A] text-2xl mb-4">Quick Links</p>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Section 3 - Contact Info */}
        <div>
          <p className="text-[#EF592A] text-2xl font-bold mb-4">Contact Info</p>
          <p>+44 723763737</p>
          <p>info@abc.com</p>
          <p>Mon - Sat: 10:00 - 22:00</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-[#EF592A] mt-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
