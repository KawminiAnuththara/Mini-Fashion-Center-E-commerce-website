import React from 'react'
import './Navbar.css'
import  logo from '../../assets/bgim_black.png'
import profile from '../../assets/profile_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' className='nav-logo'/>
      <img src={profile} alt='' />
    </div>
  )
}

export default Navbar
