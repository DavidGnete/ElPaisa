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
        <h1 className="font-bold text-4xl text-black text-center">{text}</h1>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8">
      {images.map((img, index) => (
        <div
        key={img}
        className="w-full aspect-square overflow-hidden cursor-pointer  group flex items-center justify-center"
        onClick={() => {
          openModal(index)
        }
        }>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 " />
        
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
