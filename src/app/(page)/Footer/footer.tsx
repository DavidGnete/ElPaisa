import React from 'react'
import Link from 'next/link'
import { TitleFont } from '@/config/fonts'

export const Footer = () => {
  return (
    <div className='w-full
        flex flex-col items-center gap-3
        text-sm
        mb-10
        text-black
        sm:flex-row sm:justify-center sm:gap-6
        sm:text-base
        md:text-lg'>

        <Link href="/"
        className='flex items-center gap-1'>
        <span className={`${TitleFont.className} antialiased font-bold`}>El Paisa</span>
        <span>Tienda</span>
        <span> © { new Date().getFullYear() }</span>
        </Link>

        <Link 
        href="/"
        className='mx-3'
        >
            Privacidad & Legal
        </Link>

        <Link 
        href="/"
        className='mx-3 font-bold'
        >
            ubicaciones 
        </Link>
        
        

    </div>
  )
}
