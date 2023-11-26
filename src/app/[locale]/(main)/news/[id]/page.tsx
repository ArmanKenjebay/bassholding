import Image from 'next/image'
import { getNewsById } from '@/get-api'
import { getDictionary } from '@/get-dictionary'
import PrevNews from '@/app/[locale]/_components/PrevNews'
import { Chip } from '@nextui-org/chip'
import { Locale } from '@/i18n-config'

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
              className={`rounded-2xl 2xl:w-[660px] 2xl:h-[350px] sm:w-[200px] sm:h-[150px] w-full h-[200px]`}
              src={main}
              width={959}
              height={650}
              alt={'bassholding news image'}
            />
          )}

          <div className={`flex flex-col`}>
            <div className={`flex flex-row lg:flex-col`}>
              <Chip
                variant={'bordered'}
                className="border-primary-gold text-primary-gold mb-10"
                classNames={{
                  base: 'truncate',
                  content: 'p-0 sm:p-1 truncate',
                }}
              >
                {data?.chips?.map((chi) => chi[locale])[0]}
              </Chip>

              <span className={`xl:text-[40px] font-[300] mb-10`}>
                {data.date && data?.date[locale]}
              </span>

              <span className={`xl:text-[48px] font-[300]`}>
                {data.title && data?.title[locale]}
              </span>
            </div>
          </div>
        </div>
        <div className={`px-5`}>
          <span
            className={`whitespace-pre-line leading-normal text-[20px] font-[200]`}
          >
            {data.content && data.content[locale]}
          </span>
        </div>
      </div>
    </div>
  )
}
