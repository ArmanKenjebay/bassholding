'use client'

import { useEffect, useState } from 'react'
import { Locale } from '@/i18n-config'
import { TNews, TNewsData } from '@/app/[locale]/_types/TNews'
import Image from 'next/image'
import { Chip } from '@nextui-org/chip'
import { useRouter } from 'next-intl/client'

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
    fetchNewsData().then((res) => {
      if (res) setNewsData(res)
    })
  }, [])

  const router = useRouter()
  const handleRedirect = (id: string, locale: string) => {
    router.push(`/news/${id}`, { locale: locale })
  }

  return (
    <div className="grid gap-[40px] 2xl:grid-cols-[510px_510px] xl:grid-cols-[420px_420px] lg:grid-cols-[300px_300px] md:grid-cols-[250px_250px] sm:grid-cols-[120px_120px] grid-cols-1">
      {newsData
        ? newsData.map((news) => (
            <div
              onClick={() => handleRedirect(news.id, locale)}
              key={news.id}
              className="overflow-hidden flex-1 flex flex-col cursor-pointer transition duration-200 ease-in-out group hover:scale-90"
            >
              <Image
                className="group-hover:grayscale rounded-3xl 2xl:w-[510px] 2xl:h-[447px] xl:w-[410px] xl:h-[380px] lg:w-[240px] lg:h-[180px] md:w-[180px] md:h-[120px] sm:w-[120px] sm:h-[80px] w-full h-[200px] object-cover md:mb-10 mb-5"
                src={news.baseImg}
                width={510}
                height={447}
                alt={`bassholding news image`}
              />
              <Chip
                variant="bordered"
                color="warning"
                className={`md:mb-5 mb-2`}
              >
                {news.chips.map((c) => c[locale])[0]}
              </Chip>
              <span className={`group-hover:text-primary-gold`}>
                {news.context[locale]}
              </span>
            </div>
          ))
        : 'No data'}
    </div>
  )
}
