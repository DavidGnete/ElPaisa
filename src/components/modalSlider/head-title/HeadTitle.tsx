import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StyleSpectral, StyleAlumin } from '@/config/fonts'

export const HeadTitle = () => {
  return (
    
    <nav className='absolute top-0 left-0 w-full z-50  '>

       {/*  linea separadora de el head */}
        <div className="z-50 absolute top-30 lg:top-50 left-0 right-0 h-px bg-white/40" />
        
    <div className=' w-full px-5 sm:px-8 md:px-20 lg:px-20 xl:px-20 py-10 sm:py-6 lg:py-20 flex justify-center'>

    <Link href="/" className='flex items-center gap-3 '>
        <div className="flex flex-col items-center">
  <p className={`${StyleSpectral.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-thin m-0`}>
    El Paisita
  </p>
  <p className={`${StyleAlumin.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light m-0 -mt-1 sm:-mt-2`}>
    DISEÑO INTERIORES
  </p>
</div>
    </Link>
    </div>

    </nav>
    
  )
}
