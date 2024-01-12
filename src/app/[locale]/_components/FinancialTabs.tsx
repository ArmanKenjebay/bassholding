'use client'

import { Tab, Tabs } from '@nextui-org/tabs'
import React from 'react'

export default function FinancialTabs() {
  const years = [
    {
      year: 2023,
      parts: [
        {
          label: '4 квартал',
          date: '26 ноября, 2023',
        },
        {
          label: '3 квартал',
          date: '26 ноября, 2023',
        },
        {
          label: '2 квартал',
          date: '26 ноября, 2023',
        },
        {
          label: '1 квартал',
          date: '26 ноября, 2023',
        },
      ],
    },
    {
      year: 2022,
      parts: [
        {
          label: '4 квартал',
          date: '26 ноября, 2022',
        },
        {
          label: '3 квартал',
          date: '26 ноября, 2022',
        },
        {
          label: '2 квартал',
          date: '26 ноября, 2022',
        },
        {
          label: '1 квартал',
          date: '26 ноября, 2022',
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
              {year.parts.map((part) => (
                <div
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
