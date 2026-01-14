import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

/* import "swiper/css"; */
import "swiper/css/navigation";
import './modalSlide.css';

interface ModalSliderProps {
  image: string[];
  indexStart: number;
  onClose: () => void;
}

export const ModalSlider = ({ onClose, image, indexStart }: ModalSliderProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Contenedor del modal */}
      <div
        className="relative w-full max-w-6xl h-[70vh] sm:h-[80vh]
          lg:h-[85vh] shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute  right-2 z-50
    flex items-center justify-center
    w-20 h-20 text-4xl
    sm:w-10 sm:h-10 sm:text-4xl
    lg:w-12 lg:h-12 lg:text-6xl
    text-white
    rounded-full
    cursor-pointer"
        >
          ×
        </button>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          initialSlide={indexStart}
          className="w-full h-full"
        >
          {image.map((img, i) => (
            <SwiperSlide key={img}>
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={img}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
