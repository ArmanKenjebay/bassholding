import { getNewsById } from '@/get-api'
import { getDictionary } from '@/get-dictionary'
import Link from 'next/link'
import PrevNews from '@/app/[locale]/_components/PrevNews'

type Props = {
  params: {
    id: string
    locale: 'en' | 'ru'
  }
  searchParams: { [key: string]: string }
}

async function getData(id: string) {
  const data = await getNewsById(id)
  return { ...data }
}

export default async function NewsDetail({ params: { locale, id } }: Props) {
  const dictionary = await getDictionary(locale)
  const data = await getData(id).then((res) => res)

  return (
    <div className={`mt-20 flex flex-col w-full h-full`}>
      <div className={`flex flex-col sm:px-5 px-2 sm:mb-10 mb-5`}>
        <PrevNews locale={locale} dictionary={dictionary} />

        <pre>{data && data?.title?.[locale]}</pre>
      </div>
    </div>
  )
}
