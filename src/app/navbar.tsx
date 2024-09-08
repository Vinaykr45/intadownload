"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import img from './images/logo.png'

const navbar = () => {
 
  const [show,setShow] = useState<boolean>(false);
  
  return (
    <>
  <nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <Image src={img} alt='logo' width={50}/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FC5741]">
        Instaloder
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
      data-target="#navbar-default"
      onClick={()=>show ? setShow(false):setShow(true)}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className={show?"w-full md:block md:w-auto":"hidden w-full md:block md:w-auto"} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-black  rounded md:bg-transparent md:p-0 hover:text-slate-300 "
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-black  rounded md:bg-transparent md:p-0 hover:text-slate-300"
          >
            About
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default navbar
