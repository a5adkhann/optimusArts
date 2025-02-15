import React from 'react';
import coreServicesData from '../ArrayOFObjects/CoreServicesData';

const CoreServices = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10 py-10">
            {coreServicesData.map((coreService, index) => (
                <div
                    key={index} 
                    className={`flex flex-col items-center section1 space-y-4 ${
                        index % 2 === 0 ? "bg-[#DDDDDD] text-black py-16 px-10" : "bg-[#EF592A] py-3 px-10 text-white"
                    }`}
                >
                    <div className="text-4xl">{coreService.icon()}</div>
                    <div className="text-center">
                        <p className="font-bold text-xl">{coreService.title}</p>
                        <p>{coreService.detail}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CoreServices;
