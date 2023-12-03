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
          className="2xl:h-[650px] xl:h-[500px] md:h-[300px] sm:h-[250px] h-[200px] brightness-75 object-cover object-center"
          width={1919}
          height={1098}
          radius="none"
          src={bassecoImage.src}
          alt="bassecoImage image"
        />
        <div className="pl-10 pb-10 xl:pl-[60px] z-10 sm:w-2/3 w-full absolute h-full flex flex-col justify-end">
          <span className="xl:text-[48px] font-[400]">BASS ECO</span>
          <span className="opacity-95 xl:text-[32px] text-xs leading-tight font-[300]">
            направление деятельности холдинга в сфере экологии, развития
            транспортной инфраструктуры и логистики.
          </span>
        </div>
      </div>

      <div className="xl:px-[60px] relative z-50 sm:px-5 px-5 flex flex-col gap-3 md:flex-row xl:gap-x-[40px] sm:mb-10 mb-5">
        <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D] xl:px-[40px] xl:py-[55px]">
          <span className="text-primary-gold xl:text-[24px] xl:mb-[50px] mb-5">
            Развитие речного порта и судоходства по реке Или
          </span>

          <ul className="list-disc text-sm px-5 xl:text-[20px]">
            <li>
              Улучшение скорости доставки грузов и увеличение объема
              грузоперевозок
            </li>
            <li>Расширение инфраструктуры речного флота</li>
            <li>Развитие логистической инфраструктуры</li>
            <li>Пассажирские перевозки, туризм Создание рабочих мест</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D] xl:px-[40px] xl:py-[55px]">
          <span className="text-primary-gold xl:text-[24px] xl:mb-[50px] mb-5">
            Строительство мусороперерабатывающих заводов на территории
            Казахстана
          </span>

          <ul className="list-disc text-sm px-5 xl:text-[20px]">
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
