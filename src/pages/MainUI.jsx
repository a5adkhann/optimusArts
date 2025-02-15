import React from 'react'
import TopSection from '../components/Header/TopSection'
import Navbar from '../components/Header/Navbar'
import Slider from '../components/Slider'
import VectorSection from '../components/VectorSection'
import DigitizingSection from '../components/DigitizingSection'
import OurQuality from '../components/OurQuality'
import CoreServices from '../components/CoreServices'
import Footer from '../components/Footer/Footer'

const MainUI = () => {
  return (
    <>
        <div>
            <TopSection />
            <Navbar />
            <Slider />
            <VectorSection />
            <DigitizingSection />
            <OurQuality />
            <CoreServices />
            <Footer />
        </div>
    </>
  )
}

export default MainUI
