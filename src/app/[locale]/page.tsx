import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import homeImg from '@/../public/home-page.jpg'
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
      <div className="flex sm:justify-end justify-center">
        <Image
          priority
          disableSkeleton={false}
          isZoomed={true}
          as={NextImage}
          width={670}
          height={942}
          radius="none"
          src={`${homeImg.src}`}
          fallbackSrc="https://via.placeholder.com/300x200"
          alt="bassholding"
        />
      </div>
    </section>
  )
}
