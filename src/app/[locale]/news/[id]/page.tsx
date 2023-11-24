import { getNewsById } from '@/get-api'

type Props = {
  params: {
    id: string
    locale: 'en' | 'ru'
  }
  searchParams: { [key: string]: string }
}
export default async function NewsDetail({ params: { locale, id } }: Props) {
  const data = await getNewsById(id)

  return (
    <div className={`mt-20 flex flex-col w-full h-full`}>
      <div className={`flex flex-col`}>
        <span>{data?.title[locale]}</span>
      </div>
    </div>
  )
}
