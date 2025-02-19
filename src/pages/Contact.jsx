import React from 'react'
import { FcAnswers } from "react-icons/fc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";

const Contact = () => {
    return (
        <>
            {/* Contact Details & Form Section */}
            <div data-aos="fade-up" className='flex flex-col md:flex-row justify-between px-6 md:px-32 py-10 md:py-30 bg-[#F5F5F5] text-[#414042]'>
                {/* Contact Details */}
                <div className="contact-details w-full md:w-[50%] leading-8 mb-10 md:mb-0">
                    <p className='font-bold text-3xl md:text-4xl mb-3'>Contact Details</p>
                    <p className='font-bold text-xl'>1. United States - Head Office</p>
                    <p>1925 Pawtucket Ave, East Providence, RI 02914, United States</p>
                    <p>Email: <span>info@optimusarts.com</span></p>
                    <p>Phone: +44 7936 486422</p>
                </div>

                {/* Contact Form */}
                <div className="contact-form w-full md:w-[50%]">
                    <p className='font-bold text-3xl md:text-4xl mb-3'>Ready to get <br /> started?</p>
                    <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>

                    <form className='w-full mt-3'>
                        <input
                            className='w-full md:w-[70%] focus:outline-none bg-white mb-3 px-6 py-3 rounded-full'
                            type="text"
                            placeholder='Your name'
                        />
                        <input
                            className='w-full md:w-[70%] focus:outline-none bg-white mb-3 px-6 py-3 rounded-full'
                            type="text"
                            placeholder='Your email'
                        />
                        <textarea
                            className='w-full md:w-[70%] focus:outline-none resize-none bg-white mb-3 px-6 py-3 rounded-full'
                            placeholder='Your message'
                        ></textarea>
                        <button
                            className='w-full md:w-[70%] bg-[#EF592A] text-white mb-3 px-4 py-3 rounded-full'
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>

            {/* Icons Section */}
            <div data-aos="fade-up" className='flex justify-between px-6 md:px-32 py-40 md:py-20 space-y-10 md:space-y-0 md:space-x-10'>
                {/* First Section (Icon) */}
                <div className='group w-full sm:w-[30%] text-center'>
                    {/* Icon */}
                    <div className='group-hover:hidden transition-hidden duration-300'>
                        <FcAnswers className='mx-auto text-4xl' />
                    </div>

                    <p className='group-hover:block hidden mt-2'>just ask.</p>

                    {/* Hover text with bottom-to-top transition */}
                    <p className='group-hover:block hidden transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100'>
                        hello, how can i help you.
                    </p>
                </div>

                {/* Second Section (Icon) */}
                <div className='group w-full sm:w-[30%] text-center'>
                    {/* Icon */}
                    <div className='group-hover:hidden transition-hidden duration-300'>
                        <IoPhonePortraitOutline className='mx-auto text-4xl' />
                    </div>

                    <p className='group-hover:block hidden mt-2'>just ask.</p>

                    {/* Hover text with bottom-to-top transition */}
                    <p className='group-hover:block hidden transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100'>
                        hello, how can i help you.
                    </p>
                </div>

                {/* Third Section (Icon) */}
                <div className='group w-full sm:w-[30%] text-center'>
                    {/* Icon */}
                    <div className='group-hover:hidden transition-hidden duration-300'>
                        <CiTwitter className='mx-auto text-4xl' />
                    </div>

                    <p className='group-hover:block hidden mt-2'>just ask.</p>

                    {/* Hover text with bottom-to-top transition */}
                    <p className='group-hover:block hidden transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100'>
                        hello, how can i help you.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Contact;
