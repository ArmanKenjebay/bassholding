'use client'

import React from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'

export default function FinancialTabs() {
  const years = [
    {
      year: 2023,
      parts: [
        {
          label: '3 квартал',
          date: '14 ноября, 2023',
          doc: '',
        },
        {
          label: '2 квартал',
          date: '14 август, 2023',
          doc: '',
        },
        {
          label: '1 квартал',
          date: '15 май, 2023',
          doc: '',
        },
      ],
    },
  ]

  return (
    <div className={`flex flex-col`}>
      <span
        className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] mb-5`}
      >
        ФИНАНСОВЫЕ ПОКАЗАТЕЛИ
      </span>

      <Tabs aria-label="years" variant={`underlined`}>
        {years.map((year, index) => (
          <Tab key={year.year} title={year.year}>
            <div className={`flex flex-wrap gap-7`}>
              {year.parts.map((part, index) => (
                <div
                  key={index}
                  className={`xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] xl:h-[235px] w-full h-[125px] xl:rounded-2xl rounded-3xl flex flex-col justify-between bg-[#262626] p-5`}
                >
                  <div className={`flex justify-between`}>
                    <span className={`text-[24px]`}>{part.label}</span>
                    <div
                      className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
                    >
                      <span className={`block group-hover:hidden`}>
                        &#8594;
                      </span>
                      <span className={`hidden group-hover:block`}>
                        &#8599;
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className={`text-[16px] text-[#AFACAC]`}>
                      {part.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}
