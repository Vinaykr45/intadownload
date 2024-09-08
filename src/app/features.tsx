import Image from "next/image"
import logo from './images/icons.png'

const Features = () => {
  return (
    <>
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
    </>
  )
}

export default Features
