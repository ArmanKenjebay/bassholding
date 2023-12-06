import { ReactNode } from 'react'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import InvestorsNavBar from '@/app/[locale]/_components/InvestorsNavBar'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'

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
  const dictionary = await getDictionary(params.locale)
  return (
    <section className={`mt-20 flex flex-col`}>
      <PageWrapper>
        <InvestorsNavBar
          locale={params.locale}
          dictionary={{ ...dictionary.investors }}
        />
        {children}
      </PageWrapper>
    </section>
  )
}
