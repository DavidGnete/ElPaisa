import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



import "swiper/css";
import "swiper/css/navigation";


interface ModalSliderProps {
    image: string[];
    indexStart: number;
    onClose: () => void;
    
}

export const ModalSlider = ({ onClose, image, indexStart}: ModalSliderProps) => {
  return (
    <div
    className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4'
    onClick={onClose}
    >
   {/*  contenedor del modal */}
    <div className='relative w-full max-w-7xl  bg-black/90 rounded-lg shadow-lg flex items-center justify-center'
    onClick={(e) => e.stopPropagation()}>

    {/* Boton de cerrar */}
    <button
    onClick={onClose}
    className='absolute top-4 right-4 z-50 text-white text-2xl font-bold hover:text-red-500 transition'>
    X
    </button>

            <Swiper
            modules={[Navigation]}
            navigation
            loop
            initialSlide={indexStart}
            className='w-full h-full'
            >
                {image.map((img, i) => (
                    <SwiperSlide key={img}>
                    <div className='flex items-center justify-center w-full h-full'>
                        <Image
                        src={img}
                        width={500}
                        height={300}
                        alt={`Slide ${i + 1}`}
                        className='object-contain max-h-[80vh] rounded-lg' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </div>
  );
};
