import localFont from 'next/font/local'
import './globals.css'
import { ReactNode } from 'react'
import CustomNavbar from '@/app/[locale]/_components/Navbar'
import { i18n, Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Footer from '@/app/[locale]/_components/Footer'
import { ScrollShadow } from '@nextui-org/scroll-shadow'

const gilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../../../public/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../../../public/fonts/Gilroy-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/Gilroy-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.main.title,
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
        <ScrollShadow
          size={10}
          className="w-full h-full overflow-x-hidden"
          hideScrollBar
        >
          <CustomNavbar
            params={{ dictionary: { ...dictionary.navbar }, locale }}
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
        </ScrollShadow>
      </body>
    </html>
  )
}
