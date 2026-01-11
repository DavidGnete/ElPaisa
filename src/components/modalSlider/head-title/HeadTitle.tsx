import React from 'react'
import Link from 'next/link'

export const HeadTitle = () => {
  return (
    
    <nav className='absolute top-0 left-0 w-full z-50  '>

       {/*  linea separadora de el head */}
        <div className="z-50 absolute top-50 left-0 right-0 h-px bg-gray-400" />
        
    <div className='f w-full
            px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20
            py-5 sm:py-6 lg:py-7
            flex items-center justify-between'
    >
    <Link href="/" 
    className='flex items-center gap-3 '>
    
            <svg 
                className="  sm:w-20 sm:h-20 text-white/90 " 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                />
            </svg>

            <span className="text-4xl lg:text-2xl font-semibold tracking-tight">
                <span className="text-white">Work</span>
                <span className="text-white/50">Point</span>
            </span>

        
    </Link>
    <div className='hidden md:flex items-center gap-1 lg:gap-2'>

        <Link 
        href="/portafolio"
        className='px-lg:px-5 py-2.5 text-white text-base lg:text-lg font-bold
        rounded-full hover:text-white hover:bg-white/10 transition-all duration-300 
        flex items-center gap-2.5'
        >
            <svg 
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
            </svg>
            <span className="hidden lg:inline">Inicio</span>

        </Link>
    </div>

    </div>

    </nav>
    
  )
}
