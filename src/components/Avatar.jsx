import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Avatar({avatarData}) {
  
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='avatar-section'>
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
        {avatarData.map((avatar, index) => (
               <SwiperSlide key={index}>
               <div className="container grid grid-one-col avatar-slider">
               <div className="symbol">
                   <i className='s'>
                     {avatar.qSymbol}
                   </i>
               </div>
               <div className="avatar-img">
                   <img src={avatar.avatarImg} />
               </div>
               <h5 className="avatar-para">
                {avatar.avatarpara}
               </h5>
               <h6 className="avatar-name">
                {avatar.avatarName}
               </h6>
               <p className="designation">
                {avatar.designation}
               </p>
               </div>
                   </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
    
        <div className="autoplay-progress" slot="container-end">
          <svg  ref={progressCircle}>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
