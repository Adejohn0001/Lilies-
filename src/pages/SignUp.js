import React, { useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Sign-up.css'

const SignUp = () => {
  const [values, setValues] = useState({
    firstName:"",
    email:"",
    password:"",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false)

  const handleFirstNameInputChange = (event) =>{
    setValues({...values, firstName: event.target.value})
  }

  const handleEmailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
  }

  const handlePasswordInputChange = (event) =>{
    setValues({...values, password: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password && values.firstName){
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
    <main className='signup-main'>
    <div className='signup-left-flex'></div>


    <div className='signup-right-flex'>
      <div><h6 className='welcome-to-lilies'>Welcome to Lilies!</h6></div>
      
      <form className='inputs' onSubmit={handleSubmit}>
        {submitted && valid ? <div className='success-message'>Success! Thanks you for registering <span><Link className='link2' to='/login'>Click here</Link></span></div> : null}
        <div> <input type='text' onChange={handleFirstNameInputChange} value={values.firstName} ref={data} placeholder="Your First Name" className='first-name'/>
        {submitted && !values.firstName ? <p className='error'>FirstName is required</p> : null }
        </div>
        <div className='email'> <input type='email'onChange={handleEmailInputChange} value={values.email} placeholder="Your Email address" />
        {submitted && !values.email ? <p className='error'>Email is required</p> : null }
        </div>
        <div> <input type='password' onChange={handlePasswordInputChange} value={values.password} placeholder="Your Password" className='password'/>
        {submitted && !values.password ? <p className='error'>Password is required</p> : null }
        </div>
        <div> <button type='submit' onClick={handleClick} >SIGN UP</button></div>
      </form>


      <div className='signup-container3'>
        <div> <p>Already have an account. <Link to="/login" className='signup-link'> <span> LOGIN </span> </Link></p> </div>
      </div>

    </div>
  </main>
  )
}

export default SignUp