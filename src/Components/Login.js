import React, { useState } from 'react'
import Header from './Header'
import { BANNER_URL } from '../Utils/constatnts'

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute -z-10'>
            <img className='object-cover' src={BANNER_URL} alt='banner'/>
        </div>
        <form className='absolute bg-black text-white left-0 right-0 w-1/3 mx-auto my-40 bg-opacity-80 p-12'>
            <h1 className='text-3xl font-bold'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input className='bg-gray-700 w-full rounded-lg p-4 my-4' type='text' placeholder='Full Name'/>}
            <input className='bg-gray-700 w-full rounded-lg p-4 my-4' type='email' placeholder='Email Address'/>
            <input className='bg-gray-700 w-full rounded-lg p-4 my-4' type='password' placeholder='Password'/>
            <button className='bg-red-700 w-full rounded-lg p-4 my-4 font-bold text-xl'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New To Netflix? Sign Up":"Already Registered!!! Sign In"}</p>
        </form>
    </div>
  )
}

export default Login