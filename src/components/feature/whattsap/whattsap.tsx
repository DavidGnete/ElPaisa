"use client";
import React from 'react'

import Image from 'next/image';

export const Whattsap = () => {
const WhattsapNumber = "+573108006524"

const handleClick = () => {
  const mesage = encodeURIComponent("Hola estoy interesado..")
  window.open(`https://wa.me/${WhattsapNumber}?text= ${mesage}`, "_blank");
}
  return (
    <div>
        <h1>Whattsap</h1>
        <div onClick={handleClick}
        className='fixed z-50
        bottom-4 right-4
        sm:bottom-6 sm:right-6
        md:bottom-30 md:right-30
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:-translate-y-0.5'>
        <Image 
        width={90}
        height={80}
        alt='button whattsap'
        className='w-12 h-12
          sm:w-14 sm:h-14
          md:w-20 md:h-20'
        src="/whattsap/whatsapp.svg"></Image>
        </div>
    </div>
  )
}
