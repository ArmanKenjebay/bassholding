import './globals.css'
import { ReactNode } from 'react'
import { i18n, Locale } from '@/i18n-config'
import { Poppins } from 'next/font/google'
import getGilroy from '@/app/[locale]/_variables/gilroy-font'

const gilroy = getGilroy()

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
    </html>
  )
}
