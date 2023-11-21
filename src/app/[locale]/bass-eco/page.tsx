import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Image } from '@nextui-org/image'
import bassecoImage from '@/../public/images/bass-eco.webp'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary['bass-eco'],
    description: dictionary['bass-eco'],
  }
}

export default async function BassEco({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col w-full h-full">
      <div className="relative w-full h-full flex sm:mb-10 mb-5">
        <Image
          className="xl:h-[500px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] brightness-75 object-cover object-center"
          width={1919}
          height={1098}
          radius="none"
          src={bassecoImage.src}
          alt="bassecoImage image"
        />
        <div className="z-10 sm:w-1/2 w-full absolute bottom-5 left-2 flex flex-col">
          <span className="tracking-widest text-2xl">BASS ECO</span>
          <span className="opacity-95 md:text-sm text-xs">
            направление деятельности холдинга в сфере экологии, развития
            транспортной инфраструктуры и логистики.
          </span>
        </div>
      </div>

      <div className="relative z-50 sm:px-5 px-2 flex flex-col gap-3 md:flex-row sm:mb-10 mb-5">
        <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest mb-5">
            Развитие речного порта и судоходства по реке Или
          </span>

          <ul className="list-disc text-sm px-5">
            <li>
              Улучшение скорости доставки грузов и увеличение объема
              грузоперевозок
            </li>
            <li>Расширение инфраструктуры речного флота</li>
            <li>Развитие логистической инфраструктуры</li>
            <li>Пассажирские перевозки, туризм Создание рабочих мест</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest mb-5">
            Строительство мусороперерабатывающих заводов на территории
            Казахстана
          </span>

          <ul className="list-disc text-sm px-5">
            <li>Улучшение экологической обстановки</li>
            <li>Эффективное использование вторичного сырья</li>
            <li>Выработка дополнительных мощностей энергии</li>
            <li>Создание рабочих мест</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
