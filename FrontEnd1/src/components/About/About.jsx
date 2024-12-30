import React from 'react'
import './About.css'
import fashion1 from "../../components/assets/fashion2.jpg";
import fashion2 from "../../components/assets/fasion5.jpg";
import fashion3 from "../../components/assets/fashion1.jpg";
import fashion4 from "../../components/assets/fashion3.jpg";

import image1 from "../../components/assets/image1.jpg";
import image2 from "../../components/assets/image2.jpg";

import LocomotiveScroll from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import {motion} from "framer-motion"

const typingContainer = {
    hidden:{
      opacity:0,
      
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        staggerChildren:0.4,
        ease:'easeInOut',
      }
    }
  }
  const typingText = {
    hidden:{
      opacity:0,
      y:'-20px'
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        ease:'easeInOut',
      }
    }
  }
  const explainProduct = {
    hidden:{
      opacity:0,
      y:'-20px'
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        delay:2.2,
        ease:'easeInOut',
      }
    }
  }

  const buttonProduct = {
    hidden:{
      opacity:0,
      scalex:0,
      width:'80px'
    },
    show:{
      opacity:1,
      scalex:1,
      width:'250px',
      y:0,
      transition:{
        delay:2.3,
        ease:'easeInOut',
      }
    }
  }

  const miniProduct = {
    hidden:{
      opacity:0,
      
    },
    show:{
      opacity:1,
     
      transition:{
        staggerChildren:0.4,
        delayChildren:3.8,
        ease:'easeInOut',
      }
    }
  }

  const miniProductitem = {
    hidden:{
      opacity:0,
      x:'-100px',
    },
    show:{
      opacity:1,
      x:0,
     
      transition:{
        
        ease:'easeInOut',
      }
    }
  }

  const imageabout1 = {
    hidden:{
        opacity:0,
        y:'400px',
        width:'80px'
    },
    show:{
        opacity:1,
        y:0,
        width:'250px',
        transition:{
            delay:2.5,
            duration:1,
            ease:'easeInOut',
        }
    }
  }

  const imageabout2 = {
    hidden:{
        opacity:0,
        y:'400px',
        x:'50px',
        width:'80px'
    },
    show:{
        opacity:1,
        y:0,
        x:0,
        width:'250px',
        transition:{
            delay:3.4,
            duration:1,
            ease:'easeInOut',
        }
    }
  }


const About = () => {
  return (
    <div className='about'>
        <section className='aboutsection'>
         <div className='aboutleft' >
          <motion.h1 variants={typingContainer} initial="hidden" animate="show"  data-scroll-speed='0.3' data-scroll-direction="horizontal" >
            {
               Array.from("About Us").map((word,i)=>(
                <motion.span key={i} variants={typingText}>{word}</motion.span>
               ))
            }
          </motion.h1>
          <div className="explain-about" >
            <motion.p data-scroll data-scroll-delay='0.13'data-scroll-speed='0.3'
             variants={explainProduct} initial="hidden" animate="show">MiniFashion is brand product that provides the best quality
              of dresses in the world. we dedicate the best quality of
              dresses in the world. For dresses lover we will
              serve you.MiniFashion is brand product that provides the best quality
              of dresses in the world. we dedicate the best quality of
              dresses in the world. For dresses lover we will
              serve you.MiniFashion is brand product that provides the best quality
              of dresses in the world. we dedicate the best quality of
              dresses in the world. For dresses lover we will
              serve you
            </motion.p>
            <div className="aboutbutton">
              <motion.button variants={buttonProduct} initial="hidden" animate="show" className='readmore-about' data-scroll data-scroll-delay='0.13'data-scroll-speed='0.3'>Read More</motion.button>
            </div>
            <motion.div variants={miniProduct} initial="hidden" animate="show" className="smallfashionImage" data-scroll data-scroll-delay='0.13'data-scroll-speed='0.3'>
              <motion.img src={fashion1} alt=''  variants={miniProductitem}/>
              <motion.img  src={fashion2} alt='' variants={miniProductitem} />
              <motion.img src={fashion3} alt=''  variants={miniProductitem}/>
              <motion.img src={fashion4} alt=''  variants={miniProductitem}/>
            </motion.div>
          </div>
         </div>
         <div className='aboutright'>
         <motion.img src={image1} alt='' className='image1' variants={imageabout1} initial="hidden" animate="show" />
         <motion.img src={image2} alt='' className='image2' variants={imageabout2} initial="hidden" animate="show"/>
         </div>
      </section>
    </div>
  )
}

export default About