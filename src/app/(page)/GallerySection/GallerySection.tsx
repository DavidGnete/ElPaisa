"use client";
import Image from 'next/image';
import { ModalSlider } from '@/components/modalSlider/ModalSlider';
import { useState } from "react";


interface PhotoGalleryProps {
    images: string[];
    text: string;
}

export const GallerySection = ({ images, text }: PhotoGalleryProps) => {

  const [openslide, setopenSlide] = useState(false);
  const [startPhoto, setstartPhoto] = useState(0);

  const openModal = (index:number) => {
    setstartPhoto(index)
    setopenSlide(true);
  };

  const closeModal = () => {
    setopenSlide(false)
  };

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-wide text-zinc-900 text-center">{text}</h2>
        <div className="flex flex-col items-center mt-4 mb-5 gap-2">
 <div className="w-32 h-[3px] bg-amber-700" />
<div className="w-16 h-px bg-amber-400" />
</div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8">
      {images.map((img, index) => (
        <div
        key={img}
        className="relative w-full aspect-square overflow-hidden cursor-pointer  group "
        onClick={() => {
          openModal(index)
        }
        }>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 z-20" />
        
          <Image
          width={300}
          height={400}
            src={img}
            alt="HeroUI Album Cover"
            className="w-full h-full object-cover  transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
      {openslide && (
      <ModalSlider 
      image={images}
      indexStart={startPhoto}
      onClose={closeModal}

      />
      )}
      </section>
  )
}
