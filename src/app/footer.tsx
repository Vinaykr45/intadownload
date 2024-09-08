import React from 'react'
import Image from 'next/image'
import logo from './images/logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#ffffffec] rounded-lg shadow-md mt-6">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="/"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
         <Image src={logo} alt='logo' width={50}/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FC5741]">
            Instaloder
          </span>
        </a>
        <ul className="flex flex-wrap items-center text-md font-medium">
          <li>
            <a href="#" className="hover:text-gray-700 me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700 me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className='block text-lg font-bold sm:text-center'>We are not affiliated with Instagram or Meta</span>
      <span className="block text-lg font-bold sm:text-center ">
        © 2023{" "}
        <a href="/" className="">
          Instaloader
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
  
  )
}

export default Footer
