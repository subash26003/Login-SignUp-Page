import { useEffect, useState } from 'react'
import './login.css'

const Login =({toggle,setLogin,setSuccess}) =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [isInvalidEmail,setInvalidEmail] = useState(false)
    const [isSmallPassword,setIsSmallPassword] = useState(false)

    const VerifyEmail = (email) =>{
        const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/ ;
        return emailRegex.test(email)
    }

    const VerifyPassword = (password) =>{
        return password.length >= 8
    }

    const handleLoginBtn = () =>{
        const isValidEmail = VerifyEmail(email);
        const isValidPassword = VerifyPassword(password)
        if(!isValidEmail){
            setInvalidEmail(true)
        }else{
            setInvalidEmail(false)
        }
        if(!isValidPassword){
            setIsSmallPassword(true)
        }else{
            setIsSmallPassword(false)
        }
        if(isValidEmail && isValidPassword){
            setEmail('')
            setPassword('')
            setSuccess(true)
        }
    }

    useEffect(() =>{
        document.getElementById('email').addEventListener('blur' , function(){
            const isInValidEmail = !(VerifyEmail(email)) || email === ''
            setInvalidEmail(isInValidEmail)
        })
        document.getElementById('password').addEventListener('blur' , function(){
            const isInValidPassword = !(VerifyPassword(password)) || password === ''
            setIsSmallPassword(isInValidPassword)
        })
    },[email,password])

    return(
        <div className="login-card w-full p-5 flex flex-col items-center">
            <h1 className='text-3xl md:text-4xl text-blue-800 tracking-wide text-center font-extrabold'>Login</h1>
            <form onSubmit={(e) => e.preventDefault()} className='login-form-element w-10/12' noValidate>
                <div className='input-card'>
                    <label htmlFor='email' className='input-label text-xs sm:text-sm' >Email</label>
                    <input 
                        type='text' 
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input-element font-bold' required 
                    />
                    {isInvalidEmail && <p className='text-xs text-red-700'>*Invalid email</p>}
                </div>
                <div className='input-card'>
                    <label htmlFor='password' className='input-label  text-xs md:text-sm'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        value={password}
                        className='input-element font-bold' 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    {isSmallPassword && <p className='text-xs text-red-700'>*password is too small</p>}
                </div>
                <p className='forget-pass text-xs md:text-base mb-3 text-center'>Forget password? <a href="#">click here</a></p>
                <button 
                    onClick={() => handleLoginBtn()}
                    className='login-btn text-xl font-bold'>Login</button>
            </form>
            <p className='mt-5 flex flex-col sm:block text-xs md:text-base'>Dont't have an account?&nbsp; 
                <button className='SignUp-btn' onClick={() => toggle()}>Sign Up</button>
            </p>
            <p className='text-xs md:text-base mt-2 text-gray-600'>or you can sign in with</p>
            <div className='flex gap-5 mt-5 social-login-card'>
                <i className="fa-brands fa-google text-4xl"></i>
                <i className="fa-brands fa-facebook text-4xl"></i>
            </div>
        </div>
    )
}

export default Login