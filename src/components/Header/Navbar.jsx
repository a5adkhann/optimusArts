import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  return (
    <>
      {/* Navbar Container */}
      <div className='flex justify-between items-center py-4 px-6 bg-white shadow-md'>

        {/* Logo Section */}
        <div className="main-logo">
          <img src="./assets/main-logo.png" width={150} alt="Logo" />
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-3xl text-gray-700 z-50'>
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Overlay Background when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Navbar Items (Responsive) */}
        <div className={`fixed top-0 right-0 h-full w-64 md:w-auto bg-white shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 md:static flex flex-col md:flex-row items-start md:items-center px-6 pt-16 md:pt-0 md:space-x-6 text-lg font-medium`}>

          <ul className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 w-full'>
            <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-600 transition">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-600 transition">Services</Link></li>
            <li className='flex items-center gap-1 hover:text-orange-600 transition'><Link to="/portfolio">Portfolio</Link> <IoIosArrowDown /></li>
            <li><Link to="/contact" className="hover:text-orange-600 transition">Contact</Link></li>
            <li>
              <Link className='bg-orange-600 px-6 py-2 rounded-full text-white block md:inline hover:bg-orange-700 transition'>Shop</Link>
            </li>
            <li>
              <Link className='bg-orange-600 px-6 py-2 rounded-full text-white block md:inline hover:bg-orange-700 transition'>Connect with us</Link>
            </li>
          </ul>

        </div>

      </div>
    </>
  );
}

export default Navbar;
