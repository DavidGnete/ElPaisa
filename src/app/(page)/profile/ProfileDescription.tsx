import React from 'react'
import { GeistSans, CaveatStyle } from '@/config/fonts'
import Image from 'next/image'
import { BrandIcons } from '@/components/ui/brand-icon/BrandIcons'

export const ProfileDescription = () => {
  return (
    <div> 

    <div className="flex flex-col justify-center items-center gap-16 md:gap-40 md:flex-row md:items-start">
        <div className='shrink-0'>
            <Image 
                src={"/Perfil/profile.webp"}
                alt={"Profile Image"}
                width={400}
                height={400}
                className=" w-64 h-64 md:w-auto md:h-150  rounded-lg"
            />

        </div>

        {/* Text Description */}

        <div className='max-w-xl '>
          <h2 className='text-2xl md:text-3xl font-bold m-10 text-center  '>El Paisita</h2>

        <p className={`${GeistSans.className}  leading-relaxed text-base sm:text-lg md:text-xl`}>
        Soy Eduard, maestro en acabados interiores en madera y fundador de <span className='font-bold'>El Paisita </span>
        con más de 10 años de experiencia, he dedicado mi trabajo a transformar espacios en lugares cálidos,
        funcionales y llenos de carácter, utilizando la madera como el elemento principal.<br></br>
        Cada proyecto es personal. Escucho, propongo y trabajo cada detalle con precisión, porque creo que un
        buen acabado no solo se ve bien, se siente bien. Cocinas, salas, pisos y espacios interiores toman vida
        cuando se hacen con pasión, compromiso y respeto por el trabajo bien hecho.<br></br>
        En El Paisita, no solo construimos acabados en madera: creamos espacios donde las personas disfrutan estar.
        </p>
        <p className={`${CaveatStyle.className} leading-relaxed text-4xl font-normal mt-5`}> Ave maría, qué buen acabado.</p>
        </div>
    </div>
    </div>
  )
}
