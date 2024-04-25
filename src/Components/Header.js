import React from 'react'
import logo from "../assets/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black'>
        <img className='w-56 mx-32 my-5' src={logo} alt="logo"/>
    </div>
  )
}

export default Header