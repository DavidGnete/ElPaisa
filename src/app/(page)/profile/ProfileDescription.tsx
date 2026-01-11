import React from 'react'
import { GeistSans } from '@/config/fonts'
import Image from 'next/image'
import { BrandIcons } from '@/components/ui/brand-icon/BrandIcons'

export const ProfileDescription = () => {
  return (
    <div> 
      <BrandIcons />
    <div className="grid md:grid-cols-2 justify-items-center items-center py-10">
        <div>
            <Image 
                src={"/Perfil/perfil.jpg"}
                alt={"Profile Image"}
                width={400}
                height={400}
                className="rounded-lg"
            />

        </div>
        {/* Text Description */}
        <div>
        <p className={`${GeistSans.className} text-black antialiased  text-xl`}>
        Con más de 10 años de experiencia en acabados de madera, Edward ha dedicado su trayectoria
         a transformar espacios interiores con calidad, precisión y buen gusto. A través de su empresa
         El Paisa, ha trabajado en cocinas, salas, pisos y diversos proyectos residenciales, cuidando cada
          detalle para lograr resultados duraderos y estéticamente impecables.

Su trabajo se caracteriza por el uso de materiales de alta calidad, técnicas bien ejecutadas y un compromiso 
constante con la satisfacción del cliente. Cada proyecto es tratado de manera personalizada, entendiendo las 
necesidades de cada espacio y ofreciendo soluciones funcionales y elegantes.

En El Paisa, la confianza se construye con resultados reales, cumplimiento y un servicio honesto. Por eso,
 quienes eligen sus productos y servicios saben que están invirtiendo en experiencia, responsabilidad y acabados
  que elevan el valor de su hogar.
        </p>
        </div>
    </div>
    </div>
  )
}
