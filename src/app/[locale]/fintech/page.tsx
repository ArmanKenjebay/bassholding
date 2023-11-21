import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Image } from '@nextui-org/image'
import fintechImage from '@/../public/images/fintech.webp'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.fintech,
    description: dictionary.fintech,
  }
}

export default async function Fintech({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col w-full h-full">
      <div className="relative w-full h-full flex sm:mb-10 mb-5">
        <Image
          className="xl:h-[500px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] brightness-[.3] object-cover object-center grayscale"
          width={1919}
          height={1098}
          radius="none"
          src={fintechImage.src}
          alt="fintechImage image"
        />
        <div className="z-10 sm:w-1/2 w-full absolute bottom-5 left-2 flex flex-col">
          <span className="tracking-widest text-2xl">FINTECH</span>
          <span className="opacity-95 md:text-sm text-xs">
            В рамках данного направления планируется реализация финтех проектов
            в Казахстане и за его пределами.
            <br />В сентябре 2023 года открыто представительство в Тайланде,
            которое будет работать в данном направлении.
          </span>
        </div>
      </div>

      <div className="relative z-50 sm:px-5 px-2 flex flex-col gap-3 md:flex-row sm:mb-10 mb-5">
        <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest mb-5">
            AGRO FINTECH
          </span>
          <span className="text-sm mb-3">
            Реализация FinTech продуктов с акцентом на поддержку развития
            сельского хозяйства и оказание сервисно-финансовой поддержки
            фермерским хозяйствам
          </span>
          <span className="text-sm mb-3">
            Наша цель – обеспечить доступ к современным финансовым инструментам
            и технологиям. Наши решения упрощают финансовые операции и создают
            новые возможности для успешных инвестиций.
          </span>

          <span>Проекты в данном направлении:</span>

          <ul className="list-disc text-sm px-5">
            <li>
              <span className="text-primary-gold">Crowdlender.kz</span> –
              краудлендинговая инвестиционная платформа;
            </li>
            <li>
              <span className="text-primary-gold">AgroCredit</span> – кредитный
              модуль скоринга заявок в АПК;
            </li>
            <li>
              <span className="text-primary-gold">GetCapital.kz</span> –
              факторинг
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest mb-5">
            Представительство в Таиланде
          </span>
          <span className="text-sm mb-3">
            В рамках данного направления планируется реализация финтех проектов
            в Казахстане и за его пределами. В сентябре 2023 года открыто
            представительство в Тайланде, где мы планируем запускать финтех
            проекты и развивать торговые взаимоотношения.
          </span>
        </div>
      </div>
    </section>
  )
}
