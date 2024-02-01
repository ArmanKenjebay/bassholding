'use client'

import React from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import { FinDocs, FinDocsAttribute } from '@/app/[locale]/_types/TFinDocs'
import { Locale } from '@/i18n-config'

type Props = {
  data: FinDocs
  locale: Locale
}

export default function FinancialTabs({ data, locale }: Props) {
  const api = process.env.NEXT_PUBLIC_BACKEND_API_FILE

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
        ФИНАНСОВЫЕ ПОКАЗАТЕЛИ
      </span>

      <Tabs aria-label="years" variant={`underlined`}>
        <Tab title={'2024'}>
          <div className={`flex flex-wrap gap-7`}>
            {data.data.map((year) => (
              <div key={year.id}>
                {year.attributes.file.data.map((part, index) => (
                  <div
                    key={index}
                    className={`xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] xl:h-[235px] w-full h-[125px] xl:rounded-2xl rounded-3xl flex flex-col justify-between bg-[#262626] p-5`}
                  >
                    <div className={`flex justify-between`}>
                      <span className={`text-[24px] truncate`}>
                        {getName(locale, year.attributes)}
                      </span>
                      <a
                        target={`_blank`}
                        href={api + part.attributes.url}
                        className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
                      >
                        <span className={`block group-hover:hidden`}>
                          &#8594;
                        </span>
                        <span className={`hidden group-hover:block`}>
                          &#8599;
                        </span>
                      </a>
                    </div>
                    <div>
                      <span className={`text-[16px] text-[#AFACAC]`}>
                        {getDate(part.attributes.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
