import React from 'react'
import { Geistmono,CaveatStyle } from '@/config/fonts';

export const BrandStatement = () => {
  return (
    <div className='w-full bg-zinc-100 py-12 sm:py-16'> 

  

      <div className='md:mt-10 w-full flex flex-col items-center '>
        
        {/* linea separadora */}
        <div  className="w-full max-w-md sm:max-w-xl h-px bg-gray-300 mb-8 sm:mb-10" />

        <p className={`${CaveatStyle.className}
        text-black text-center
          text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 
          max-w-7xl  leading-relaxed
          px-5`} >
          Durante años hemos construido una filosofía, en donde exaltamos el poder que hay detrás de hacer feliz
          a las personas en su día de trabajo, generando verdaderas conexiones y provocando la transferencia de conocimiento
          entre nuestros usuarios.
        </p>
      

        <div  className="w-full max-w-md sm:max-w-xl h-px bg-gray-300 mt-8 sm:mt-10" />
      </div>
    </div>
  )
}
