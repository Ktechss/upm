import React from 'react'
import './PageServices.css';
import SwiperCoverflow from './ui/SwiperCoverflow';
import useIsMobile from '../hooks/useIsMobile';
import MobileSwiperFlat from './ui/MobileSwiperFlat';
import ServiceNavigation from './ServiceNavigation';



function PageServices() {
  const isMobile = useIsMobile();
  const services = [
    { name: 'Media', path: '/media' },
    { name: 'Marketing', path: '/marketing' },
    { name: 'Consulting', path: '/consulting' },
  ];
  return (
    <div className='PageServices' id='services'>
        <h1>What We Do Best</h1>
        <div style={{height:"100%",width:"100%",background:"transparent"}}>
        {/* <SwiperCoverflow/> */}
        {isMobile ? <MobileSwiperFlat/> : <SwiperCoverflow/>}
        </div>
        <ServiceNavigation currentService="" services={services} />
    </div>
  )
}

export default PageServices
