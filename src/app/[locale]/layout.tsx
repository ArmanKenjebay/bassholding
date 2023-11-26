import './globals.css'
import { ReactNode } from 'react'
import { i18n, Locale } from '@/i18n-config'
import getGilroy from '@/app/[locale]/_variables/gilroy-font'

const gilroy = getGilroy()

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
      <body className={`${gilroy.variable} font-gilroy`}>{children}</body>
    </html>
  )
}
