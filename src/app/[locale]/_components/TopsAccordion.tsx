'use client'

import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Image from 'next/image'
import React from 'react'
import chingizImage from '../../../../public/images/chingiz.webp'
import erlanImage from '../../../../public/images/erlan.webp'
import IconPlus from '@/app/[locale]/_components/IconPlus'

export default function TopsAccordion({ dictionary }: { dictionary: any }) {
  const tops = [
    {
      image: chingizImage,
      name: dictionary.about.chingiz_sadvakassov,
      position: dictionary.about.founder,
      text: 'Более 20 лет опыта работы в государственных органах, национальных компаниях, финансовых институтах, производственных и  сервисных предприятиях. Работа в следующих отраслях: нефтедобыча, добыча цветных металлов, строительство, энергетика, телекоммуникации, зерновой сектор. Занимал руководящие должности в блоках казначейства, бюджетирования, финансового учета, управления проектами. Опыт управления проектами частного капитала и государственными финансами, опыт аудитора в компаниях Big 4 (проекты национальных компаний, международных финансовых институтов и транснациональных корпораций). Образование: Aldenham School, Хартфордшир (Англия), Пекинский Университет Языка и Культуры (КНР), Московский Социально-Гуманитарный Институт (филиал в г. Астана), Карагандинский Экономический Университет.',
    },
    {
      image: erlanImage,
      name: dictionary.about.yerlan_tasbulatov,
      position: dictionary.about.founder,
      text: 'Более 20 лет опыта в развитии международного бизнеса, сделках слияний и поглощений, создании международных совместных предприятий и партнерстве, стратегическом и операционном управлении в различных отраслях: телекоммуникации, строительство и недвижимость, развитие и управление гостиничным бизнесом, IT-стартапы, инвестиционное и управление активами, финансовая аудиторская деятельность в Big 4.  За время своей карьеры Ерлан жил и работал в Казахстане, Грузии, Вьетнаме, Турции и Доминиканской Республике. Образование: степень бакалавра по международным экономическим отношениям Narxoz University (бывший КазГАУ), степень МВА от Казахстанского института менеджмента, экономики и прогнозирования (KIMEP).',
    },
  ]

  return (
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: 'auto',
            transition: {
              height: {
                type: 'spring',
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: 'ease',
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: 'ease',
                duration: 0.25,
              },
              opacity: {
                easings: 'ease',
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      {tops.map((el) => (
        <AccordionItem
          indicator={<IconPlus />}
          key={el.name}
          title={
            <div className={`flex justify-between`}>
              <span
                className={`flex-1 text-primary-gold xl:text-[24px] sm:text-[18px] text-[16px]`}
              >
                {el.name}
              </span>
              <span
                className={`flex-1 xl:text-[24px] sm:text-[18px] text-[16px] font-[250]`}
              >
                {el.position}
              </span>
            </div>
          }
        >
          <div className={`flex xl:flex-row flex-col justify-between gap-10`}>
            <Image
              width={191}
              height={227}
              src={el.image}
              alt={el.name}
              className={`w-full h-full`}
            />
            <span className={`xl:text-[24px] sm:text-[18px] text-[16px]`}>
              {el.text}
            </span>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
