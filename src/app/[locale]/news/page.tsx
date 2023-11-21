import Image from 'next/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Image as ImageNext } from '@nextui-org/image'
import newsImage from '@/../public/images/news.webp'
import newsItem4 from '@/../public/images/news-item-1.webp'
import newsItem2 from '@/../public/images/news-item-2.webp'
import newsItem3 from '@/../public/images/news-item-3.webp'
import newsItem1 from '@/../public/images/news-item-4.webp'
import { Chip } from '@nextui-org/chip'

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

  const news = [
    {
      image: newsItem1,
      chip: 'социальная жизнь',
      text: 'Надпись UMIT из 270 деревьев была высажена в Павлодарской области',
    },
    {
      image: newsItem2,
      chip: 'BASS GOLD',
      text: 'Работников рудника Ушшокы наградили благодарственными...',
    },
    {
      image: newsItem3,
      chip: 'социальная жизнь',
      text: 'BASS Gold выплатил купонное вознаграждение по облигациям первого...',
    },
    {
      image: newsItem4,
      chip: 'BASS GOLD',
      text: 'BASS Gold сообщает о начале торгов облигациями на KASE',
    },
  ]

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

      <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-2 px-2 sm:px-5 sm:mb-10 mb-5">
        <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
          {news.map(({ image, chip, text }, index) => (
            <div
              key={index}
              className="overflow-hidden flex-1 flex flex-col gap-2"
            >
              <ImageNext
                as={Image}
                width={image.width}
                height={image.height}
                src={image.src}
                alt={chip}
                className="aspect-square sm:w-[280px] sm:h-[180px] w-[150px] h-[80px]"
              />
              <Chip variant="bordered" color="warning">
                {chip}
              </Chip>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col max-h-[600px] bg-[#272727] p-5 rounded-lg overflow-y-auto scrollbar-hide">
          <div className="text-xl mb-5 w-full p-2 tracking-widest">
            События холдинга
          </div>

          {events.map(({ text, date }, index) => (
            <div key={text + index} className="flex flex-col gap-y-1 mb-5">
              <span className="text-xl tracking-wider font-thin">{text}</span>
              <span className="text-sm opacity-70">{date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
