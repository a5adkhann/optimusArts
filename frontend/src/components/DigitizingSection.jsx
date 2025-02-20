import React from 'react';

const DigitizingSection = () => {
  return (
    <>
      <div data-aos="fade-up" className='digitizing-section-text text-center px-6 md:px-10 py-10'>
        <p className='font-bold text-2xl text-[#707070]'>
          CUSTOM EMBROIDERY DIGITIZING SERVICE
        </p>
        <hr className="w-16 mx-auto border-t-4 my-3 border-[#707070]" />
        <p className='text-[#707070] font-light max-w-2xl mx-auto'>
          Digitizing is the process of converting existing artwork into an embroidery format that an embroidery machine can understand and sew on a garment. Digitizing is a complex process that is both art and science. Various kinds of digitizing services provided by Optimusarts.
        </p>
      </div>

      {/* Responsive Image Section */}
      <div data-aos="fade-up" className='flex justify-center'>
        <img src="./assets/digitizingSection.webp" alt="Digitizing" className="object-cover w-full max-w-8xl" />
      </div>
    </>
  );
}

export default DigitizingSection;
