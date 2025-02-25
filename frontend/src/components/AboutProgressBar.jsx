import React from 'react'
import ProgressBar from 'react-progressbar';

const AboutProgressBar = () => {
    return (
        <>
            <div className='flex justify-center items-center py-10 px-4'>
                <div className='about-img'>
                    <img src="./assets/about.png" alt="" />
                </div>
                <div className='about-text-area px-4'>
                    <p className='font-semibold text-3xl py-10 text-[#414042]'>Communicate brand message and <br /> values in a visually appealing and effective way.</p>

                    <div className='progess-1 mb-5'>
                        <div className="progress-text flex justify-between">
                        <p>Customer satisfaction</p>
                        <p>100%</p>
                        </div>
                        <ProgressBar
                            completed={60}  // Completed percentage (0 to 100)
                            color="#EE5929"
                            height="7px"
                            labelAlignment="center"
                            label="60%"
                        />
                    </div>

                    <div className='progess-2'>
                        <div className="progress-text flex justify-between">
                        <p>Performance</p>
                        <p>97%</p>
                        </div>
                        <ProgressBar
                            completed={30}  // Completed percentage (0 to 100)
                            color="#EE5929"
                            height="7px"
                            labelAlignment="center"
                            label="60%"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutProgressBar
