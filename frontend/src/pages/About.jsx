import React from 'react';
import AboutProgressBar from '../components/AboutProgressBar';

const About = () => {
    return (
        <>
        <div data-aos="fade-up" className="flex flex-col items-center lg:flex-row lg:space-x-8 p-5 text-[#414042]">
            <div className="mb-4 lg:mb-0 lg:w-3/4">
                <p className="font-bold text-4xl">We create brand new <br /> corporate identities</p>
            </div>



            <div data-aos="fade-up" className="mb-4 lg:mb-0 lg:w-3/5">
                Optimus Arts was founded with the mission of helping businesses of all sizes succeed through top-quality graphics design and website development services involving creating visual content, such as logos, branding materials, website graphics, and print materials. Our team of skilled professionals is dedicated to delivering high-quality work and excellent customer service every step of the way. We have been guided by a set of core values that include a commitment to innovation, excellence, and customer satisfaction. We believe that by staying true to these values, we can help our clients achieve their goals and grow their businesses.
            </div>

            <div data-aos="fade-up" className="lg:w-3/5">
                One of the things that sets us apart from our competitors is our extensive experience in the industry. Our team has years of experience working with a wide range of clients, and we have the knowledge and expertise to bring your vision to life. We are also committed to staying up-to-date on the latest trends and technologies in the industry, which allows us to offer our clients the most advanced solutions available. Whether you are looking to create a new website from scratch or revamp your existing one, we have the skills and resources which can increase the credibility and perceived value of your business..
            </div>
        </div>

        <AboutProgressBar />
        </>
    );
};

export default About;
