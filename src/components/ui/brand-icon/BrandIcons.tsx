import React from 'react'
import { ImageSeed } from '@/seed/seed'
import { Merienda } from 'next/font/google'

import Image from 'next/image'

export const BrandIcons = () => {
  return (
    <div className='flex gap-60 justify-center bg-gray-600 items-center mt-20'>
        {ImageSeed.icon.map((icon, index)=> (
            <Image 
            key={index}
            width={100}
            height={90}
            alt='icons'
            src={icon}
            
            ></Image>

        ))}
    </div>
  )
}
