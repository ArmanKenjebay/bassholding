import React from 'react'
import { Image } from '@nextui-org/image'
import { StaticImageData } from 'next/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

import homeImg from '@/../public/home-page.jpg'
import homeImg2 from '@/../public/home-page-2.jpg'
import homeCard1 from '@/../public/home-card1.jpg'
import homeCard2 from '@/../public/home-card2.jpg'
import homeCard3 from '@/../public/home-card3.jpg'
import homeCard4 from '@/../public/home-card4.jpg'
import CustomCard from '@/app/[locale]/_components/CustomCard'
import Marquee from '@/app/[locale]/_components/Marquee'

type TCard = {
  image: StaticImageData
  title: string
  desc: string
  chips: string[]
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const cards = [
    {
      image: homeCard1,
      title: 'MINING',
      desc: 'золотодобывающая компания, имеющая 25-летний опыт деятельности на рынке драгоценных металлов',
      chips: ['недропользование', 'добыча золота'],
    },
    {
      image: homeCard2,
      title: 'HR TECH',
      desc: 'диагностика компетенции',
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

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex justify-between sm:flex-row flex-col-reverse gap-y-5 sm:mb-10 mb-5">
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
              fetchPriority="high"
              src={homeImg.src}
              radius="none"
              className="filter brightness-75 z-10 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="sm:mb-10 mb-5">
        <Marquee>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
          <span className="text-4xl mx-4">HR TECH</span>
          <span className="text-4xl mx-4">FINTECH</span>
          <span className="text-4xl mx-4">ENERGY</span>
          <span className="text-4xl mx-4">MINING</span>
        </Marquee>
      </div>

      <div className="sm:px-5 px-2 sm:mb-10 mb-5">
        <div className="flex sm:flex-row flex-col">
          {cards.map((card, index) => (
            <CustomCard
              key={card.title}
              {...card}
              isFirst={index === 0}
              className="app-img-box"
              classNameImage="filter brightness-50 ease-in-out duration-200 scale-150 -translate-y-6 object-cover grayscale hover:scale-110 hover:grayscale-0 hover:brightness-[.8]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
