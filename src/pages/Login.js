import React from 'react'
import '../../src/styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='login-main'>
      <div className='left-flex'></div>


      <div className='right-flex'>
        <div><h6 className='welcome'>Welcome Back!</h6></div>
        
        <div className='input'>
        <div> <input type={'email'} placeholder="Your Email address" className='email' required/></div>
        <div> <input type={'password'} placeholder="Your Password" className='password'/></div>
        </div>

        <div><Link to="/"> <button>LOGIN</button> </Link></div>

        <div className='login-container3'>
          <div><Link to="/signup" className='login-link'> <p>Create an account</p> </Link></div>
          <div><Link to="/forgot-password" className='login-link'> <p>Forgot Passoword</p> </Link></div>
        </div>

      </div>
    </main>
  )
}

export default Login