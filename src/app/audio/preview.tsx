// import React from 'react';
import { DiVim } from 'react-icons/di';
import { MyComponent } from './type';
import { useEffect, useState } from 'react';
const preview:React.FC<MyComponent> = ({data}) => {
  
const [image,setimage] = useState<string[]>([]);
const [video,setvideo] = useState<string[]>([]);
const [filename,setfilename] = useState<string>('');
const getData = () => {
  if (data.length===0) {
    setimage([]);
    setvideo([])
  }
  data.map((item:any,index:number) =>
     {
      // console.log(index)
        setfilename(item.filename)
        const srt:string = `data:audio/mpeg;base64,${item.media}`
        setvideo((prev:any)=>[...prev,srt])
       
        
      }
    
    )
}


 const uniqueArrayaudio:any[]= video.filter((item, index, self) => self.findIndex((otherItem) => otherItem === item) === index);

 

console.log(video)
console.log(image)
// useEffect(()=>{

// },[data])

useEffect(()=>{
  getData();
},[])


const handelClick = (e:any) => {
  try {
    const urls = e;
    const link1 = urls.split(':')[1];
    const types:string = link1.split(';')[0];
    const ext = types.split('/')[1];
    const link = document.createElement('a');
    link.href = urls;
    link.download = `${filename}.${ext}`;
    link.click();
   
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
     <div className='flex flex-col items-center justify-center my-10'>
     <h1 className='text-3xl font-medium mb-5'>Search Result</h1>
       <div className='flex gap-4 items-center overflow-hidden w-[90%]  flex-wrap resize-y justify-center'>
        
         {
          video.length!==0 ?  
            uniqueArrayaudio.map((items:any)=>
                <>
                <div className='flex justify-center h-fit'>
                <div className='flex flex-col items-center justify-center gap-2'>
                <audio controls  className=' rounded-md'>
                 <source src={items} type="audio/mpeg" />
                </audio>
                <button onClick={()=>handelClick(items)} className='w-[200px] rounded-md shadow-md h-[50px] bg-blue-500 text-white font-bold'>Download</button>
                </div>
                </div>
                </>)
                :null
   }
   
       </div>
     </div>
    </>
  )
}

export default preview
