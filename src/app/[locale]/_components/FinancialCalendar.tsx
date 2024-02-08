'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FinancialCalendar({ dictionary }: { dictionary: any }) {
  const [isVisible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible((prevState) => !prevState)
  }

  const corpCalendar = [
    {
      month: 'ФЕВРАЛЬ',
      content: [
        {
          date: '',
          text: 'Утверждение Стратегии развития ТОО «BASS Holding» на 2024 – 2028 годы',
        },
        {
          date: '',
          text: 'Запуск золотообогатительной фабрики на месторождении Ушшокы',
        },
      ],
    },
    {
      month: 'МАРТ',
      content: [
        {
          date: '',
          text: 'Получение ТОО «BASS Gold» займа в Банке второго уровня',
        },
        {
          date: '',
          text:
            'Утверждение и публикация аудированной (консолидированной и отдельной) годовой финансовой отчетности ТОО «BASS Gold» за 2023 год на сайтах Депозитария финансовой отчетности и \n' +
            'АО «Казахстанская фондовая биржа»',
        },
        {
          date: '',
          text:
            'Утверждение и публикация аудированной годовой финансовой отчетности ТОО «Block One Company» за 2023 год на сайтах Депозитария финансовой отчетности и \n' +
            'АО «Казахстанская фондовая биржа»',
        },
        {
          date: '',
          text: 'Распределение чистого дохода ТОО «BASS Gold» за 2023 год и выплата дивидендов его участникам',
        },
        {
          date: '',
          text: 'Четвертый выпуск облигаций ТОО «BASS Gold»',
        },
      ],
    },
    {
      month: 'АПРЕЛЬ',
      content: [
        {
          date: '',
          text: 'Погашение третьего выпуска облигаций ТОО «BASS Gold»',
        },
      ],
    },
    {
      month: 'Май',
      content: [
        {
          date: '',
          text: 'Погашение первого выпуска облигаций ТОО «BASS Gold»',
        },
        {
          date: '',
          text: 'Определение аудиторской организации для проведения аудита полугодовой финансовой отчетности ТОО «BASS Gold»',
        },
      ],
    },
    {
      month: 'Июнь',
      content: [
        {
          date: '',
          text: 'Избрание членов Ревизионной комиссии ТОО «BASS Gold»',
        },
      ],
    },
    {
      month: 'Июль',
      dates: [],
      content: [
        {
          date: '',
          text: 'Утверждение и публикация годового отчета ТОО «BASS Gold» на сайтах АО «Казахстанская фондовая биржа» и Холдинга ',
        },
      ],
    },
    {
      month: 'Август',
      content: [
        {
          date: '',
          text: 'Информация о суммарном размере вознаграждения членов исполнительного органа ТОО «BASS Gold» по итогам года на сайте АО «Казахстанская фондовая биржа»',
        },
        {
          date: '',
          text: 'Получение ТОО «BASS Gold» лицензии на разработку за контрактной территории месторождения Ушшокы',
        },
        {
          date: '',
          text: 'Получение ТОО «Block One Company» лицензии на добычу ТПИ на месторождении Чинасыл-Сай',
        },
      ],
    },
    {
      month: 'Сентябрь',
      content: [
        {
          date: '',
          text: 'Реорганизация ТОО «BASS Gold» путем присоединения к нему ТОО «Block One Company»',
        },
      ],
    },
    {
      month: 'Октябрь',
      content: [
        {
          date: '',
          text: 'Погашение второго выпуска облигаций ТОО «BASS Gold»',
        },
      ],
    },
    {
      month: 'Ноябрь',
      content: [
        {
          date: '',
          text:
            'Определение аудиторской организации для проведения аудита годовой финансовой отчетности ТОО «BASS Gold» \n' +
            'за 2024 год ',
        },
      ],
    },
    {
      month: 'Декабрь',
      content: [
        {
          date: '',
          text: 'Получение международного кредитного рейтинга ',
        },
        {
          date: '',
          text: 'Запуск золотообогатительной фабрики на месторождении Чинасыл-Сай',
        },
      ],
    },
    {
      month: 'Периодические события',
      content: [
        {
          date: '',
          text: 'Выплаты купонного вознаграждения по первому выпуску облигаций ТОО «BASS Gold»',
        },
        {
          date: '',
          text: 'Выплаты купонного вознаграждения по второму выпуску облигаций ТОО «BASS Gold»',
        },
        {
          date: '',
          text: 'Утверждение и публикация ежеквартальной финансовой отчетности ТОО «BASS Gold» на сайтах Депозитария финансовой отчетности и АО «Казахстанская фондовая биржа» ',
        },
        {
          date: '',
          text:
            'Раскрытие информации об аффилированных лицах \n' +
            'ТОО «BASS Gold» на сайте АО «Казахстанская фондовая биржа»  ',
        },
        {
          date: '',
          text: 'Опубликование решений Общего собрания участников ТОО «BASS Gold» ',
        },
      ],
    },
  ]

  return (
    <div className={`flex flex-col snap-mandatory snap-y`}>
      <div className={`mb-5 flex justify-end`}>
        <span
          onClick={handleVisible}
          className={`text-primary-gold text-[24px] duration-200 ease-in-out underline cursor-pointer hover:opacity-95`}
        >
          {isVisible ? dictionary.collapse : dictionary.expand}
        </span>
      </div>

      {isVisible
        ? corpCalendar.map((calendar) => (
            <motion.div
              key={calendar.month}
              className={`flex gap-x-20 gap-y-10 justify-between mb-10 snap-center`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <div className={`flex flex-1 border-t py-10`}>
                <span className={`text-[48px]`}>{calendar.month}</span>
              </div>

              <div className={`flex flex-col flex-1 border-t py-10 gap-y-10`}>
                {calendar.content.map((content, index) => (
                  <div key={index} className={`relative`}>
                    <span
                      className={`text-[48px] text-primary-gold absolute -left-1/3`}
                    >
                      {content.date ? content.date : ''}
                    </span>
                    <span className={`text-[24px]`}>{content.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        : corpCalendar.map((calendar, index) => {
            if (index === 0) {
              return (
                <motion.div
                  key={calendar.month}
                  className={`flex gap-x-20 gap-y-10 justify-between mb-10 snap-center`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                >
                  <div className={`flex flex-1 border-t py-10`}>
                    <span className={`text-[48px]`}>{calendar.month}</span>
                  </div>

                  <div
                    className={`flex flex-col flex-1 border-t py-10 gap-y-10`}
                  >
                    {calendar.content.map((content, index) => (
                      <div key={index} className={`relative`}>
                        <span
                          className={`text-[48px] text-primary-gold absolute -left-1/3`}
                        >
                          {content.date ? content.date : ''}
                        </span>
                        <span className={`text-[24px]`}>{content.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            }
          })}
    </div>
  )
}
