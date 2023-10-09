import slider1 from '../../assets/heroSlider/banner1.jpg'
import slider2 from '../../assets/heroSlider/banner2.jpg'
import slider3 from '../../assets/heroSlider/banner3.jpg'
import slider4 from '../../assets/heroSlider/banner4.jpg'
import pic1 from '../../assets/heroSlideRightSidebar/img1.jpg';
import pic2 from '../../assets/heroSlideRightSidebar/img2.jpg';
import pic3 from '../../assets/heroSlideRightSidebar/img3.jpg';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };
   return (
      <div id='parentDiv' className='row mb-1'>
         <div className='col-md-9'>
            <Swiper
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
               onAutoplayTimeLeft={onAutoplayTimeLeft}
               className="mySwiper"
            >
               <SwiperSlide><img src={slider1} alt='imag-1' /></SwiperSlide>
               <SwiperSlide><img src={slider2} alt='imag-2' /></SwiperSlide>
               <SwiperSlide><img src={slider3} alt='imag-3' /></SwiperSlide>
               <SwiperSlide><img src={slider4} alt='imag-4' /></SwiperSlide>


               <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                     <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
               </div>
            </Swiper>
         </div>
         <div id='rightSideBar' className='col-md-3'>
            <img className='rightSideBarImage' src={pic1} alt='imag-1' />
            <img className='rightSideBarImage' src={pic2} alt='imag-1' />
            <img className='rightSideBarImage' src={pic3} alt='imag-1' />
         </div>
      </div>
   );
}
