import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ImageContent {
    images: string[];
    headSlide: string[];
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
        "/head/slide2.webp",
        "/head/acabado3.webp",
        "/head/acabado4.webp",
        "/head/acabado5.webp",
        "/head/acabado6.webp",
        "/head/slide3.webp",
    ],
    "armarios":[
    "/armarios/armario1.webp",
    "/armarios/armario2.webp",
    "/armarios/armarioo3.webp",
    "/armarios/armarioo4.webp",
    "/armarios/armario5.webp",
    "/armarios/armario6.webp",

    ],
    "baños": [
    "/baños/baño1.webp",
    "/baños/baño2.webp",
    "/baños/bañoo3.webp",
    "/baños/bañoo4.webp",
    "/baños/bañoo5.webp",
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