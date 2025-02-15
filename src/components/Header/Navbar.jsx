import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between items-center py-2 px-6'>
            <div className="main-logo">
                <img src="./assets/main-logo.png" width={150} alt="" />
            </div>
            <div className='navbar-items flex px-3'>
                <ul className='flex space-x-4'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li className='flex items-center gap-1'>Portfolio <IoIosArrowDown />
                  </li>
                  <li>Contact</li>
                  <li>
                      <Link className='bg-orange-600 px-8 py-3 rounded-full text-white'>Shop</Link>
                  </li>
                  <li>
                      <Link className='bg-orange-600 px-8 py-3 rounded-full text-white'>Connect with us</Link>
                  </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
