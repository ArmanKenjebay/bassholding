import Image from 'next/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Image as ImageNext } from '@nextui-org/image'
import newsImage from '../../../../../public/images/news.webp'
import NewsPreviews from '@/app/[locale]/_components/NewsPreviews'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.news.title,
    description: dictionary.news.description,
  }
}

export default async function News({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const events = [
    {
      text: 'Число работников холдинга достигло круглой цифры.',
      date: '9/10/2023',
    },
    {
      text: 'Число работников холдинга достигло круглой цифры.',
      date: '9/10/2023',
    },
    {
      text: 'Число работников холдинга достигло круглой цифры.',
      date: '9/10/2023',
    },
    {
      text: 'Число работников холдинга достигло круглой цифры.',
      date: '9/10/2023',
    },
  ]

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex justify-between sm:flex-row flex-col-reverse gap-y-5 sm:mb-10 mb-5 relative">
        <div className="flex xl:text-3xl lg:text-2xl sm:text-xl flex-col sm:mt-20 py-5 sm:px-2 px-5 sm:static absolute z-50">
          <span>
            <span className="text-primary-gold">Наши новости и обновления</span>{' '}
            - это история нашего роста и развития.
          </span>
          <br />
          <span>
            Мы гордимся тем, что достигли и гордимся тем, куда нас ведет наш
            путь.
          </span>
        </div>

        <div className="flex xl:w-[570px] lg:w-[370px] md:w-[310px] sm:w-[270px] w-full">
          <div className="sm:h-full h-[294px] overflow-hidden relative right-0">
            <ImageNext
              as={Image}
              width={newsImage.width}
              height={newsImage.height}
              src={newsImage.src}
              radius="none"
              className="filter sm:brightness-75 brightness-[.3] z-10 object-cover"
              alt={'bassholding news image'}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-y-10 gap-x-2 px-2 sm:mb-10 mb-5">
        <NewsPreviews locale={locale} />

        <div className="flex flex-col max-h-[600px] max-w-[700px] sm:w-1/3 bg-[#272727] p-4 rounded-lg overflow-y-auto scrollbar-hide">
          <div className="text-lg mb-2 sm:mb-5 w-full tracking-widest">
            События холдинга
          </div>

          {events.map(({ text, date }, index) => (
            <div
              key={text + index}
              className="group flex flex-col gap-y-1 mb-5 cursor-pointer"
            >
              <span className="text-sm  tracking-wider font-thin group-hover:text-primary-gold">
                {text}
              </span>
              <span className="text-xs font-thin group-hover:text-primary-gold">
                {date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
