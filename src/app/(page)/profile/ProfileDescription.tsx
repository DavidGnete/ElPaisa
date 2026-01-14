import React from 'react'
import { GeistSans, CaveatStyle, StyleSpectral } from '@/config/fonts'
import Image from 'next/image'
import { BrandIcons } from '@/components/ui/brand-icon/BrandIcons'

export const ProfileDescription = () => {
  return (
    <div> 

    <div className="flex flex-col justify-center items-center gap-2  md:gap-40 md:flex-row md:items-center">

        <div className='shrink-0 md:my-0'>
            <Image 
                src={"/Perfil/profile.webp"}
                alt={"Profile Image"}
                width={400}
                height={400}
                className=" w-80 h-120 md:w-auto md:h-150  rounded-lg"
            />

        </div>

        {/* Text Description */}

        <div className='max-w-xl px-5  md:px-0 mt-4 bg-slate-100 md:bg-transparent'>

        <div className="max-w-[90%] sm:max-w-xl px-4 sm:px-6 md:px-0 mt-4 md:text-left text-center">

  <p className={`${StyleSpectral.className} leading-relaxed text-base sm:text-lg md:text-xl`}>
    Soy Eduard, maestro y diseñador en acabados interiores en madera y fundador de 
    <span className="font-semibold">   El Paisita</span>, con más de 10 años de experiencia
    creando espacios calidos, funcionales y hechos para durar.
  </p>

  <p className={`${StyleSpectral.className} leading-relaxed text-base sm:text-lg md:text-xl mt-4`}>
    Cocinas, salas, pisos y espacios interiores toman vida cuando se trabajan con pasión,
    compromiso y un profundo respeto por el oficio y el detalle.
  </p>
    <div className='flex flex-col justify-center'>  
  <p className={`${CaveatStyle.className}  text-center text-3xl sm:text-4xl font-normal mt-6`}>
    Ave maría, qué buen acabado.
  </p>
  <div  className="w-full max-w-md mb-5 sm:max-w-xl h-px bg-gray-300 sm:mb-5 " />
  <div  className="w-[50%]  ml-20 sm:max-w-xl h-px bg-gray-300 mb-8 sm:mb-10 sm:ml-30 " />
  </div>

</div>


        </div>
    </div>
    </div>
  )
}
