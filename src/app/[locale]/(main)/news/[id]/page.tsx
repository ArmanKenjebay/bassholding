import Image from 'next/image'
import { getNewsById } from '@/get-api'
import { getDictionary } from '@/get-dictionary'
import PrevNews from '@/app/[locale]/_components/PrevNews'
import { Chip } from '@nextui-org/chip'
import { Locale } from '@/i18n-config'
import Link from 'next/link'

async function getData(id: string) {
  const data = await getNewsById(id)
  return { ...data }
}

export async function generateMetadata({ params }: any) {
  const data = await getData(params.id).then((res) => res)

  return {
    title: data.title ? data.title[params.locale as Locale] : 'Bassholding',
    description: data.context ? data.context[params.locale as Locale] : '',
  }
}

export default async function NewsDetail({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string }
}) {
  const dictionary = await getDictionary(locale)
  const data = await getData(id).then((res) => res)

  let main: any

  try {
    main = require(`@/../public/images/${data?.image?.main}`)
  } catch (e) {
    console.error(e)
  }

  return (
    <div className={`mt-20 flex flex-col w-full h-full`}>
      <div className={`flex flex-col sm:px-5 px-2 sm:mb-10 mb-5`}>
        <PrevNews
          locale={locale}
          dictionary={dictionary}
          classNames={'mb-5 sm:mb-10'}
        />

        <div
          className={`flex gap-x-12 gap-y-3 lg:flex-row flex-col-reverse mb-5 sm:mb-10`}
        >
          {main && (
            <Image
              className={`rounded-2xl w-full 2xl:h-[500px] xl:w-[600px] xl:h-[450px] lg:h-[280px] h-[200px] object-cover`}
              src={main}
              width={959}
              height={650}
              alt={'bassholding news image'}
            />
          )}

          <div className={`flex flex-col gap-y-3`}>
            <div
              className={`flex flex-row lg:flex-col gap-x-5 gap-y-3 items-center lg:items-start`}
            >
              <Chip
                variant={'bordered'}
                className="border-primary-gold text-primary-gold"
                classNames={{
                  base: 'truncate',
                  content: 'p-0 sm:p-1 truncate',
                }}
              >
                {data?.chips?.map((chi) => chi[locale])[0]}
              </Chip>

              <span className={`xl:text-[40px] font-[300]`}>
                {data.date && data?.date[locale]}
              </span>
            </div>
            <span
              className={`xl:text-[48px] leading-normal text-lg font-[300]`}
            >
              {data.title && data?.title[locale]}
            </span>
          </div>
        </div>
        <div className={`sm:mb-10`}>
          <span
            className={`inline-block whitespace-pre-line leading-normal text-sm lg:text-2xl font-[200] mb-5`}
          >
            {data.content && data.content[locale]}
          </span>

          {data?.docsHref?.length && (
            <div className={`flex gap-3`}>
              {data?.docsHref.map((doc) => (
                <Link
                  target={`_blank`}
                  className={`px-3 py-1 rounded-xl border border-primary-gold text-primary-gold transition duration-200 hover:text-white hover:border-white`}
                  href={doc}
                >
                  <span className={`text-sm`}>Документ</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
