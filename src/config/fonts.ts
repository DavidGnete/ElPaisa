import React from 'react'
import { Geist, Geist_Mono, Montserrat_Alternates } from 'next/font/google'

export const geistSans = Geist({
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
