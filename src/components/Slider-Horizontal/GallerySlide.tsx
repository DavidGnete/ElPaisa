"use client";
import { Keyboard, Scrollbar, Navigation, Pagination} from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { Swiper as SwiperCard, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slideCard.css';


interface GallerySlideProps {
    images: string[];
}

export const GallerySlide = ({images}: GallerySlideProps) => {
  return (
     <div className='hero-swiper'>
    
      <SwiperCard
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map(image => ( 
            <SwiperSlide key={image}>
                <Image 
                width={300}
                height={300}
                alt='carrusel images'
                src={image}
                ></Image>

                </SwiperSlide>
      ))}
      </SwiperCard>
    </div>
  )
}
