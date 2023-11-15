import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import bassgoldImage from '@/../public/bassgold-slider.jpg'
import { Image } from '@nextui-org/image'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.direction.bassgold,
    description: dictionary.direction.bassgold,
  }
}

export default async function BassGold({
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
          src={bassgoldImage.src}
          alt="bassgold image"
        />
        <div className="z-10 sm:w-1/2 w-full absolute bottom-5 left-2 flex flex-col">
          <span className="tracking-widest text-2xl">BASS GOLD</span>
          <span className="opacity-95 md:text-sm text-xs">
            золотодобывающая компания, имеющая 25-летний опыт деятельности на
            рынке драгоценных металлов
          </span>
        </div>
      </div>

      <div className="sm:px-5 px-2 flex flex-col gap-3 md:flex-row sm:mb-10 mb-5">
        <div className="flex flex-col p-3 rounded-lg bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest">Ушоккы</span>
          <span className="text-sm mb-3">
            В активах компании имеется золоторудное месторождение Ушшокы,
            которое мы активно развиваем и модернизируем. Наша цель – переход от
            операций по реализации сырья к продукции более высокого передела.
          </span>

          <span>Ключевые показатели за 2022 год:</span>

          <ul className="list-disc px-5">
            <li>добыча золотосодержащей руды 37 372,3 тонн;</li>
            <li>среднее содержание золота в руде 4,8 гр/тонна;</li>
            <li>
              объемы реализации готовой продукции, тонн: золотосодержащая руда –
              35 227 тонн; концентрат – 910 тонн.
            </li>
          </ul>
        </div>

        <div className="flex flex-col p-3 rounded-lg bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest">Чинасыл-сай</span>
          <span className="text-sm mb-3">
            Для наращивания объема добычи и переработки твердых полезных
            ископаемых, Холдингом приобретено месторождение «Чинасыл-сай» в
            Алматинской области. Данная сделка позволит увеличить запасы золота
            на объем порядка 7 тонн.
            <br />
            <br />
            На месторождении также планируется строительство фабрики по
            переработке флотоконцентрата производственной мощностью 300 тыс.
            тонн руды в год с получением товарного свинцового и цинкового
            концентрата с содержанием золота, серебра и кадмия.
          </span>
        </div>
      </div>
    </section>
  )
}
