'use client'

import { Chip } from '@nextui-org/chip'
import Span from '@/app/[locale]/_components/Span'
import { useRouter } from 'next-intl/client'
import { Locale } from '@/i18n-config'

type Props = {
  locale: Locale
  id: any
  api: any
  image_preview_url: string
  image_main_url: string
  image_content_url: string
  image_sub_content_url: string
  chips: string
  title: string
  date: string
}

export default function NewsPreview({
  locale,
  id,
  api,
  image_preview_url,
  image_main_url,
  image_content_url,
  image_sub_content_url,
  chips,
  title,
  date,
}: Props) {
  const router = useRouter()

  const handleRedirect = (id: string, locale: string) => {
    router.push(`/news/${id}`, { locale: locale })
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
    <div
      onClick={() => handleRedirect(id, locale)}
      key={id}
      className="cursor-pointer transition duration-200 ease-in-out group hover:scale-[.98] overflow-hidden flex-1 flex flex-col"
    >
      <img
        width={808}
        height={900}
        className="transition duration-200 ease-in-out rounded-3xl 2xl:h-[300px] xl:h-[280px] lg:h-[180px] md:h-[120px] sm:h-[100px] w-full h-[200px] object-cover md:mb-10 mb-5"
        src={
          api +
          getFirstValidUrl(
            image_preview_url ||
              image_main_url ||
              image_content_url ||
              image_sub_content_url,
          )
        }
        alt={'bassholding news image'}
      />

      {chips ? (
        <Chip
          variant="bordered"
          color="warning"
          className={`md:mb-5 mb-2 xl:text-[16px]`}
        >
          {chips}
        </Chip>
      ) : (
        <Span classNames={'w-1/4'}></Span>
      )}
      <span
        className={`group-hover:text-primary-gold text-sm md:text-base lg:text-xl xl:text-[24px] font-[300] mb-[45px] h-14 w-full whitespace-pre-wrap truncate`}
      >
        <Span classNames={``}>{title}</Span>
      </span>
      <span
        className={`group-hover:text-primary-gold text-sm md:text-base lg:text-xl xl:text-[16px] font-[300]`}
      >
        <Span classNames={`${!date && 'w-1/4'}`}>{date}</Span>
      </span>
    </div>
  )
}
