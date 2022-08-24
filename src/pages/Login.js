import React, { useRef, useState } from 'react'
import '../../src/styles/pages/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [values, setValues] = useState({
    email:"",
    password:"",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleEmailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
  }

  const handlePasswordInputChange = (event) =>{
    setValues({...values, password: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password){
      setValid(true);
    }
    setSubmitted(true);
  }

  const data = useRef();
  const handleClick =() =>{
    console.log(data.current.value, "initial value")
    localStorage.setItem("inputValue",data.current.value)
  }

  return (
    <main className='login-main'>
      <div className='left-flex'></div>


      <div className='right-flex'>
        <div><h6 className='welcome'>Welcome Back!</h6></div>
        
        <form className='input' onSubmit={handleSubmit} >
          {submitted && valid ? <div className='success-message'>Success! Thanks you for Loging In <span><Link className='link2' to='/dashboard'>Click here</Link></span></div> : null}
          <div className='email'> <input onChange={handleEmailInputChange} value={values.email} type='email' ref={data} name='email' placeholder="Your Email address" />
          {submitted && !values.email ? <p className='error'>Email is required</p> : null }
          </div>
          <div> <input onChange={handlePasswordInputChange} value={values.password} type='password' name='password' placeholder="Your Password" className='password'/>
          {submitted && !values.password ? <p className='error'>Password is required</p> : null }
          </div>
          <div><button type="submit" onClick={handleClick}> LOGIN </button></div>
        </form>


        <div className='login-container3'>
          <div><Link to="/signup" className='login-link'> <p>Create an account</p> </Link></div>
          <div><Link to="/forgot-password" className='login-link'> <p>Forgot Passoword</p> </Link></div>
        </div>

      </div>
    </main>
  )
}

export default Login