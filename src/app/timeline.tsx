import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'
// import { MdWork } from 'react-icons/md';
import Image from 'next/image';
import banner1 from './images/banner4.png'
import banner2 from './images/banner1.png'
import banner3 from './images/banner2.png'
import { EventProps } from './types';

const Timeline: React.FC<EventProps> = ({event}) => {
  return (
    <>
    <div className='my-6'>
      <h1 className='text-[30px] max-[650px]:text-xl font-bold text-blue-700 text-center'>HOW TO DOWNLOAD VIDEO FROM INSTAGRAM?</h1>
    </div>
    <VerticalTimeline lineColor='#F97317'>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: '#EF4444', color: '#fff' }}
        icon={<div className='text-center' style={{ fontSize: 25, fontWeight: 'bold' }}>{1}</div>}
         >
      <Image src={banner1} alt='banner' width={420} className=' scale-110'/>
      <div className="vertical-timeline-element-date">
          <h4 className="custom-heading text-[24px] max-[650px]:text-xl font-bold">Copy the URL</h4>
          <span className="custom-span">{event[0].text}</span>
     </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: '#EF4444', color: '#fff' }}
        icon={<div className='text-center' style={{ fontSize: 25, fontWeight: 'bold' }}>{2}</div>}
         >
      <Image src={banner2} alt='banner' width={420} className=' scale-150 max-[650px]:scale-125'/>
      <div className="vertical-timeline-element-date my-10">
          <h4 className="custom-heading text-[24px] max-[650px]:text-xl font-bold">Paste the URL on Instaloader</h4>
          <span className="custom-span">{event[1].text}</span>
     </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: '#EF4444', color: '#fff' }}
        icon={<div className='text-center' style={{ fontSize: 25, fontWeight: 'bold' }}>{3}</div>}
         >
      <Image src={banner3} alt='banner' width={420} className=' lg:scale-125'/>
      <div className="vertical-timeline-element-date">
          <h4 className="custom-heading text-[24px] max-[650px]:text-xl font-bold">Download the File</h4>
          <span className="custom-span">{event[2].text}</span>
     </div>
      </VerticalTimelineElement>
      {/* Add more timeline elements here */}
    </VerticalTimeline>
    </>
  );
};




export default Timeline;
