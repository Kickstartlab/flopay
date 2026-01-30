import React, { useState } from 'react'
import logo from '../assets/logo.png';

export default function Menu() {

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-poppins h-28">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className='w-18' />

          <h3 className='text-2xl text-yellow-100 font-semibold'>Flopay</h3>
        </a>

        <nav>
          <ul className="flex justify-center gap-6 pt-4 items-center text-white-100">
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About</a></li>
            <li><a href="#features" className="">Features</a></li>
            <li><a href="#contact" className="">Contact us</a></li>
          </ul>
        </nav>

        <div className='flex items-center gap-4'>
          <button className="border-2 border-yellow-100 rounded-full py-2 lg:px-6 px-4 text-yellow-100 hover:bg-yellow-100 hover:text-white-100 transition-all duration-150">
            Sign in
          </button>

          <button className="border-2 border-yellow-100 rounded-full py-2 lg:px-6 px-4 text-white-100 hover:text-yellow-100 bg-yellow-100 hover:bg-black-100 transition-all duration-150">
            Get Started
          </button>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between py-6">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className='w-10' />

          <h3 className='text-xl text-yellow-100 font-semibold'>Flopay</h3>
        </a>

        <button onClick={ToggleSidebar} className="nav cursor-pointer transition-all duration-300">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''} bg-black-100 border border-white-50 rounded-md`}>
        <div className='p-6'>
          <ul onClick={ToggleSidebar} className='space-y-6'>
            <li><a href="/" className="">Home</a></li>
            <li><a href="#about" className="">About</a></li>
            <li><a href="#features" className="">Features</a></li>
            <li><a href="#contact" className="">Contact us</a></li>
          </ul>
        </div>
      </div>

    </header >
  )
}
