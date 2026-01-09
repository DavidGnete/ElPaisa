"use client";
import { Image, image } from '@heroui/react';
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
    <section className="w-5/6 mx-auto py-10">
        <h1 className="font-bold text-4xl text-black text-center">{text}</h1>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-20">
      {images.map((img, index) => (
        <div key={img}
        className="border border-gray-400 overflow-hidden cursor-pointer "
        onClick={() => {
          openModal(index)
        }
        }>

          <Image
            src={img}
            alt="HeroUI Album Cover"
            width={900}
            height={500}
            className="w-full object-cover hover:scale-140 transition"
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
