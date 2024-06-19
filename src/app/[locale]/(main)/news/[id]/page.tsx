import { getMockNewsById } from '@/get-api'
import { getDictionary } from '@/get-dictionary'
import PrevNews from '@/app/[locale]/_components/PrevNews'
import { Chip } from '@nextui-org/chip'
import { Locale } from '@/i18n-config'
import Link from 'next/link'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'
import { Skeleton } from '@nextui-org/skeleton'
import { TNewsById } from '@/app/[locale]/_types/TNews'
import ParserHtml from '@/app/[locale]/_components/ParserHtml'

async function getData(id: string) {
  const data = await getMockNewsById(id)
  return { ...data }
}

export async function generateMetadata({ params }: any) {
  const data = await getData(params.id).then((res) => res)

  return {
    title: data.title ? data.title[params.locale as Locale] : 'Bassholding',
    description: data.context ? data.context[params.locale as Locale] : '',
  }
}

type Props = {
  params: { locale: Locale; id: string }
}

export default async function NewsDetail({ params: { locale, id } }: Props) {
  const dictionary = await getDictionary(locale)

  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const response = await fetch(`${api}/news/${id}?populate=*`, {
    headers,
  })

  let news: TNewsById | undefined = undefined

  if (response.ok) {
    news = await response.json()
  }

  const getLangString = (
    locale: Locale,
    field:
      | 'title'
      | 'context'
      | 'date'
      | 'chips'
      | 'content'
      | 'blocks'
      | 'block',
  ) => {
    if (!news) return

    const item = { ...news }

    if (field === 'block' || field === 'blocks')
      return <ParserHtml blocks={item.data.attributes[field]} />

    if (item && item.data && item.data.attributes.locale === locale) {
      return item.data.attributes[field]
    }

    const findItem = item.data.attributes.localizations.data.find(
      (el) => el.attributes.locale === locale,
    )

    if (findItem) {
      return findItem.attributes[field]
    }
  }

  const getFirstValidUrl = (...urls: (string | undefined)[]): string => {
    for (const url of urls) {
      if (url) {
        return url
      }
    }
    return ''
  }

  return (
    <div className={`xl:px-[60px] mt-20 flex flex-col w-full h-full mb-28`}>
      <PageWrapper>
        <div className={`flex flex-col sm:px-5 px-5 sm:mb-10 mb-5`}>
          <PrevNews
            locale={locale}
            dictionary={dictionary}
            classNames={'mb-5 sm:mb-10 xl:my-[76px]'}
          />

          <div
            className={`flex gap-x-12 gap-y-3 lg:flex-row flex-col-reverse mb-5 sm:mb-10 xl:mb-24`}
          >
            {
              <img
                width={959}
                height={650}
                className={`rounded-[50px] w-full xl:h-[450px] lg:h-[280px] h-[200px] object-cover`}
                src={
                  process.env.NEXT_PUBLIC_IMAGE_API +
                  getFirstValidUrl(
                    news?.data.attributes?.image_preview?.data?.attributes.url,
                    news?.data.attributes?.image_main?.data?.attributes.url,
                    news?.data.attributes?.image_content?.data?.attributes.url,
                    news?.data.attributes?.image_sub_content?.data?.attributes
                      .url,
                  )
                }
                alt={'bassholding news image'}
              />
            }

            <div className={`flex flex-col gap-y-3 min-w-[200px]`}>
              <div
                className={`flex flex-row lg:flex-col gap-x-5 gap-y-3 items-center lg:items-start`}
              >
                {getLangString(locale, 'chips') ? (
                  <Chip
                    variant={'bordered'}
                    className="border-primary-gold text-primary-gold xl:mb-10 mb-5"
                    classNames={{
                      base: 'truncate xl:text-[16px]',
                      content: 'p-0 sm:p-1 truncate',
                    }}
                  >
                    {getLangString(locale, 'chips')}
                  </Chip>
                ) : (
                  <></>
                )}

                {getLangString(locale, 'date') ? (
                  <span className={`xl:text-[20px] font-[300] xl:mb-10 mb-5`}>
                    {getLangString(locale, 'date')}
                  </span>
                ) : (
                  <Skeleton className={`inline-block w-1/2 h-3 rounded-lg`}>
                    <div className={`w-full h-full`}></div>
                  </Skeleton>
                )}
              </div>
              <span
                className={`xl:text-[32px] lg:text-[32px] text-lg leading-normal font-[300]`}
              >
                {getLangString(locale, 'title') ? (
                  <span className={`xl:text-[20px] font-[300] xl:mb-10 mb-5`}>
                    {getLangString(locale, 'title')}
                  </span>
                ) : (
                  <Skeleton className={`inline-block w-full h-4 rounded-lg`}>
                    <div className={`w-full h-full`}></div>
                  </Skeleton>
                )}
              </span>
            </div>
          </div>
          <div className={`sm:mb-10`}>
            {news?.data.attributes.blocks || news?.data.attributes.block ? (
              (
                <div className={`xl:mb-5 mb-2`}>
                  {getLangString(locale, 'blocks')}
                </div>
              ) || (
                <div className={`xl:mb-5 mb-2`}>
                  {getLangString(locale, 'block')}
                </div>
              )
            ) : getLangString(locale, 'content') ? (
              <span
                className={`xl:text-[20px] inline-block whitespace-pre-line leading-normal text-sm lg:text-2xl font-[200] mb-5`}
              >
                {getLangString(locale, 'content')}
              </span>
            ) : (
              <>
                <Skeleton className={`inline-block w-full h-4 rounded-lg`}>
                  <div className={`w-full h-full`}></div>
                </Skeleton>
                <Skeleton className={`inline-block w-full h-4 rounded-lg`}>
                  <div className={`w-full h-full`}></div>
                </Skeleton>
                <Skeleton className={`inline-block w-full h-4 rounded-lg`}>
                  <div className={`w-full h-full`}></div>
                </Skeleton>
                <Skeleton className={`inline-block w-full h-4 rounded-lg`}>
                  <div className={`w-full h-full`}></div>
                </Skeleton>
              </>
            )}

            {news?.data?.attributes?.dockHref && (
              <div className={`flex gap-3`}>
                <Link
                  target={`_blank`}
                  className={`px-3 py-1 rounded-xl border border-primary-gold text-primary-gold transition duration-200 hover:text-white hover:border-white`}
                  href={news?.data?.attributes?.dockHref}
                >
                  <span className={`text-sm`}>{dictionary.news.doc_title}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}
