import React from 'react'
import './PageServices.css';
import SwiperCoverflow from './ui/SwiperCoverflow';
import useIsMobile from '../hooks/useIsMobile';
import MobileSwiperFlat from './ui/MobileSwiperFlat';



function PageServices() {
  const isMobile = useIsMobile();
  return (
    <div className='PageServices' id='services'>
        <h1>What We Do Best</h1>
        <div style={{height:"100%",width:"100%",background:"transparent"}}>
        {/* <SwiperCoverflow/> */}
        {isMobile ? <MobileSwiperFlat/> : <SwiperCoverflow/>}
        </div>
      
    </div>
  )
}

export default PageServices
