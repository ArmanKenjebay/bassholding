'use client'

import { useEffect, useState } from 'react'
import { Locale } from '@/i18n-config'
import { TNews, TNewsData } from '@/app/[locale]/_types/TNews'
import Image from 'next/image'
import { Spinner } from '@nextui-org/spinner'
import { Chip } from '@nextui-org/chip'
import { useRouter } from 'next-intl/client'
import CustomPagination from '@/app/[locale]/_components/CustomPagination'

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
  const router = useRouter()

  const [newsData, setNewsData] = useState<TNewsData[] | null>(null)
  const [total, setTotal] = useState<number>(0)
  const [newsDataPaginated, setNewsDataPaginated] = useState<
    TNewsData[] | null
  >(null)

  const [itemPerPage, setItemPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchNewsData().then((res) => {
      if (res) {
        const startIndex = (currentPage - 1) * itemPerPage
        const endIndex = startIndex + itemPerPage

        const currentNewsPage = res.slice(startIndex, endIndex)

        setNewsData(res)
        setNewsDataPaginated(currentNewsPage)
      }
    })
  }, [currentPage])

  useEffect(() => {
    if (newsData?.length) {
      const total = Math.ceil(newsData.length / itemPerPage)

      setTotal(total)
    }
  }, [newsData])

  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  const handleRedirect = (id: string, locale: string) => {
    router.push(`/news/${id}`, { locale: locale })
  }

  return (
    <div className={`flex flex-col gap-y-10`}>
      {newsDataPaginated ? (
        <>
          <div className="grid gap-[40px] 2xl:grid-cols-[510px_510px] xl:grid-cols-[420px_420px] lg:grid-cols-[300px_300px] md:grid-cols-[250px_250px] sm:grid-cols-[200px_200px] grid-cols-1">
            {newsDataPaginated
              ? newsDataPaginated.map((news) => (
                  <div
                    onClick={() => handleRedirect(news.id, locale)}
                    key={news.id}
                    className="cursor-pointer transition duration-200 ease-in-out group hover:scale-[.98] overflow-hidden flex-1 flex flex-col"
                  >
                    <Image
                      className="transition duration-200 ease-in-out rounded-3xl 2xl:h-[300px] xl:h-[280px] lg:h-[180px] md:h-[120px] sm:h-[100px] w-full h-[200px] object-cover md:mb-10 mb-5"
                      src={news.baseImg}
                      width={510}
                      height={447}
                      alt={`bassholding news image`}
                    />
                    <Chip
                      variant="bordered"
                      color="warning"
                      className={`md:mb-5 mb-2 xl:text-[16px]`}
                    >
                      {news.chips.map((c) => c[locale])[0]}
                    </Chip>
                    <span
                      className={`group-hover:text-primary-gold text-sm md:text-base lg:text-xl xl:text-[24px] font-[300] mb-[45px] h-14 w-full whitespace-pre-wrap truncate`}
                    >
                      {news.title[locale]}
                    </span>
                    <span
                      className={`group-hover:text-primary-gold text-sm md:text-base lg:text-xl xl:text-[16px] font-[300]`}
                    >
                      {news.date[locale]}
                    </span>
                  </div>
                ))
              : 'No data'}
          </div>

          <CustomPagination handlePage={handlePage} total={total} />
        </>
      ) : (
        <div className={`flex w-full h-full justify-center items-center`}>
          <Spinner size={`lg`} color="warning" />
        </div>
      )}
    </div>
  )
}
