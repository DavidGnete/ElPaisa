import React from 'react'
import Link from 'next/link'
import { TitleFont } from '@/config/fonts'

export const Footer = () => {
  return (
    <div className='w-full
        flex flex-col items-center 
        text-sm
        text-black
        sm:flex-row sm:justify-center 
        sm:text-base
        md:text-lg'>

        <Link href="/"
        className='flex items-center gap-1'>
        <span className={`${TitleFont.className} antialiased font-bold`}>El Paisa</span>
        <span>Diseños & Acabados</span>
        
        </Link>

        <div>  
        <span> Privacidad & Legal </span>
        <span> © { new Date().getFullYear() }</span>
        </div>
    </div>
  )
}
