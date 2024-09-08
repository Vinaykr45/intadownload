import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { it } from 'node:test'
import { ContentProps } from './types'



const Faqs:React.FC<ContentProps> = ({content}) => {
const contents:any = content;
console.log(contents)
//   const content:any[] =[
//     {
//       question: "What is Istaloader?",
//       answer: "Istaloader is a free online tool that allows you to download Instagram videos, reels, images, IGTV videos, and stories with just a few clicks. It's fast, easy to use, and requires no registration."
//     },
//     {
//       question: "How can I download Instagram videos using Istaloader?",
//       answer: "To download Instagram videos with Istaloader, simply copy the URL of the video you want to download, paste it into the search bar on Istaloader, and click the 'Download' button. The video will be available for download in seconds."
//     },
//     {
//       question: "Can I download Instagram reels using Istaloader?",
//       answer: "Yes, Istaloader allows you to download Instagram reels quickly and easily. Just paste the reel's URL into the search bar and hit 'Download' to save it to your device."
//     },
//     {
//       question: "How do I download Instagram images with Istaloader?",
//       answer: "To download Instagram images, copy the image URL from Instagram, paste it into Istaloader's search bar, and click 'Download.' The image will be available for download in high resolution."
//     },
//     {
//       question: "Is it possible to download IGTV videos using Istaloader?",
//       answer: "Absolutely! Istaloader supports downloading IGTV videos. Just copy the IGTV video URL, paste it into the search bar on Istaloader, and click 'Download' to save it."
//     },
//     {
//       question: "Can I download Instagram stories with Istaloader?",
//       answer: "Yes, you can download Instagram stories with Istaloader. Simply copy the story's URL, paste it into the search bar, and click 'Download' to save it to your device."
//     },
//     {
//       question: "Is Istaloader free to use?",
//       answer: "Yes, Istaloader is completely free to use. You can download unlimited Instagram videos, reels, images, IGTV videos, and stories without any cost or registration."
//     },
//     {
//       question: "Do I need to install any software to use Istaloader?",
//       answer: "No, Istaloader is an online tool, so there's no need to install any software. You can use it directly from your web browser on any device."
//     },
//     {
//       question: "Is it legal to download content from Instagram using Istaloader?",
//       answer: "Downloading content from Instagram is subject to Instagram's terms of service and copyright laws. Istaloader is a tool to help you download publicly available content, but it's your responsibility to ensure you're not violating any copyright or intellectual property rights."
//     },
//     {
//       question: "Can I use Istaloader on my mobile device?",
//       answer: "Yes, Istaloader is mobile-friendly and works seamlessly on smartphones and tablets. You can download Instagram content directly to your mobile device using any browser."
//     },
//     {
//       question: "What formats are supported by Istaloader for downloading?",
//       answer: "Istaloader typically downloads Instagram videos in MP4 format and images in JPG format, ensuring compatibility with most devices and media players."
//     },
//     {
//       question: "How do I report a problem with Istaloader?",
//       answer: "If you encounter any issues while using Istaloader, please contact our support team through the 'Contact Us' page on our website. We'll be happy to assist you."
//     }
// ]

return (
<>
<div className='mt-14'>
      <h1 className='text-[30px] font-bold text-blue-700 text-center'>Frequently asked questions(FAQ)</h1>
    </div>
<div className='flex items-center justify-center'> 
  <div className='flex items-center justify-center lg:w-[60%] max-[700px]:w-[90%]'>   
  <Accordion allowToggle className="mx-auto w-full">
      {
       contents.length!==0 ? contents.map((item:any,index:number)=>
          <AccordionItem>
        <h2>
          <AccordionButton className="px-4 py-6 my-4 rounded-md shadow-md bg-[#FFFFFF] hover:bg-[#fffdfd]">
            <Box flex="1" textAlign="left" className="text-lg font-medium text-gray-700">
             {item.question}
            </Box>
            <AccordionIcon fontSize={30}/>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="px-4 py-2 text-gray-600 text-lg">
          {item.answer}
        </AccordionPanel>
      </AccordionItem>
        ) : null
      }

    </Accordion>
</div>
</div> 
</>
  )
}

export default Faqs
