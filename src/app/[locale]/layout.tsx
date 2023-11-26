import './globals.css'
import { ReactNode } from 'react'
import CustomNavbar from '@/app/[locale]/_components/Navbar'
import { i18n, Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Footer from '@/app/[locale]/_components/Footer'
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
  const dictionary = await getDictionary(locale)

  return (
    <html lang={locale} className="dark">
      <body className={`${gilroy.variable} font-gilroy`}>
        <CustomNavbar
          params={{
            dictionary: { ...dictionary.navbar },
            modalDictionary: { ...dictionary.contact_us },
            locale,
          }}
        />
        <main>{children}</main>
        <Footer
          params={{
            dictionary: {
              navbar: dictionary.navbar,
              contact: dictionary.contact,
            },
            locale,
          }}
        />
      </body>
    </html>
  )
}
