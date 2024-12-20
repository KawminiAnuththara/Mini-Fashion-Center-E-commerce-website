import React from 'react'
import './Footer.css'
import bgim_white from '../assets/bgim_white.png'
import facebook_icon from '../assets/facebook_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'
import twitter_icon from '../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={bgim_white} alt=''/>
        <p>MINI FASHIONS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={facebook_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
            <img src={linkedin_icon} alt=''/>
        </div>
        <div className="footer-icons-container">
            <img src={twitter_icon} alt=''/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright@2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
