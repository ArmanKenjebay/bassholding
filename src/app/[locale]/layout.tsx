import './globals.css'
import React, { ReactNode } from 'react'
import { i18n, Locale } from '@/i18n-config'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={locale} className="dark">
      <body className={`${poppins.variable} font-poppins`}>{children}</body>
      <GoogleAnalytics gaId="G-2WF7TESEG5" />
    </html>
  )
}
