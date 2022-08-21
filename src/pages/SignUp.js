import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Sign-up.css'

const SignUp = () => {
  return (
    <main className='signup-main'>
    <div className='signup-left-flex'></div>


    <div className='signup-right-flex'>
      <div><h6 className='welcome-to-lilies'>Welcome to Lilies!</h6></div>
      
      <div className='inputs'>
      <div> <input type='text' placeholder="Your First Name" className='first-name' required/></div>
      <div> <input type='email' placeholder="Your Email address" className='email' required/></div>
      <div> <input type='password' placeholder="Your Password" className='password'/></div>
      </div>

      <div><Link to="/login"> <button>SIGN UP</button> </Link></div>

      <div className='signup-container3'>
        <div> <p>Already have an account. <Link to="/login" className='signup-link'> <span> LOGIN </span> </Link></p> </div>
      </div>

    </div>
  </main>
  )
}

export default SignUp