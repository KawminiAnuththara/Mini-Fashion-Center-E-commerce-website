import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='login'>
        <SignIn/>
    </div>
  )
}

export default LoginSignup