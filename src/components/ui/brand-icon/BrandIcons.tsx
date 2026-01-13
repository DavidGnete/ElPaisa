import React from 'react'
import Image from 'next/image'

export const BrandIcons = () => {
  return (
    <section className="w-full mt-20 px-6">
      
      {/* TÍTULO */}
      <div className="text-center mb-12">
        <h2 className="
          text-2xl sm:text-3xl md:text-4xl 
          font-semibold 
          text-zinc-900
        ">
          No esperes más, solicita tu cita
        </h2>
      </div>

      {/* ICONOS */}
      <div className="
        flex flex-col 
        lg:flex-row 
        items-center 
        justify-center 
        gap-10 lg:gap-16
      ">

        {/* ICONO 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image 
            src="/icons/icono2.png"
            width={90}
            height={90}
            alt="Maderas seleccionadas"
            className="mb-4"
          />
          <h3 className="text-lg font-medium text-zinc-800">
            Maderas seleccionadas
          </h3>
        </div>

        {/* ICONO 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image 
            src="/icons/icono3.png"
            width={90}
            height={90}
            alt="Diseño personalizado"
            className="mb-4"
          />
          <h3 className="text-lg font-medium text-zinc-800">
            Diseño personalizado
          </h3>
        </div>

        {/* ICONO 4 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image 
            src="/icons/icono5.png"
            width={90}
            height={90}
            alt="10 años de experiencia"
            className="mb-4"
          />
          <h3 className="text-lg font-medium text-zinc-800">
            10+ años de experiencia
          </h3>
        </div>

      </div>
    </section>
  )
}

