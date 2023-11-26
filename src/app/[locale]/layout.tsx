import './globals.css'
import { ReactNode } from 'react'
import { i18n, Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import getGilroy from '@/app/[locale]/_variables/gilroy-font'
import { bassholdingConfig } from '@/bassholding-config'

const gilroy = getGilroy()

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: {
      default: bassholdingConfig.name,
      template: `%s | ${bassholdingConfig.name}`,
    },
    description: dictionary.main.description,
  }
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
