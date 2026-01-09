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
    className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center'
    onClick={onClose}
    >
    <div className='relative w-full h-full max-w-6xl max-h-[90vh]'
    onClick={(e) => e.stopPropagation()}>
            <Swiper
            modules={[Navigation]}
            navigation
            loop
            initialSlide={indexStart}
            className='w-full h-full'
            >
                {image.map((img, i) => (
                    <SwiperSlide key={img}>
                    <div className='w-full h-full flex items-center justify-center '>
                        <Image
                        src={img}
                        width={500}
                        height={300}
                        alt={`Slide ${i + 1}`}
                        className='object-contain rounded-lg' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </div>
  );
};
