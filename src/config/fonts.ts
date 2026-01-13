import React from 'react'
import { Geist, Geist_Mono, Montserrat_Alternates, Merienda, Caveat, Spectral, Alumni_Sans_Pinstripe } from 'next/font/google'

export const GeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const Geistmono = Geist_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const TitleFont = Montserrat_Alternates({
  subsets: ['latin'],
    weight: ['500', '700'],
});

export const MerindaStyle = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-merienda",

})
export const CaveatStyle = Caveat({
  subsets: ["latin"],
  weight: [ "400", "600", "700"],
  variable: "--font-caveat",

})

export const StyleSpectral = Spectral({
  subsets: ["latin-ext", "latin"],
  weight: ["200","300","400", "500"],
  style: ["normal","italic"],
  variable: "--font-Spectral"
})

export const StyleAlumin = Alumni_Sans_Pinstripe({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--sont-Alumni_Sans_Pinstripe"
})
