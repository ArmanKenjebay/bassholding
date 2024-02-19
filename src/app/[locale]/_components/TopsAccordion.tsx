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
      text: [
        dictionary.investors.chingizInfo,
        dictionary.investors.chingizInfo_2,
      ],
    },
    {
      image: erlanImage,
      name: dictionary.about.yerlan_tasbulatov,
      position: dictionary.about.founder,
      text: [dictionary.investors.erlanInfo, dictionary.investors.erlanInfo_2],
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
            <div className={`flex justify-between lg:flex-row flex-col`}>
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
            <div className={`flex flex-col gap-y-5 pb-10 font-[250]`}>
              {el.text.map((text) => (
                <span className={`xl:text-[24px] sm:text-[18px] text-[16px]`}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
