'use client'

import { useEffect, useState } from 'react'
import { Locale } from '@/i18n-config'
import { TNews, TNewsData } from '@/app/[locale]/_types/TNews'
import { Image as ImageNext } from '@nextui-org/image'
import { Chip } from '@nextui-org/chip'

const fetchNewsData = async () => {
  try {
    const response = await fetch('news/api', {
      next: {
        revalidate: 3600,
      },
    })

    return (await response.json()) as Promise<TNewsData[]>
  } catch (error) {
    console.error('Ошибка при получении данных:', error)
  }
}

type Props = {
  locale: Locale
  news?: TNews
}
export default function NewsPreviews({ locale }: Props) {
  const [newsData, setNewsData] = useState<TNewsData[] | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetchNewsData().then((res) => {
        if (res) setNewsData(res)
      })
    }
  }, [])

  return (
    <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
      {newsData
        ? newsData.map((news) => (
            <div
              key={news.id}
              className="overflow-hidden flex-1 flex flex-col gap-2"
            >
              <ImageNext
                src={`public/${news.image.preview}`}
                alt={`bassholding news image`}
                className="aspect-square sm:w-[280px] sm:h-[180px] w-[150px] h-[80px]"
              />
              <Chip variant="bordered" color="warning">
                {news.chips.map((c) => c[locale])[0]}
              </Chip>
              <span>{news.context[locale]}</span>
            </div>
          ))
        : 'No data'}
    </div>
  )
}
