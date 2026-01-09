"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slideshow.css';


interface Props {
    images: string[];
    title:string;
    className?: string;
}


export const HeadSlide = ({images, title, className}: Props) => {
return (
    <div className={className}>

    <Swiper
    spaceBetween={40}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: false,}}
        pagination={{clickable: true,}}
        centeredSlides={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
    
    >
    {
    images.map( image=>(
        <SwiperSlide key={image}>

            <Image
            width={1024}
            height={900}
            src={image}
            alt={title}
            className='rounded-lg object-fill'>
            </Image>
          

        </SwiperSlide>
    ))}
    </Swiper>
    </div>
)
}
