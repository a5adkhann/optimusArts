import React from 'react'
import Slider from '../components/Slider'
import VectorSection from '../components/VectorSection'
import DigitizingSection from '../components/DigitizingSection'
import OurQuality from '../components/OurQuality'
import CoreServices from '../components/CoreServices'

const MainUI = () => {
  return (
    <>
        <div>
            <Slider />
            <VectorSection />
            <DigitizingSection />
            <OurQuality />
            <CoreServices />
        </div>
    </>
  )
}

export default MainUI
