import { ReactNode } from 'react'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import InvestrorsNavBar from '@/app/[locale]/_components/InvestorsNavBar'

type Params = {
  children: ReactNode
  params: {
    locale: Locale
  }
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.investors.title,
    description: dictionary.investors.description,
  }
}

export default async function Layout({ params, children }: Params) {
  return (
    <section className={`mt-20 flex flex-col`}>
      <InvestrorsNavBar locale={params.locale} />

      {children}
    </section>
  )
}
