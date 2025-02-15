import React from 'react'
import { CiTimer } from "react-icons/ci";
import { FaUserAlt, FaRocket } from "react-icons/fa";

const OurQuality = () => {
  return (
    <div className='flex justify-center px-10 py-10'>
        <div className='flex flex-col items-center space-y-4 text-center'>
            <p className='text-5xl'>
                <CiTimer className='text-orange-600 font-bold'/>
            </p>
            <p className='font-bold text-4xl'>TURN AROUND TIME</p>
            <p>With our extensive network of professional digitizers and vector artists, Optimus Arts can meet your demands in as little as 3 to 4 hours.</p>
        </div>
        <div className='flex flex-col items-center space-y-4 text-center mx-10'>
            <p className='text-5xl'>
                <FaUserAlt className='text-orange-600'/>
            </p>
            <p className='font-bold text-4xl'>WHY OPTIMUS ARTS</p>
            <p>Optimus Arts, a global digitizing services leader, collaborates with a diverse range of businesses worldwide, powered by a modern infrastructure and skilled digitizers.</p>
        </div>
        <div className='flex flex-col items-center space-y-4 text-center'>
            <p className='text-5xl'>
                <FaRocket className='text-orange-600'/>
            </p>
            <p className='font-bold text-4xl'>OUR CORE COMPETENCY</p>
            <p>Optimus Arts excels in customer satisfaction and rapid turnaround times, specializing in exceptional customer service and efficiency.</p>
        </div>
    </div>
  )
}

export default OurQuality
