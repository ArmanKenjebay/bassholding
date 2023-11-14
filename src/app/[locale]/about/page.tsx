import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import Image from 'next/image'
import aboutImage from '@/../public/about.jpg'
import ekoImage from '@/../public/eko.jpg'
import inspiringImage from '@/../public/inspiring.jpg'
import technologyImage from '@/../public/technology.jpg'
import trustImage from '@/../public/trust.jpg'
import chingizImage from '@/../public/chingiz.png'
import erlanImage from '@/../public/erlan.jpg'
import balsuluImage from '@/../public/balsulu.png'
import maxImage from '@/../public/max.png'
import berikImage from '@/../public/berik.png'
import bibigulImage from '@/../public/bibigul.jpg'
import aliaImage from '@/../public/alia.jpg'
import alimImage from '@/../public/alim.jpg'
import shokanImage from '@/../public/shokan.jpg'
import ermekImage from '@/../public/ermek.jpg'
import PersonalCard from '@/app/[locale]/_components/PersonalCard'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.about.title,
    description: dictionary.about.description,
  }
}

export default async function About({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const feels = [
    { title: 'ЭКОЛОГИЧНОСТЬ', image: ekoImage },
    { title: 'ВОВЛЕЧЕННОСТЬ', image: inspiringImage },
    { title: 'ТЕХНОЛОГИЧНОСТЬ', image: technologyImage },
    { title: 'ЧЕСТНОСТЬ', image: trustImage, classes: 'grayscale' },
  ]

  const personals = [
    { name: 'Чингиз Садвакасов', src: chingizImage, position: 'Учредитель' },
    { name: 'Ерлан Тасбулатов', src: erlanImage, position: 'Учредитель' },
    {
      name: 'Балсулу Тасбулатова',
      src: balsuluImage,
      position: 'Руководитель HR и основатель Pincode',
    },
    {
      name: 'Максим Ванюков',
      src: maxImage,
      position: 'Руководитель отдела программирования',
    },
    {
      name: 'Берик Канаев',
      src: berikImage,
      position: 'Руководитель отдела финансов',
    },
    {
      name: 'Бибигуль Мусатаева',
      src: bibigulImage,
      position: 'Руководитель юридического отдела',
    },
    {
      name: 'Алия Корабаева',
      src: aliaImage,
      position: 'Руководитель отдела учет и аудит',
    },
    {
      name: 'Алимжан Абишев',
      src: alimImage,
      position: 'Руководитель отдела аналитики',
    },
    {
      name: 'Шокан Айдар',
      src: shokanImage,
      position: 'Руководитель отдела маркетинга',
    },
    {
      name: 'Ермек Ильясов',
      src: ermekImage,
      position: 'Руководитель отдела «MINING»',
    },
  ]

  return (
    <section className="flex flex-col">
      <div className="mt-20">
        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="relative h-full w-full">
            <Image
              src={aboutImage}
              width={aboutImage.width}
              height={aboutImage.height}
              alt={'about'}
              className="filter brightness-50 object-contain"
            />
            <span className="w-3/4 tracking-widest absolute lg:bottom-20 bottom-5 left-3 font-gilroy xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              люди - наша главная ценность и источник силы холдинга.
            </span>
          </div>
        </div>
        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="flex flex-col sm:w-3/4 w-full">
            <span className="text-xl">Наши ценности</span>
            <span className="text-xs tracking-widest">
              Наши ценности и принципы тесно соприкасаются с целями ООН в
              области устойчивого развития
            </span>
          </div>
        </div>

        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="h-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-3 gap-1">
            {feels.map(({ title, image, classes }, index) => (
              <div className="relative xl:w-[300px] xl:h-[250px] lg:w-[200px] lg:h-[150px] w-[150px] h-[101px]">
                <Image
                  src={image}
                  alt=""
                  className={`w-full h-full object-cover md:rounded-[50px] rounded-2xl filter brightness-[.65] ${
                    classes ? classes : ''
                  }`}
                />
                <span className="absolute top-1/2 w-full h-full text-sm text-center">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="grid gap-x-3 sm:gap-y-10 gap-y-5 grid-cols-2 md:grid-cols-4">
            <div className="col-span-2 md:col-span-2 flex justify-center flex-col gap-y-3">
              <span className="text-white text-4xl">Наша команда</span>
              <span className="text-primary-gold text-4xl tracking-widest">
                Команда, в которой каждый вносит свой вклад, способна перемещать
                горы
              </span>
            </div>
            {personals.map(({ name, position, src }) => (
              <PersonalCard src={src} name={name} position={position} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
