import React from 'react'
import './PageServices.css';
import SwiperCoverflow from './ui/SwiperCoverflow';

function PageServices() {
  return (
    <div className='PageServices'>
        <h1>What We Do Best</h1>
        <div style={{height:"100%",width:"100%",background:"transparent"}}>
        <SwiperCoverflow/>
        </div>
      
    </div>
  )
}

export default PageServices
