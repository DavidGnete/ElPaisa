"use client";
import React from 'react'

import Image from 'next/image';

export const Whattsap = () => {
const WhattsapNumber = "+573224616148"

const handleClick = () => {
  const mesage = encodeURIComponent("Hola, vi su información en la página web y me gustaría cotizar un proyecto de acabados en madera. Muchas gracias." )
  window.open(`https://wa.me/${WhattsapNumber}?text= ${mesage}`, "_blank");
}
  return (
    
        <div onClick={handleClick}
        className="
        fixed
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        z-50

        flex items-center gap-3
        px-2 py-1
        sm:px-5 sm:py-3.5

      bg-green-400
        text-white
        rounded-full
        shadow-lg

        cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-105
        hover:shadow-xl">
        <Image 
        width={90}
        height={80}
        alt='button whattsap'
        className='w-12 h-12
          sm:w-14 sm:h-14
          md:w-20 md:h-20'
        src="/whattsap/whatsapp.svg">

        </Image>

         <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-sm font-medium">Escríbenos por WhatsApp</span>
        <span className="text-xs opacity-90">Respuesta rápida</span>
      </div>
        </div>
  )
}
