'use client'

import React from 'react'
import { Tab, Tabs } from '@nextui-org/tabs'
import { FinDocs, FinDocsAttribute } from '@/app/[locale]/_types/TFinDocs'
import { Locale } from '@/i18n-config'
import ArrowSvg from '@/app/[locale]/_components/ArrowSvg'

type Props = {
  data: FinDocs
  locale: Locale
  dictionary: any
}

export default function FinancialTabs({ data, locale, dictionary }: Props) {
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
        className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[18px] md:mb-5`}
      >
        {dictionary.financialIndicators}
      </span>

      <Tabs aria-label="years" variant={`underlined`}>
        <Tab title={'2023'}>
          <div className={`flex flex-wrap gap-7`}>
            {data.data.map((year) => (
              <div
                className={`flex-1 xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] w-full xl:h-[235px] h-[125px] xl:rounded-2xl rounded-3xl flex flex-col justify-between bg-[#262626] p-5`}
                key={year.id}
              >
                {year?.attributes?.file?.data && year?.attributes?.file?.data?.map((part, index) => (
                  <div key={index} className={`w-full h-full`}>
                    <div className={`flex justify-between`}>
                      <span className={`md:text-[24px] text-[21px] truncate`}>
                        {getName(locale, year.attributes)}
                      </span>
                      {part.attributes.href ? (
                        <a
                          target={'_blank'}
                          href={part.attributes.href}
                          className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
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
                      ) : (<a
                        download
                        target={'_blank'}
                        href={api + part.attributes.url}
                        className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
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
                      </a>)}
                    </div>
                    {part.attributes.date_provision && (
                      <div>
                        <span className={`text-[16px] text-[#AFACAC]`}>
                          {getDate(part.attributes.date_provision)}
                        </span>
                      </div>
                    )}
                  </div>
                ))}

                {year?.attributes?.href && (<div key={year?.attributes.createdAt} className={`w-full h-full`}>
                  <div className={`flex justify-between`}>
                      <span className={`md:text-[24px] text-[21px] truncate`}>
                        {getName(locale, year.attributes)}
                      </span>
                    {year.attributes.href ? (
                      <a
                        target={'_blank'}
                        href={year.attributes.href}
                        className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
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
                    ) : (<a
                      download
                      target={'_blank'}
                      href={api + year.attributes.href}
                      className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
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
                    </a>)}
                  </div>
                  {year.attributes.date_provision && (
                    <div>
                        <span className={`text-[16px] text-[#AFACAC]`}>
                          {getDate(year.attributes.date_provision)}
                        </span>
                    </div>
                  )}
                </div>)}
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
