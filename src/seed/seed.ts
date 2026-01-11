import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ImageContent {
    images: string[];
    headSlide: string[];
    icon: string[];
}

export const ImageSeed : ImageContent = {
    "images": [
        "/Gallery/01-image.jpg",
        "/Gallery/02-image.jpg",
        "/Gallery/03-image.jpg",
        "/Gallery/04-image.jpg",
        "/Gallery/05-image.jpg",
        "/Gallery/06-image.jpg",
        
    ],
    "headSlide": [
        "/head/acabado2.jpg",
        "/head/acabado3.jpg",
        "/head/acabado4.jpg",
        "/head/acabado5.jpg",
    ],
    "icon": [
        "/icons/icono1.png",
        "/icons/icono2.png",
        "/icons/icono3.png",
        "/icons/icono4.png",
    ]


    


}