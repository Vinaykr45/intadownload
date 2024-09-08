"use client";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { FaPaste } from "react-icons/fa";
import axios from "axios";
import { usePathname } from "next/navigation";
import Instruction from "./instruction";
import Preview from "./preview";
import { Audio,Hourglass } from 'react-loader-spinner'
import { RiFolderVideoLine } from "react-icons/ri";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import Link from "next/link";


export default function Home() {

  const [url,seturl] = useState('');
  const [data,setdata] = useState([]);
  const [show,setshow] = useState(true)
  const [home,sethome] = useState(true)
  const [error,seterror] = useState(false)
  const [errmesg,seterrmesg] = useState('')
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      seturl(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

 const pathname = usePathname();
 
 useEffect(()=>{
  if (pathname!=='/') {
    sethome(false)
   }
 },[pathname])

  const handleClear = () => {
    seturl('');
    setdata([]);
    setshow(true);
  }

  const handelSubmit = async() => {
     try {
      setshow(false)
      const fetch = await axios.post('http://127.0.0.1:5000/download',{url})
      // console.log(fetch.data[0])
      setdata(fetch.data)
      setshow(false)
     } catch (error:any) {
      console.log(error.status)
      if (error.status===500) {
        seterror(true)
        seterrmesg('Something went wrong please try again !')
      }

     }
  }

  const handleinput = () => {
    const check = url.includes('https://www.instagram.com/p') || url.includes('https://www.instagram.com/reel') ||
    url.includes('https://www.instagram.com/stories') || url.includes('https://www.instagram.com/tv')
    if (check){
      setshow(true)
      seterror(false)
    }
    if (!check){
      setshow(false)
      seterror(true)
      seterrmesg('Link format is incorrect')
    }
    
  }
  

useEffect(()=>{
 if (url.length===0) {
  setdata([]);
  setshow(true);
 }
 else if (url.length!==0) {
  handleinput();
 }

},[url])


const elemets:any[]=[
{
id:1,
image:<RiFolderVideoLine/>,
name:'Video',
target:'/video'
},
{
  id:2,
  image:<HiOutlinePhotograph/>,
  name:'Photo',
  target:'/image'
  },
{
    id:3,
    image:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"><path d="M14.837 15.778H2.985a1.481 1.481 0 0 1-1.481-1.482V3.926a1.482 1.482 0 0 1 1.481-1.482h11.852a1.482 1.482 0 0 1 1.482 1.482v10.37a1.481 1.481 0 0 1-1.482 1.482ZM1.504 6.148h14.815M5.948 6.148l.74-3.704M11.133 6.148l.74-3.704"></path></g></svg>,
    name:'Reels',
    target:'/reels'
},
{
  id:4,
  image:<MdOutlineSlowMotionVideo/>,
  name:'Story',
  target:'/stories'
},
{
  id:5,
  image:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"><path d="M12.76 3.482a1.58 1.58 0 0 1 1.58 1.58M13.55 1.111a3.16 3.16 0 0 1 3.16 3.16M14.34 7.433v3.95a1.58 1.58 0 0 1-1.58 1.58H3.278a1.58 1.58 0 0 1-1.58-1.58v-6.32a1.58 1.58 0 0 1 1.58-1.581h7.112M4.858 15.333h6.322"></path></g></svg>,
  name:'IGTV',
  target:'/igtv'
  },
]

  return (
   <>
  <div className="w-full h-[24rem] max-[650px]:h-[30rem] bg-gradient-to-r from-red-500 to-orange-500">
     <div className="flex flex-col justify-center items-center">
        <div className="pt-10">
          <div className="flex text-white gap-8 bg-white bg-opacity-25 p-4 px-10 rounded-md">
            {
              elemets.map((items,index)=>
              <>
              <Link href={items.target} className="flex items-center gap-5 justify-center">
               <div className="flex justify-center items-center gap-2">
                 <span>{items.image}</span>
                 <span className="max-[700px]:hidden">{items.name}</span>
               </div>
              {
                index===4 ?  null : <div className="h-[100%] w-[1px] bg-white"></div>
              }
               </Link>
              </>
              )
            }
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-4 pt-10">
          <h1 className="text-white font-bold max-[650px]:text-xl text-3xl">Instagram Downloader</h1>
          <span className="text-white font-bold text-xl">Download Video, Reels, Photo, IGTV, carousel from Instagram</span>
        </div>
        <div className="flex mt-8 items-center lg:w-[40rem] max-[700px]:w-[90vw] h-[6rem] gap-2 bg-white rounded-md">
          <input type="text" value={url} onChange={(e)=>seturl(e.target.value)} className="px-4 rounded-md text-lg h-[100%] w-[65%]" placeholder="Insert instagram link here" />
        
         {
          url.length===0 ? <button onClick={handlePaste} className="flex items-center lg:w-[18%] max-[650px]:w-[30%] justify-center text h-[4.5rem]  rounded-md bg-gray-200 gap-2"><FaPaste/>Paste</button>:
          <button onClick={handleClear} className="flex items-center lg:w-[18%] justify-center text h-[4.5rem]  rounded-md bg-gray-200 gap-2"><RxCross2/>Clear</button>
         }
        
         <div className="max-[650px]:hidden w-[20%] pr-2">
          {
            show ? <button className="bg-blue-500 h-[4.5rem] mr-2 w-full rounded-md text-white" onClick={handelSubmit}>Download</button> :
            <button className="bg-gray-400 h-[4.5rem] w-full mr-2 rounded-md text-white" disabled>Download</button>
          }
          </div>
        </div>
        <div className="w-full text-center my-4 lg:hidden">
          {
            show ? <button className="bg-blue-500 h-[4.5rem]  w-[90vw] rounded-md text-white" onClick={handelSubmit}>Download</button> :
            <button className="bg-gray-400 h-[4.5rem]  w-[90vw] rounded-md text-white" disabled>Download</button>
          }
          </div>
     </div>
  </div>
  <div className="w-[100%]">
  {
    data.length!==0 ?  <Preview data={data} /> : !show ?
     error ?
      <div className="flex items-center justify-center my-5">
         <span className="p-8 w-[60%] text-center font-bold text-lg border border-red-400 rounded-md">{errmesg}</span>
      </div>
     :<div className="flex items-center justify-center my-5">
     <Hourglass
visible={true}
height="80"
width="80"
ariaLabel="hourglass-loading"
wrapperStyle={{}}
wrapperClass=""
colors={['#F0493E', '#F86E1B']}/>
  </div> 
     : null
  }
  </div>
  <div>
    {
      home ? <Instruction/> : null
    }
  </div>
 
   </>
  );
}
