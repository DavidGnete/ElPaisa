import React from 'react'
import { Geistmono,CaveatStyle } from '@/config/fonts';

export const BrandStatement = () => {
  return (
    <div className=" flex flex-col items-center  w-full bg-gray-100 ">

      <div className='md:mt-10 w-full flex flex-col items-center '>
        
        {/* linea separadora */}
        <div  className="w-full sm:w-190 h-px bg-neutral-400 mb-10 sm:mb-12" />

        <p className={`${CaveatStyle.className}
        text-black text-center
          text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 
          max-w-7xl  leading-relaxed
          px-5`} >
          Durante años hemos construido una filosofía, en donde exaltamos el poder que hay detrás de hacer feliz
          a las personas en su día de trabajo, generando verdaderas conexiones y provocando la transferencia de conocimiento
          entre nuestros usuarios.
        </p>
        </div>

        <div  className="w-full max-w-4xl h-px bg-gray-300 mt-10 sm:mt-12  md:my-10" />
      </div>
  )
}
