import React from 'react'
import { Geistmono } from '@/config/fonts';

export const BrandStatement = () => {
  return (
    <div className=" flex flex-col items-center  w-full bg-gray-100">
      <div className='mt-10 '>
        
        {/* linea separadora */}
        <div  className="w-50 sm:w-290 h-px bg-gray-300 mb-10 sm:mb-12 my-10" />
        <p className={`${Geistmono.className}
          text-black 
          text-sm sm:text-base md:text-base lg:text-lg xl:text-2xl 
          max-w-7xl mt-4 sm:mt-6 leading-relaxed
          px-2`} >
          Durante años hemos construido una filosofía, en donde exaltamos el poder que hay detrás de hacer feliz
          a las personas en su día de trabajo, generando verdaderas conexiones y provocando la transferencia de conocimiento
          entre nuestros usuarios.
        </p>
        </div>
        <div  className="w-50 sm:w-290 h-px bg-gray-300 mb-10 sm:mb-12 my-10" />
      </div>
  )
}
