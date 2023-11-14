import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import DirectionCard from '@/app/[locale]/_components/DirectionCard'
import React from 'react'
import homeCard1 from '../../../../public/home-card1.jpg'
import homeCard2 from '../../../../public/home-card2.jpg'
import homeCard3 from '../../../../public/home-card3.jpg'
import homeCard4 from '../../../../public/home-card4.jpg'

export async function generateMetadata(params: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.direction.title,
    description: dictionary.direction.description,
  }
}

export default async function Direction({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const cards = [
    {
      image: homeCard1,
      title: 'MINING',
      desc: 'mining',
      chips: ['subsoil_use', 'gold_mining'],
    },
    {
      image: homeCard2,
      title: 'HR TECH',
      desc: 'hr_tech',
      chips: ['HR TECH', 'профориентация', 'оценка кадров'],
    },
    {
      image: homeCard3,
      title: 'SHIPPING',
      desc: 'развитие речного порта и судоходства по реке Или',
      chips: ['экология', 'транспорт'],
    },
    {
      image: homeCard4,
      title: 'FINTECH',
      desc: 'реализация финтех проектов в Казахстане и за пределами',
      chips: ['краудлендинг', 'факторинг'],
    },
  ]

  return (
    <section className="flex flex-col w-full h-full">
      <div className="mt-20">
        <div className="sm:px-10 px-5 py-3 flex justify-center items-center text-center sm:mb-10 mb-5">
          <span className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
            <span className="text-primary-gold">Основная задача холдинга</span>{' '}
            - поднимать знамя Республики Казахстан в разных направлениях и на
            разных площадках.
          </span>
        </div>
        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="flex sm:flex-row flex-col">
            {cards.map((card, index) => (
              <DirectionCard
                key={card.title}
                {...card}
                dictionary={dictionary}
                className="app-img-box"
                classNameImage="filter brightness-50 ease-in-out duration-200 scale-150 -translate-y-6 object-cover grayscale hover:scale-110 hover:grayscale-0 hover:brightness-[.8]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
