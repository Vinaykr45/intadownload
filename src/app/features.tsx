import Image from "next/image"
import poster4 from './images/poster 4.jpg'
import poster2 from './images/poster 2.jpg'
import poster3 from './images/poster 3.jpg'

const Features = () => {
  return (
    <>
    <div>
    <div className='mt-8'>
      <h1 className='text-[30px] max-[650px]:text-xl font-bold text-blue-700 text-center'>Instaloader Features</h1>
    </div>
       <div className=" flex flex-col items-center justify-center">
       <div className='flex lg:w-[60vw] w-[80vw] lg:flex-row-reverse flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex justify-end lg:w-[30%] rounded-lg'>
             <Image src={poster4} alt='icon' className='lg:w-[300px] w-fit max-[700px]:rounded-t-lg lg:rounded-r-lg'/>
          </div>
          <div className='lg:w-[70%] p-4 lg:px-8'>
            <h1 className='text-blue-600 text-2xl max-[650px]:text-lg mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p className="max-[650px]:text-md">
             Reels Downloader, powered by FastDl, is a user-friendly tool for downloading Instagram Reels videos. Effortlessly save Reels in mp4 format to your device. To download, just copy the Reel's link from Instagram, then paste it on fastdl.app. This efficient service streamlines downloading Instagram Reels with just a few clicks.
             </p>
          </div>
      </div>
      <div className='flex  lg:w-[60vw] w-[80vw] lg:flex-row flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex lg:w-[30%] rounded-lg'>
             <Image src={poster2} alt='icon' className='lg:w-[300px] w-fit max-[700px]:rounded-t-lg lg:rounded-l-lg'/>
          </div>
          <div className='lg:w-[70%] p-4 lg:px-8'>
            <h1 className='text-blue-600 text-2xl max-[650px]:text-lg mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p className="max-[650px]:text-md">
             Reels Downloader, powered by FastDl, is a user-friendly tool for downloading Instagram Reels videos. Effortlessly save Reels in mp4 format to your device. To download, just copy the Reel's link from Instagram, then paste it on fastdl.app. This efficient service streamlines downloading Instagram Reels with just a few clicks.
             </p>
          </div>
      </div>
      <div className='flex lg:w-[60vw] w-[80vw] lg:flex-row-reverse flex-col my-5 items-center justify-center shadow-md rounded-lg'>
          <div className='flex justify-end lg:w-[30%] rounded-lg'>
             <Image src={poster3} alt='icon' className='lg:w-[300px] w-fit max-[700px]:rounded-t-lg lg:rounded-r-lg'/>
          </div>
          <div className='lg:w-[70%] p-4 lg:px-8'>
            <h1 className='text-blue-600 text-2xl max-[650px]:text-lg mb-4 font-bold'>Download Instagram Image and Videos</h1>
             <p className="max-[650px]:text-md">
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
