import { ReactNode } from 'react'
import { getDictionary } from '@/get-dictionary'

type Params = {
  children: ReactNode
  params: {
    locale: 'en' | 'ru'
  }
}

export async function generateMetadata({
  params,
}: {
  params: { locale: 'en' | 'ru' }
}) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.about.title,
    description: dictionary.about.description,
  }
}

export default async function Layout({ params, children }: Params) {
  return <section className={`mt-20 flex flex-col`}>{children}</section>
}
