import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import banner1 from '../../assets/grabSlide/grab-1.jpg';
import banner2 from '../../assets/grabSlide/grab-2.jpg';
import banner3 from '../../assets/grabSlide/grab-3.jpg';
import banner4 from '../../assets/grabSlide/grab-4.jpg';
import banner5 from '../../assets/grabSlide/grab-5.jpg';
import banner6 from '../../assets/grabSlide/grab-6.jpg';
import { Image } from 'react-bootstrap';
import Title from '../../components/title/Title';

export default function GrabSlid() {
  return (
    <>
      <Title title={"Hot Offers"} />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={banner1} alt="Image Alt Text" fluid /></SwiperSlide>
        <SwiperSlide><Image src={banner2} alt="Image Alt Text" fluid /></SwiperSlide>
        <SwiperSlide><Image src={banner3} alt="Image Alt Text" fluid /></SwiperSlide>
        <SwiperSlide><Image src={banner4} alt="Image Alt Text" fluid /></SwiperSlide>
        <SwiperSlide><Image src={banner5} alt="Image Alt Text" fluid /></SwiperSlide>
        <SwiperSlide><Image src={banner6} alt="Image Alt Text" fluid /></SwiperSlide>
      </Swiper>
    </>
  );
}
