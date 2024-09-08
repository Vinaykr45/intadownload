"use client";
import React from 'react'
import Image from 'next/image'
import logo from '../images/icons.png'
import Timeline from '../timeline'
import Info from '../info';
import { useEffect } from 'react';
import Faqs from '../faqs';
const Reels = () => {

  const events:any[] = [
    {id:1,
     text:`Navigate to the Instagram post containing the video you want to download.
      Tap on the three dots in the top right corner of the post, then select "Copy Link" from the dropdown menu. 
      The video URL is now copied to your clipboard.`
    },
    {id:2,
      text:`Visit our website, Instaloader. Locate the input field designed for pasting the Instagram URL.
       Paste the copied URL into this field and click on the "Download" button.`
     },
     {id:3,
      text:`Instaloader will process the URL and fetch the video file.
       Once the video appears, click the "Download" button, and the video will start downloading to your device, ready for offline viewing.`
     }
  ]

  const content:any[] =[
    {
      question: "What is Istaloader?",
      answer: "Istaloader is a free online tool that allows you to download Instagram videos, reels, images, IGTV videos, and stories with just a few clicks. It's fast, easy to use, and requires no registration."
    },
    {
      question: "How can I download Instagram videos using Istaloader?",
      answer: "To download Instagram videos with Istaloader, simply copy the URL of the video you want to download, paste it into the search bar on Istaloader, and click the 'Download' button. The video will be available for download in seconds."
    },
    {
      question: "Can I download Instagram reels using Istaloader?",
      answer: "Yes, Istaloader allows you to download Instagram reels quickly and easily. Just paste the reel's URL into the search bar and hit 'Download' to save it to your device."
    },
    {
      question: "How do I download Instagram images with Istaloader?",
      answer: "To download Instagram images, copy the image URL from Instagram, paste it into Istaloader's search bar, and click 'Download.' The image will be available for download in high resolution."
    },
    {
      question: "Is it possible to download IGTV videos using Istaloader?",
      answer: "Absolutely! Istaloader supports downloading IGTV videos. Just copy the IGTV video URL, paste it into the search bar on Istaloader, and click 'Download' to save it."
    },
    {
      question: "Can I download Instagram stories with Istaloader?",
      answer: "Yes, you can download Instagram stories with Istaloader. Simply copy the story's URL, paste it into the search bar, and click 'Download' to save it to your device."
    },
    {
      question: "Is Istaloader free to use?",
      answer: "Yes, Istaloader is completely free to use. You can download unlimited Instagram videos, reels, images, IGTV videos, and stories without any cost or registration."
    },
    {
      question: "Do I need to install any software to use Istaloader?",
      answer: "No, Istaloader is an online tool, so there's no need to install any software. You can use it directly from your web browser on any device."
    },
    {
      question: "Is it legal to download content from Instagram using Istaloader?",
      answer: "Downloading content from Instagram is subject to Instagram's terms of service and copyright laws. Istaloader is a tool to help you download publicly available content, but it's your responsibility to ensure you're not violating any copyright or intellectual property rights."
    },
    {
      question: "Can I use Istaloader on my mobile device?",
      answer: "Yes, Istaloader is mobile-friendly and works seamlessly on smartphones and tablets. You can download Instagram content directly to your mobile device using any browser."
    },
    {
      question: "What formats are supported by Istaloader for downloading?",
      answer: "Istaloader typically downloads Instagram videos in MP4 format and images in JPG format, ensuring compatibility with most devices and media players."
    },
    {
      question: "How do I report a problem with Istaloader?",
      answer: "If you encounter any issues while using Istaloader, please contact our support team through the 'Contact Us' page on our website. We'll be happy to assist you."
    }
  ]
  

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
    <div className='my-8'>
      <div className='flex justify-center'>
      <div className='flex  lg:w-[60vw] w-[80vw] lg:flex-row flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex lg:w-[30%] rounded-lg'>
             <Image src={logo} alt='icon' className='lg:w-[250px] w-fit max-[700px]:rounded-t-lg lg:rounded-l-lg'/>
          </div>
          <div className='lg:w-[70%] p-5 lg:px-8'>
            <h1 className='text-blue-600 text-2xl mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p>
             Reels Downloader, powered by FastDl, is a user-friendly tool for downloading Instagram Reels videos. Effortlessly save Reels in mp4 format to your device. To download, just copy the Reel's link from Instagram, then paste it on fastdl.app. This efficient service streamlines downloading Instagram Reels with just a few clicks.
             </p>
          </div>
      </div>
    </div>
    </div>
    <div className='my-10'>
      <Timeline event={events}/>
      </div>
      <div>
      <div className='mt-8'>
      <h1 className='text-[30px] font-bold text-blue-700 text-center'>Instaloader Features</h1>
    </div>
       <div className=" flex flex-col items-center justify-center">
       <div className='flex lg:w-[60vw] w-[80vw] lg:flex-row-reverse flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex justify-end lg:w-[30%] rounded-lg'>
             <Image src={logo} alt='icon' className='lg:w-[250px] w-fit max-[700px]:rounded-t-lg lg:rounded-r-lg'/>
          </div>
          <div className='lg:w-[70%] p-5 lg:px-8'>
            <h1 className='text-blue-600 text-2xl mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p>
             Reels Downloader, powered by FastDl, is a user-friendly tool for downloading Instagram Reels videos. Effortlessly save Reels in mp4 format to your device. To download, just copy the Reel's link from Instagram, then paste it on fastdl.app. This efficient service streamlines downloading Instagram Reels with just a few clicks.
             </p>
          </div>
      </div>
      <div className='flex  lg:w-[60vw] w-[80vw] lg:flex-row flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex lg:w-[30%] rounded-lg'>
             <Image src={logo} alt='icon' className='lg:w-[250px] w-fit max-[700px]:rounded-t-lg lg:rounded-l-lg'/>
          </div>
          <div className='lg:w-[70%] p-5 lg:px-8'>
            <h1 className='text-blue-600 text-2xl mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p>
             Reels Downloader, powered by FastDl, is a user-friendly tool for downloading Instagram Reels videos. Effortlessly save Reels in mp4 format to your device. To download, just copy the Reel's link from Instagram, then paste it on fastdl.app. This efficient service streamlines downloading Instagram Reels with just a few clicks.
             </p>
          </div>
      </div>
      <div className='flex lg:w-[60vw] w-[80vw] lg:flex-row-reverse flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex justify-end lg:w-[30%] rounded-lg'>
             <Image src={logo} alt='icon' className='lg:w-[250px] w-fit max-[700px]:rounded-t-lg lg:rounded-r-lg'/>
          </div>
          <div className='lg:w-[70%] p-5 lg:px-8'>
            <h1 className='text-blue-600 text-2xl mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p>
             Reels Downloader, powered by FastDl, is a user-friendly tool for downloading Instagram Reels videos. Effortlessly save Reels in mp4 format to your device. To download, just copy the Reel's link from Instagram, then paste it on fastdl.app. This efficient service streamlines downloading Instagram Reels with just a few clicks.
             </p>
          </div>
      </div>
       </div>
      </div>
      <div>
        <Info/>
      </div>
      <div>
        <Faqs content={content}/>
      </div>
    </>
  )
}

export default Reels
