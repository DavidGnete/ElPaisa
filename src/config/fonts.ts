import React from 'react'
import { Geist, Geist_Mono, Montserrat_Alternates, Merienda } from 'next/font/google'

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
