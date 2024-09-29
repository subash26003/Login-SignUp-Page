import React, { useEffect } from 'react'
import { useState } from 'react';
import './signup.css'

const SignUp = ({toggle,setLogin,setSuccess}) => {

  const [username,setUserName] = useState('')
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [isInValidUserName , setInValidUserName] = useState(false)
  const [isInvalidEmail,setInvalidEmail] = useState(false)
  const [isSmallPassword,setIsSmallPassword] = useState(false)
  const [missMatchPassword,setMissMatchPassword] = useState(false)


  
  const VerifyEmail = (email) =>{
      const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/ ;
      return emailRegex.test(email)
  }

  const VerifyPassword = (password) =>{
      return password.length >= 8
  }
  const VerifyUserName = (name) =>{
    return /^[a-zA-Z0-9._-]{3,16}$/.test(name)
  }

  useEffect(() =>{
    document.getElementById('username').addEventListener('blur' , function(){
      const isValidUserName = VerifyUserName(username) || username === ''
      setInValidUserName(!isValidUserName)
    })

    document.getElementById('signup-password').addEventListener('blur' , function(){
      const isValidPassword = VerifyPassword(password) || password === ''
      setIsSmallPassword(!isValidPassword)
    })

    document.getElementById('confirm-password').addEventListener('blur' , function(){
      setMissMatchPassword((password !== confirmPassword))
    })
4
    document.getElementById('signup-email').addEventListener('blur' ,function(){
      const isValidEmail = VerifyEmail(email) || email === ''
      setInvalidEmail(!isValidEmail)
    })
  },[username,password,confirmPassword,email])

  const handleSignBtn = () =>{
      const isValidEmail = VerifyEmail(email);
      const isValidPassword = VerifyPassword(password)
      const isValidUserName = VerifyUserName(username)
      const isPasswordMatch = confirmPassword === password;
      setInvalidEmail(!isValidEmail)
      setIsSmallPassword(!isValidPassword)
      setInValidUserName(!isValidUserName)
      setMissMatchPassword(!isPasswordMatch)
      
      if(isValidEmail && isValidPassword && isValidUserName && isPasswordMatch){
          setEmail('')
          setPassword('')
          setUserName('')
          setConfirmPassword('')
          setSuccess(pre => !pre)
      }
  }


  return (
    <div id="signup-container" className='signup-card w-full p-5 flex flex-col items-center'>
      <h1 className='text-3xl lg:text-4xl tracking-wide text-center font-extrabold '>Sign Up</h1>
            <form onSubmit={(e) => e.preventDefault()} className='login-form-element w-10/12' noValidate>
               <div className='input-card'>
                    <label htmlFor='username' className='input-label text-xs md:text-sm' >Username</label>
                    <input 
                        type='text' 
                        id='username' 
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        className='input-element font-bold' required 
                    />
                    {isInValidUserName && <p className='text-xs text-red-700'>*Invalid username</p>}
                </div>
                <div className='input-card'>
                    <label htmlFor='signup-password' className='input-label  text-xs sm:text-sm'>Password</label>
                    <input 
                        type='password' 
                        id='signup-password' 
                        value={password}
                        className='input-element font-bold' 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    {isSmallPassword && <p className='text-xs text-red-700'>*password is too small</p>}
                </div>
                <div className='input-card'>
                    <label htmlFor='confirm-password' className='input-label  text-xs sm:text-sm'>Confirm Password</label>
                    <input 
                        type='password' 
                        id='confirm-password' 
                        value={confirmPassword}
                        className='input-element font-bold' 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                    />
                    {missMatchPassword && <p className='text-xs text-red-700'>*passwords you entered do not match</p>}
                </div>
                <div className='input-card'>
                    <label htmlFor='signup-email' className='input-label text-xs sm:text-sm' >Email</label>
                    <input 
                        type='text' 
                        id='signup-email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input-element font-bold' required 
                    />
                    {isInvalidEmail && <p className='text-xs text-red-700'>*Invalid email</p>}
                </div>
                <button 
                    onClick={() => handleSignBtn()}
                    className='signUp-button text-xl font-bold'>Sign Up</button>
            </form>
            <p className='mt-5 flex flex-col sm:block text-sm sm:text-base'>Already have an account?&nbsp;  
                <button className='SignUp-btn' onClick={() => toggle()}>Sign in</button>
            </p>
            <p className='mt-5 text-gray-600'>or you can sign in with</p>
            <div className='flex gap-5 mt-5 social-sigup-card'>
                <i className="fa-brands fa-google text-4xl"></i>
                <i className="fa-brands fa-facebook text-4xl"></i>
            </div>
    </div>
  )
}

export default SignUp