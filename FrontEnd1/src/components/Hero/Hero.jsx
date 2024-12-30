import React, { useEffect } from 'react';
import './Hero.css';
import bgvideo from '../assets/bgvideo.mp4';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const typingContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      ease: 'easeInOut',
    },
  },
};

const typingText = {
  hidden: {
    opacity: 0,
    y: '-20px',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'), // Use the attribute selector
      smooth: true, // Enable smooth scrolling
    });

    return () => {
      scroll.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="hero" data-scroll-container>
      {/* Background Video */}
      <div className="overlay"></div>
      <video className="hero-video" autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* Animated Title */}
      <div className="videotitle" variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={typingContainer}
          initial="hidden"
          animate="show"
          data-scroll
          data-scroll-delay="0.13"
          data-scroll-speed="0.3"
          className="textdec"
        >
          {Array.from('MiniFashion').map((letter, i) => (
            <motion.span key={i} variants={typingText} className="textdec">
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <p data-scroll data-scroll-speed="0.1">
          Affordable, trendy everyday wear
        </p>
      </div>
    </div>
  );
};

export default Hero;
