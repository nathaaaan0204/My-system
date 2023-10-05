import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Typography } from '@material-tailwind/react';
import { GalleryPictures } from '../utils/Data';

export const ImageSwiper = () => {
  return (
    <>
    <div className='my-32 text-center justify-center 2xl:mx-96'>
     <Typography className="font-bold text-green text-3xl">Gallery</Typography>
     
      <Swiper
     
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="w-100 pt-12 pb-12"
      >
        {GalleryPictures.map((item) => (
        <SwiperSlide   key={item.id} className='bg-center bg-cover w-[400px] h-[400px]'>
          <img src={item.imagesrc} alt={item.alt} className='block w-100 rounded object-cover' />
        </SwiperSlide>
       ))} 
      </Swiper>
         
      </div>
    </>
  );
}