import { ReactNode } from 'react'
import { Locale } from '@/i18n-config'
import CustomNavbar from '@/app/[locale]/_components/Navbar'
import { getDictionary } from '@/get-dictionary'
import Footer from '@/app/[locale]/_components/Footer'
import { bassholdingConfig } from '@/bassholding-config'

type Props = {
  children: ReactNode
  params: { locale: Locale }
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

export default async function Layout({ params: { locale }, children }: Props) {
  const dictionary = await getDictionary(locale)

  return (
    <>
      <CustomNavbar
        params={{
          dictionary: { ...dictionary.navbar },
          modalDictionary: { ...dictionary.contact_us },
          locale,
        }}
      />
      <main className={`flex flex-col mx-auto max-w-screen-2xl`}>
        {children}
      </main>
      <Footer
        params={{
          dictionary: {
            navbar: dictionary.navbar,
            contact: dictionary.contact,
          },
          locale,
        }}
      />
    </>
  )
}
