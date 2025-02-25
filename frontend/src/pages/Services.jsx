import React from 'react'
import servicesData from '../ArrayOFObjects/ServicesData'

const Services = () => {
  return (
    <>
      <div className='py-10'>
        <div data-aos="fade-up" className='servicesHeader'>
          <p className='font-bold text-center text-3xl md:text-4xl pb-4'>
            Everything you need to grow your <br /> business. Order today!
          </p>
        </div>

        {/* First section */}
        <div data-aos="fade-up" className='services-section1 px-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20'>
          <div className='section1-img w-full md:w-1/2'>
            <img src="./assets/services1-img.webp" alt="" className='w-full h-auto' />
          </div>

          <div className='section1-allservices w-full md:w-1/2'>
            {servicesData.slice(0, 3).map((service, index) => (
              <div key={index} className='service flex items-center gap-3 mb-6 md:mb-0'>
                <div className="service-logo text-4xl text-[#EF592A]">
                  {service.serviceIcon()}
                </div>
                <div className="service-logo">
                  <p className='text-2xl font-semibold'>{service.serviceTitle}</p>
                  <p>{service.serviceText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second section */}
        <div data-aos="fade-up" className='services-section2 px-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20'>
          <div className='section1-allservices w-full md:w-1/2'>
            {servicesData.slice(3, 6).map((service, index) => (
              <div key={index} className='service flex items-center gap-3 mb-6 md:mb-0'>
                <div className="service-logo text-4xl text-[#EF592A]">
                  {service.serviceIcon()}
                </div>
                <div className="service-logo">
                  <p className='text-2xl font-semibold'>{service.serviceTitle}</p>
                  <p>{service.serviceText}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='section1-img w-full md:w-1/2'>
            <img src="./assets/services2-img.webp" alt="" className='w-full h-auto' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
