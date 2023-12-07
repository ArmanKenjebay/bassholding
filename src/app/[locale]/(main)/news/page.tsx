import Image from 'next/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Image as ImageNext } from '@nextui-org/image'
import newsImage from '../../../../../public/images/news.webp'
import NewsPreviews from '@/app/[locale]/_components/NewsPreviews'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'
import MotionDiv from '@/app/[locale]/_components/MotionDiv'

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
  ]

  return (
    <section className="flex flex-col w-full h-full">
      <PageWrapper>
        <MotionDiv>
          <div className="flex justify-between sm:flex-row flex-col-reverse gap-y-5 sm:mb-10 mb-5 relative">
            <div
              className="uppercase xl:pl-[60px] xl:pr-[90px] sm:static absolute z-20 flex xl:text-[48px] lg:text-2xl sm:text-xl flex-col sm:justify-end px-5 sm:pb-0 pb-5"
              style={{
                lineHeight: '100%',
              }}
            >
              <span>
                <span className="text-primary-gold">
                  {dictionary.news.title_1 + ' '}
                </span>
                {(locale === 'ru' ? ' - ' : '') + dictionary.news['title_1-1']}
              </span>
              <br />
              <span>{dictionary.news.title_2}</span>
            </div>

            <Image
              width={808}
              height={900}
              src={newsImage.src}
              className="w-full h-[350px] sm:w-[350px] md:w-1/3 md:h-[380px] lg:h-[480px] xl:h-[700px] xl:w-[467px] filter sm:brightness-75 brightness-[.3] z-10 object-cover"
              alt={'bassholding news image'}
            />
          </div>
        </MotionDiv>

        <div className="xl:px-[60px] flex flex-col sm:flex-row justify-between gap-x-5 gap-y-10 px-5 sm:mb-10 mb-5">
          <NewsPreviews locale={locale} />

          <div className="flex flex-1 flex-col bg-[#272727] h-fit p-10 rounded-3xl overflow-y-auto scrollbar-hide">
            <div className="xl:text-[24px] text-lg mb-2 xl:mb-10 sm:mb-5 w-full tracking-widest">
              {dictionary.news.events_title}
            </div>

            {events.map(({ text, date }, index) => (
              <div
                key={text + index}
                className="group flex flex-col gap-y-1 mb-[30px] cursor-pointer"
              >
                <span className="text-sm xl:text-[20px] font-[300] group-hover:text-primary-gold mb-5">
                  {text}
                </span>
                <span className="text-xs xl:text-[16px] font-thin group-hover:text-primary-gold">
                  {date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
