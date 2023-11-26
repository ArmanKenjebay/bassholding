import { ReactNode } from 'react'
import { Locale } from '@/i18n-config'
import CustomNavbar from '@/app/[locale]/_components/Navbar'
import { getDictionary } from '@/get-dictionary'
import Footer from '@/app/[locale]/_components/Footer'

type Props = {
  children: ReactNode
  params: { locale: Locale }
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
    </>
  )
}
