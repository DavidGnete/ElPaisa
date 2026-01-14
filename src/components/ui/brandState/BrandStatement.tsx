import React from 'react'
import { StyleSpectral } from '@/config/fonts';

export const BrandStatement = () => {
  return (
    <div className='w-full py-10 bg-slate-100 pb-10 sm:py-16 '> 

      <div className='md:mt-10 w-full flex flex-col items-center '>
        
        {/* linea separadora */}
        <div  className="w-full max-w-md sm:max-w-xl h-px bg-gray-300 mb-8 sm:mb-10" />

        <p className={`${StyleSpectral.className}
        text-black/70 text-center
          text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 
          max-w-7xl  leading-relaxed italic
          `} >
          Transformamos la madera en espacios que inspiran, llenos de estilo y calidez para tu hogar.
        </p>
      

        <div  className="w-full max-w-md sm:max-w-xl h-px  bg-gray-300 mt-5 sm:mt-10" />
      </div>
    </div>
  )
}
