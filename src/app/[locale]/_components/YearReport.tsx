'use client'

import { Tab, Tabs } from '@nextui-org/tabs'
import React from 'react'
import { AnnualsDocs, FinDocsAttribute } from '@/app/[locale]/_types/TFinDocs'
import { Locale } from '@/i18n-config'
import ArrowSvg from '@/app/[locale]/_components/ArrowSvg'

type Props = {
  data: AnnualsDocs
  locale: Locale
  dictionary: any
}

export default async function YearReport({ data, locale, dictionary }: Props) {
  const getName = (locale: Locale, data: FinDocsAttribute) => {
    switch (locale) {
      case 'en':
        return data.name_en
      case 'ru':
        return data.name_ru
      case 'kk':
        return data.name_kz
      case 'th':
        return data.name_th
      default:
        return data.name_en
    }
  }

  const getDate = (data: string) => {
    return new Date(data).toLocaleDateString('ru')
  }

  return (
    <div className={`flex flex-col`}>
      <span
        className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] mb-5`}
      >
        {dictionary.annualReports}
      </span>

      <Tabs aria-label="years" variant={`underlined`}>
        {data.data.map((year, index) => (
          <Tab key={year.id} title={`2023`}>
            <div className={`flex flex-wrap gap-7`}>
              <div
                className={`xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] xl:h-[235px] w-full h-[125px] xl:rounded-2xl rounded-3xl flex flex-col justify-between bg-primary-gold p-5`}
              >
                <div className={`flex justify-between`}>
                  <span
                    className={`xl:text-[24px] lg:text-[22px] text-[18px] text-black`}
                  >
                    {getName(locale, year.attributes)}
                  </span>
                  <a
                    target={`_blank`}
                    href={year.attributes.href}
                    className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-black hover:text-white`}
                  >
                    <ArrowSvg
                      classNames={`block group-hover:hidden`}
                      width={'24'}
                      height={'24'}
                    />
                    <ArrowSvg
                      classNames={`hidden group-hover:block origin-center -rotate-45`}
                      fillPath={'white'}
                      width={'24'}
                      height={'24'}
                    />
                  </a>
                </div>
                <div>
                  <span className={`text-[16px] text-black`}>
                    {getDate(year.attributes.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}
