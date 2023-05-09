import './Hero.css'

import React from 'react'
import PrimaryButton from './Buttons/Buttons';
const Hero = () => {
  return (
    <>
    <div className='hero-main'>
      
        <div className='hero-text'>
      
    </div>

        <h6 className='hero-subtitle'>Welcome to subtitle  </h6>
        <h4 className='hero-title'><em>Browse</em> Our popular Games Here </h4>
       <PrimaryButton>
        Browse now 
       </PrimaryButton>
    </div>
    </>


  )
}

export default Hero;
