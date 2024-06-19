import { Locale } from '@/i18n-config'
import { getMockNews } from '@/get-api'
import SkeletonNews from '@/app/[locale]/_components/SkeletonNews'
import CustomPagination from '@/app/[locale]/_components/CustomPagination'
import NewsPreview from '@/app/[locale]/_components/NewsPreview'

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
    `${api}/news?locale=${locale}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=createdAt:desc`,
    { headers, next: { revalidate: 500 } },
  )

  const newsMock = await getMockNews().then((res) => res)

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
                  <NewsPreview
                    id={news.id}
                    locale={locale}
                    api={process.env.NEXT_PUBLIC_IMAGE_API}
                    image_preview_url={
                      news.attributes?.image_preview?.data?.attributes.url
                    }
                    image_main_url={
                      news.attributes?.image_main?.data?.attributes.url
                    }
                    image_content_url={
                      news.attributes?.image_content?.data?.attributes.url
                    }
                    image_sub_content_url={
                      news.attributes?.image_sub_content?.data?.attributes.url
                    }
                    chips={news.attributes.chips}
                    title={news.attributes.title}
                    date={news.attributes.date}
                  />
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
