import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ImageContent {
    images: string[];
    headSlide: string[];
    icon: string[];
    armarios:string[];
    baños:string[];
    cocinas:string[];
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
    ],
    "armarios":[
    "/armarios/armario1.webp",
    "/armarios/armario2.webp",
    "/armarios/armario3.webp",
    "/armarios/armario4.webp",
    "/armarios/armario5.webp",
    "/armarios/armario6.webp",

    ],
    "baños": [
    "/baños/baño1.webp",
    "/baños/baño2.webp",
    "/baños/baño3.webp",
    "/baños/baño4.webp",
    "/baños/baño5.webp",
    "/baños/baño6.webp",
    ],
    "cocinas": [
    "/cocinas/cocina1.webp",
    "/cocinas/cocina2.webp",
    "/cocinas/cocina3.webp",
    "/cocinas/cocina4.webp",
    "/cocinas/cocina5.webp",
    "/cocinas/cocina6.webp",
    ]



}