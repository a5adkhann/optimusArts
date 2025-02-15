import React from 'react';

const VectorSection = () => {
  return (
    <>
      <div className='vector-section-text text-center px-6 md:px-10 py-10'>
        <p className='font-bold text-2xl text-[#707070]'>
          RASTER TO VECTOR ART CONVERSION SERVICE
        </p>
        <hr className="w-16 mx-auto border-t-4 my-3 border-[#707070]" />
        <p className='text-[#707070] font-light max-w-2xl mx-auto'>
          Vector Art is created using Vector illustration software programs. These programs use points, lines, and shapes to create art that is clean and camera-ready. In many cases with art such as logos, vector art is required to achieve proper print.
        </p>
      </div>

      {/* Responsive Image Section */}
      <div className='flex justify-center'>
        <img src="./assets/vectorSection.webp" alt="Vector Art" className="w-full max-w-8xl object-cover" />
      </div>
    </>
  );
}

export default VectorSection;
