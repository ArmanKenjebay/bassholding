import { Locale } from '@/i18n-config'
import { getNews } from '@/get-api'
import { Chip } from '@nextui-org/chip'
import Image from 'next/image'
import Span from '@/app/[locale]/_components/Span'
import SkeletonNews from '@/app/[locale]/_components/SkeletonNews'
import CustomPagination from '@/app/[locale]/_components/CustomPagination'
import { TNews } from '@/app/[locale]/_types/TNews'

type Props = {
  locale: Locale
  searchParams: { [key: string]: string | string[] }
}
export default async function NewsPreviews({ locale, searchParams }: Props) {
  const page = searchParams?.page ?? '1'
  const pageSize = searchParams?.pageSize ?? '4'

  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const response = await fetch(
    `${api}/news?locale=${locale}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { headers },
  )

  let news: any | undefined = undefined

  if (response.ok) {
    news = await response.json()
  }

  return (
    <div className={`flex flex-col gap-y-10`}>
      {news && news.data.length ? (
        <>
          <div className="grid gap-[40px] 2xl:grid-cols-[510px_510px] xl:grid-cols-[420px_420px] lg:grid-cols-[300px_300px] md:grid-cols-[250px_250px] sm:grid-cols-[200px_200px] grid-cols-1">
            {news && news.data.length
              ? news.data.map((news: any) => (
                  <div
                    key={news.id}
                    className="cursor-pointer transition duration-200 ease-in-out group hover:scale-[.98] overflow-hidden flex-1 flex flex-col"
                  >
                    <img
                      className="transition duration-200 ease-in-out rounded-3xl 2xl:h-[300px] xl:h-[280px] lg:h-[180px] md:h-[120px] sm:h-[100px] w-full h-[200px] object-cover md:mb-10 mb-5"
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_API +
                        news.attributes.image_preview.data.attributes.url
                      }
                      alt={'bassholding news image'}
                    />

                    {news.attributes.chips ? (
                      <Chip
                        variant="bordered"
                        color="warning"
                        className={`md:mb-5 mb-2 xl:text-[16px]`}
                      >
                        {news.attributes.chips}
                      </Chip>
                    ) : (
                      <Span classNames={'w-1/4'}></Span>
                    )}
                    <span
                      className={`group-hover:text-primary-gold text-sm md:text-base lg:text-xl xl:text-[24px] font-[300] mb-[45px] h-14 w-full whitespace-pre-wrap truncate`}
                    >
                      <Span classNames={``}>{news.attributes.title}</Span>
                    </span>
                    <span
                      className={`group-hover:text-primary-gold text-sm md:text-base lg:text-xl xl:text-[16px] font-[300]`}
                    >
                      <Span classNames={`${!news.attributes.date && 'w-1/4'}`}>
                        {news.attributes.date}
                      </Span>
                    </span>
                  </div>
                ))
              : 'No data'}
          </div>

          <CustomPagination
            total={news.meta.pagination.pageCount}
            page={news.meta.pagination.page}
            hasNextPage={
              news.meta.pagination.pageCount < news.meta.pagination.page
            }
            hasPrevPage={news.meta.pagination.page > 0}
          />
        </>
      ) : (
        <div
          className={`grid grid-cols-2 gap-3 w-full h-full justify-center items-center`}
        >
          {[...Array(4)].map((_, i) => (
            <SkeletonNews
              key={i}
              classNames={`xl:w-[400px] lg:w-[200px] w-[150px]`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
