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
        autoplay={{delay: 4000, disableOnInteraction: false,}}
        centeredSlides={true}
        modules={[EffectFade, Navigation,  Autoplay]}
        className="mySwiper w-full h-full"
    
    >
    {
    images.map( image=>(
        <SwiperSlide key={image} className='relative w-full h-[70vh] sm:h-[80vh] lg:h-[65vh] xl:h-[70vh]'>
            <div className=''>   
            <Image
            src={image}
            alt={title}
            fill
            quality={100} 
            sizes=' 100vw'
            className=' object-cover
    object-center
    lg:object-center'>
            </Image>
          
            <div className="absolute inset-0 bg-black/30" />
        </div>
    </SwiperSlide>
    ))}
    </Swiper>

    <div className='absolute
    inset-x-0
    bottom-10
    sm:bottom-14
    lg:bottom-20
    flex
    flex-col
    items-center
    gap-4
    z-20
    px-6
    sm:px-10
    text-center'>
        <h1 className='text-2xl
      sm:text-4xl
      md:text-4xl
      lg:text-4xl
      xl:text-4xl
      text-white
      font-extrabold
      leading-tight
      max-w-4xl'>Cocinas integrales Diseño Interiores</h1>
    
    <button
    onClick={() => {
        const section = document.getElementById('portafolio');
        section?.scrollIntoView({behavior: 'smooth'});
    }}
    className=' px-7 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 sm:text-lg lg:text-xl bg-white/50 text-black'>
        PORTAFOLIO
    </button>
</div>
    </div>
)
}
