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
  return (
    <>
      <main>{children}</main>
    </>
  )
}
