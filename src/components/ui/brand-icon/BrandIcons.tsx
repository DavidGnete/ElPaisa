import React from 'react'
import Image from 'next/image'
import { Merienda } from 'next/font/google'


export const BrandIcons = () => {
  return (
    <div className='flex mt-20 '>
      <div className='flex items-center flex-col'>
        <Image 
        src="/icons/icono1.png"
        width={200}
        height={200}
        alt='icono'>
        </Image>
        
        <h1 className='text-4xl'>El Icono</h1>
      </div>
      <div className='flex items-center flex-col'>
        <Image 
        src="/icons/icono1.png"
        width={200}
        height={200}
        alt='icono'>
        </Image>
        
        <h1 className='text-4xl'>El Icono</h1>
      </div>
      <div className='flex items-center flex-col'>
        <Image 
        src="/icons/icono1.png"
        width={200}
        height={200}
        alt='icono'>
        </Image>
        
        <h1 className='text-4xl'>El Icono</h1>
      </div>
      <div className='flex items-center flex-col'>
        <Image 
        src="/icons/icono1.png"
        width={200}
        height={200}
        alt='icono'>
        </Image>
        
        <h1 className='text-4xl'>El Icono</h1>
      </div>
      
    </div>
  )
}
