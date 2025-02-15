import React from 'react'
import { FaTshirt } from "react-icons/fa";
import { FaHatCowboy } from "react-icons/fa";
import { GiSleevelessJacket } from "react-icons/gi";

const CoreServices = () => {
    return (
        <div className='flex  px-10 py-10'>
            <div className='p-3 flex flex-col items-center section1 bg-[#DDDDDD] space-y-4'>
                <div className='text-4xl'>
                    <FaTshirt />
                </div>
                <div className="text-center">
                    <p className='font-bold text-xl'>LOGO DIGITIZING</p>
                    <p>A company’s logo is one of the most important aspects of marketing collateral which helps people “put a name with a face”. In order for your logo to have the best quality possible.</p>
                </div>
            </div>
            <div className='p-3 flex flex-col items-center bg-[#EF592A] section2 space-y-4 text-white'>
                <div className='text-4xl'>
                    <FaHatCowboy />
                </div>
                <div className="text-center">
                    <p className='font-bold text-xl'>CAP DIGITIZING</p>
                    <p>There are two types of caps commonly known as structured caps and unstructured caps. Whenever you see a design or pattern on cap that means it is a digitized pattern.</p>
                </div>
            </div>
            <div className='p-3 flex flex-col items-center bg-[#DDDDDD] section3 space-y-4'>
                <div className='text-4xl'>
                    <GiSleevelessJacket />
                </div>
                <div className="text-center">
                    <p className='font-bold text-xl'>JACKET BACK DIGITIZINGG</p>
                    <p>Optimus Arts is a pioneer in offering custom digitizing services, especially for Jacket Backs. For custom embroidery digitizing, we convert picture or images in to stitches that you send us.</p>
                </div>
            </div>
        </div>
    )
}

export default CoreServices
