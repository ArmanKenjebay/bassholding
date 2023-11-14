import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import homeImg from '@/../public/home-page.jpg'
import homeImg2 from '@/../public/home-page-2.jpg'
import { Image } from '@nextui-org/image'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="w-full h-full">
      <div className="flex justify-between sm:flex-row flex-col-reverse gap-y-5">
        <div className="sm:px-0 px-2 flex flex-col gap-y-3 justify-end lg:pb-32 md:pb-0 sm:pb-0 sm:ml-5">
          <Image
            className="xl:w-[447px] lg:w-[370px] md:w-[340px] sm:w-[280px] w-[210px]"
            src={homeImg2.src}
            width={447}
            height={111}
            radius="full"
          />
          <div className="flex flex-col gap-y-1">
            <span className="text-2xl tracking-widest">BASS HOLDING</span>
            <span className="opacity-70 tracking-wide">
              {dictionary.main['text-under-photo']}
            </span>
          </div>
        </div>
        <div className="flex xl:w-[570px] lg:w-[370px] md:w-[310px] sm:w-[270px] w-full">
          <div className="sm:h-full h-[294px] overflow-hidden relative">
            <span className="absolute pl-2 z-50 lg:bottom-28 md:bottom-24 sm:bottom-16 bottom-10 lg:text-3xl md:text-xl text-xl">
              {dictionary.main['text-photo'].split('.').map((text) => (
                <span className="block">{text}</span>
              ))}
            </span>

            <Image
              src={homeImg.src}
              radius="none"
              className="filter brightness-75 z-10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
