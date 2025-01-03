import React, { useEffect } from 'react';
import "./Hero.css";
import bgvideo from '../assets/bgvideo.mp4';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {motion} from "framer-motion"

const container={
   hidden:{
    opacity:0,
   },
   show:{
    opacity:1,

    transition:{
      duration:2,
      ease:'esseInOut'
    }
   },
}

const Hero = () => {
  

  return (
    <div className='hero' data-scroll-container>
      <div className="overlay"></div>
      <video className='hero-video' autoPlay loop muted>
        <source src={bgvideo} type='video/mp4'/>
      </video>
    

      <div className="videotitle" variants={container} initial="hodden" animate="show">
        
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }}  data-scroll data-scroll-delay='0.13'data-scroll-speed='0.3'className='textdec'>M</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.3' data-scroll-speed='0.3'className='textdec'>i</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.13' data-scroll-speed='0.3'className='textdec'>n</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.3' data-scroll-speed='0.3'className='textdec'>i</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.13' data-scroll-speed='0.3'className='textdec'>F</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.3' data-scroll-speed='0.3'className='textdec'>a</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.13' data-scroll-speed='0.3'className='textdec'>s</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.3' data-scroll-speed='0.3'className='textdec'>h</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.13' data-scroll-speed='0.3'className='textdec'>i</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.3' data-scroll-speed='0.3'className='textdec'>o</motion.h1>
        <motion.h1  initial={{ scale: 0 }} animate={{ scale: 1 }} data-scroll data-scroll-delay='0.13' data-scroll-speed='0.3'className='textdec'>n</motion.h1>
        <p data-scroll data-scroll-speed="0.1" >Affordable, trendy everyday wear</p>
      </div>
      
      
    </div>
  );
};

export default Hero;