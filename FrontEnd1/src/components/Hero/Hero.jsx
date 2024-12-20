import React from 'react'
import "./Hero.css"
import herobg from '../assets/herobg.mp4';

const Hero = () => {
  return (
    <div className='hero'>
      <video className='hero-video' autoPlay loop muted>
         <source src={herobg} type='video/mp4'/>
      </video>
    </div>
  )
}

export default Hero
