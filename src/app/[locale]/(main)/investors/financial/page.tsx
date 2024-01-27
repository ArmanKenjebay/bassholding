import React from 'react'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import TopsAccordion from '@/app/[locale]/_components/TopsAccordion'
import FinancialCalendar from '@/app/[locale]/_components/FinancialCalendar'

export default async function Financial({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const corpAdmin = [
    {
      label: 'Кодекс корпоративного управления',
      date: '26 ноября, 2022',
    },
    {
      label: 'Устав',
      date: '3 февраля, 2022',
    },
    {
      label: 'Изменения в Устав компании',
      date: '20 сентября, 2022',
    },
  ]

  return (
    <div className={`flex flex-col h-full xl:mb-10 mb-5`}>
      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <div className={`flex flex-col`}>
          <span
            className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] mb-5`}
          >
            КОРПОРАТИВНОЕ УПРАВЛЕНИЕ
          </span>

          <div className={`flex flex-wrap gap-7`}>
            {corpAdmin.map((el) => (
              <div
                key={el.label}
                className={`xl:w-[300px] lg:w-[270px] md:w-[250px] sm:w-[230px] xl:h-[235px] w-full h-[125px] xl:rounded-2xl rounded-3xl flex flex-col justify-between bg-[#262626] p-5`}
              >
                <div className={`flex justify-between`}>
                  <span className={`xl:text-[24px] sm:text-[18px] text-[16px]`}>
                    {el.label}
                  </span>
                  <div
                    className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
                  >
                    <span className={`block group-hover:hidden`}>&#8594;</span>
                    <span className={`hidden group-hover:block`}>&#8599;</span>
                  </div>
                </div>
                <div>
                  <span className={`text-[16px] text-[#AFACAC]`}>
                    {el.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] font-thin mb-5`}
        >
          СОВЕТ ДИРЕКТОРОВ
        </span>

        <TopsAccordion dictionary={dictionary} />
      </div>

      <div
        className={`xl:py-[35px] xl:px-[60px] lg:px-[40px] md:px-[32px] px-[20px] flex flex-col sm:mb-10 mb-5`}
      >
        <span
          className={`text-primary-gold xl:text-[48px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[21px] font-thin mb-5`}
        >
          КОРПОРАТИВНЫЙ КАЛЕНДАРЬ 2024
        </span>

        <FinancialCalendar />
      </div>
    </div>
  )
}
