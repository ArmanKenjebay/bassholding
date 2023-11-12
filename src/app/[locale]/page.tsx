import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import homeImg from '@/../public/home-page.jpg'
import homeImg2 from '@/../public/home-page-2.jpg'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex sm:flex-row flex-col-reverse gap-y-3 sm:justify-end justify-center">
        <div className="w-2/3 flex flex-col justify-end items-start">
          <div className="ml-10 w-[447px] h-[111px] overflow-hidden rounded-[99px]">
            <Image
              priority
              as={NextImage}
              width={447}
              height={111}
              radius="none"
              src={`${homeImg2.src}`}
              alt="bassholding"
            />
          </div>
          <span className="text-2xl">BASS HOLDING</span>
          <span className="text-base">
            Группа компаний, осуществляющая инвестиционную деятельность в разных
            секторах экономики.
          </span>
        </div>
        <div className="sm:w-1/3 w-full">
          <Image
            priority
            as={NextImage}
            width={670}
            height={942}
            radius="none"
            src={`${homeImg.src}`}
            alt="bassholding"
          />
        </div>
      </div>
    </section>
  )
}
