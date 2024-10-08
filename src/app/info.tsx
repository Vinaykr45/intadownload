import React from 'react'
import { FiDownload } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { BsShield } from 'react-icons/bs';
const Info = () => {
  return (
    <>
    <div>
      <div className='flex items-center justify-center mt-6'>
        <h1 className='text-blue-600 lg:text-3xl max-[600px]:text-xl text-center mb-4 font-bold'>Choose Intaloader for download from Instagram</h1>
      </div>
      <div className='flex items-center justify-center my-8'>
        <div className='lg:grid grid-cols-2 max-[650px]:flex flex-col max-[650px]:gap-5 lg:mt-8 gap-y-[5rem] gap-x-[6rem] lg:w-[65%] max-[700px]:w-[90%] text-center'>
            <div className='flex items-center justify-between flex-col '>
               <FiDownload size={40}/>
               <h1 className='text-blue-600 lg:text-2xl max-[600px]:text-lg mb-4 font-bold mt-2'>Fast Downlaod</h1>
               <span>Our servers are optimized to provide you with the fastest download speeds.</span>
            </div>
            <div className='flex items-center justify-between flex-col '>
               <RiComputerLine size={40}/>
               <h1 className='text-blue-600 lg:text-2xl max-[600px]:text-lg font-bold mt-2'>Support for all devices</h1>
               <span>Whether you're on a mobile, tablet, or desktop, Instaloder has got you covered..</span>
            </div>
            <div className='flex items-center justify-between flex-col '>
               <SlLike size={40}/>
               <h1 className='text-blue-600 lg:text-2xl max-[600px]:text-lg mb-4 font-bold mt-2'>High quality</h1>
               <span>Download Instagram content in its original quality without any loss.</span>
            </div>
            <div className='flex items-center justify-between flex-col '>
               <BsShield size={40}/>
               <h1 className='text-blue-600 lg:text-2xl max-[600px]:text-lg mb-4 font-bold mt-2'>Security</h1>
               <span>We prioritize your privacy. No login required and all downloads are processed securely.</span>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Info
