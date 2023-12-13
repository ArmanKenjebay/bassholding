import { ReactNode } from 'react'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
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
    title: dictionary.contact.title,
    description: dictionary.contact.description,
  }
}

export default async function Layout({ params, children }: Params) {
  return (
    <section className={`mt-32 flex flex-col`}>
      <PageWrapper>{children}</PageWrapper>
    </section>
  )
}
