"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slideshow.css';
import { BrandStatement } from '@/components/ui/brandState/BrandStatement';


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
        fadeEffect={{crossFade:true}}
        speed={2500}
        navigation
        loop
        autoplay={{delay: 5000, disableOnInteraction: false,}}
        centeredSlides={true}
        modules={[EffectFade, Navigation,  Autoplay]}
        className="mySwiper"
    
    >
    {
    images.map( image=>(
        <SwiperSlide key={image} className='relative w-full '>

            <Image
            src={image}
            alt={title}
            fill
            quality={100} 
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw'
            className='object-cover'>
            </Image>
          
            <div className="absolute inset-0 bg-black/30" />
        </SwiperSlide>
    ))}
    </Swiper>

    <div className='flex flex-col justify-center items-center
    absolute
  top-[85%] md:top-2/3
  lg:top-[90%] lg:bottom-50 
  left-1/2
  transform -translate-x-1/2 -translate-y-1/2
  w-[95%] sm:w-[85%] md:w-[80%] lg:w-[95%]
  gap-4 text-left z-20 px-10'>
        <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 
        text-white font-extrabold 
        leading-tight'>Diseño, precisión y tradición</h1>
    
    <button className=' sm:mt-4 
    
    px-7 py-3
    sm:px-8 sm:py-4
    lg:px-10 lg:py-5
    sm:text-lg lg:text-xl
    cursor-pointer
    text-black
    bg-white/50
    shadow-[0_0_40px_rgba(0,0,0,0.5)]
    transition-all duration-300
    hover:scale-105'>
        PORTAFOLIO
    </button>
</div>
    </div>
)
}
