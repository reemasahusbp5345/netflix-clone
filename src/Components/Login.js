import React, { useRef, useState } from 'react'
import Header from './Header'
import { BANNER_URL } from '../Utils/constatnts'
import { validate } from '../Utils/validate';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage, setErrorMessage]=useState(null);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleForm = () =>{
        const message=validate(email.current.value,password.current.value);
        setErrorMessage(message);
    }
  return (
    <div>
        <Header/>
        <div className='absolute -z-10'>
            <img className='object-cover' src={BANNER_URL} alt='banner'/>
        </div>
        <form onSubmit={e=>e.preventDefault()} className='absolute bg-black text-white left-0 right-0 w-1/3 mx-auto my-40 bg-opacity-80 p-12'>
            <h1 className='text-3xl font-bold'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input className='bg-gray-700 w-full rounded-lg p-4 my-4' ref={name} type='text' placeholder='Full Name'/>}
            <input className='bg-gray-700 w-full rounded-lg p-4 my-4' type='text' ref={email} placeholder='Email Address'/>
            <input className='bg-gray-700 w-full rounded-lg p-4 my-4' type='password' ref={password} placeholder='Password'/>
            <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='bg-red-700 w-full rounded-lg p-4 my-4 font-bold text-xl' onClick={handleForm}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New To Netflix? Sign Up":"Already Registered!!! Sign In"}</p>
        </form>
    </div>
  )
}

export default Login