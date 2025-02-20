import React from 'react';
import ourQualityData from '../ArrayOFObjects/OurQualityData';

const OurQuality = () => {
  return (
    <div data-aos="fade-up" className='flex flex-wrap justify-center gap-8 px-6 md:px-10 py-10'>
      {ourQualityData.map((quality) => (
        <div 
          className='flex flex-col items-center space-y-4 text-center w-full sm:w-[48%] md:w-[30%] lg:w-[22%]' 
          key={quality.id}
        >
          <p>{quality.icon()}</p>
          <p className='font-bold text-2xl md:text-3xl'>{quality.title}</p>
          <p className='text-sm md:text-base'>{quality.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default OurQuality;
