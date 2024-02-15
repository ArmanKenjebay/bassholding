'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Locale } from '@/i18n-config'

export default function FinancialCalendar({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: any
}) {
  const [isVisible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible((prevState) => !prevState)
  }

  const corpCalendar = [
    {
      month: 'ФЕВРАЛЬ',
      monthEn: 'FEBRUARY',
      monthKK: 'АҚПАН',
      content: [
        {
          date: [],
          text: 'Утверждение Стратегии развития ТОО «BASS Holding» на 2024 – 2028 годы',
          textEn:
            'Approval of the Development Strategy of BASS Holding LLP for 2024-2028 ',
          textKK:
            '«BASS Holding» ЖШС 2024 – 2028 жылдарға арналған даму стратегиясын бекітуі ',
        },
        {
          date: [],
          text: 'Запуск золотообогатительной фабрики на месторождении Ушшокы',
          textEn: 'Launch of gold processing plant at Ushshoky deposit ',
          textKK: 'Үшшоқы кен орнында алтын байыту фабрикасын іске қосу',
        },
      ],
    },
    {
      month: 'МАРТ',
      monthEn: 'MARCH',
      monthKK: 'НАУРЫЗ',
      content: [
        {
          date: [],
          text: 'Получение ТОО «BASS Gold» займа в Банке второго уровня',
          textEn: '“BASS Gold” LLP obtaining a loan from a second-tier bank ',
          textKK: '«BASS Gold» ЖШС екінші деңгейдегі банктен қарыз алуы',
        },
        {
          date: [],
          text:
            'Утверждение и публикация аудированной (консолидированной и отдельной) годовой финансовой отчетности ТОО «BASS Gold» за 2023 год на сайтах Депозитария финансовой отчетности и \n' +
            'АО «Казахстанская фондовая биржа»',
          textEn:
            'Approval and publication of audited (consolidated and separate) annual financial statements of “BASS Gold” LLP for 2023 on the Depository of Financial Statements and Kazakhstan Stock Exchange JSC websites',
          textKK:
            '«BASS Gold» ЖШС-нің 2023 жылғы аудиттелген (шоғырландырылған және жекелеген) жылдық қаржылық есептілігін Қаржылық есептілік депозитарийінің және «Қазақстан қор биржасы» АҚ сайттарында бекіту және жариялауы',
        },
        {
          date: [],
          text:
            'Утверждение и публикация аудированной годовой финансовой отчетности ТОО «Block One Company» за 2023 год на сайтах Депозитария финансовой отчетности и \n' +
            'АО «Казахстанская фондовая биржа»',
          textEn:
            'Approval and publication of the audited annual financial statements of Block One Company LLP for 2023 on the  Depository of Financial Statements and Kazakhstan Stock Exchange JSC (KASE) websites',
          textKK:
            '«Block One Company» ЖШС-нің 2023 жылғы аудиттелген жылдық қаржылық есебін Қаржылық есептілік депозитарийінің және «Қазақстан қор биржасы» АҚ сайттарында бекіту және жариялауы',
        },
        {
          date: [],
          text: 'Распределение чистого дохода ТОО «BASS Gold» за 2023 год и выплата дивидендов его участникам',
          textEn:
            'Distribution of net income of “BASS Gold” LLP for 2023 and payment of dividends to its participants ',
          textKK:
            '2023 жылғы «BASS Gold» ЖШС таза кірісін бөлу және оның қатысушыларына дивидендтер төлеуі',
        },
        {
          date: [],
          text: 'Четвертый выпуск облигаций ТОО «BASS Gold»',
          textEn: 'The fourth issue of “BASS Gold” LLP bonds',
          textKK: '«BASS Gold» ЖШС облигацияларының төртінші шығарылымы',
        },
      ],
    },
    {
      month: 'АПРЕЛЬ',
      monthEn: 'APRIL',
      monthKK: 'СӘУІР',
      content: [
        {
          date: [],
          text: 'Погашение третьего выпуска облигаций ТОО «BASS Gold»',
          textEn: 'Redemption of the third bond issue of “BASS Gold” LLP',
          textKK: '«BASS Gold» ЖШС облигацияларының үшінші шығарылымын өтеуі',
        },
      ],
    },
    {
      month: 'МАЙ',
      monthEn: 'MAY',
      monthKK: 'МАМЫР',
      content: [
        {
          date: [],
          text: 'Погашение первого выпуска облигаций ТОО «BASS Gold»',
          textEn: 'Redemption of the first bond issue of “BASS Gold” LLP ',
          textKK: '«BASS Gold» ЖШС облигацияларының бірінші шығарылымын өтеуі',
        },
        {
          date: [],
          text: 'Определение аудиторской организации для проведения аудита полугодовой финансовой отчетности ТОО «BASS Gold»',
          textEn:
            'Selection of an audit firm to conduct the audit of the semi-annual financial reports of “BASS Gold” LLP',
          textKK:
            '«BASS Gold» ЖШС-нің жартыжылдық қаржылық есептілігіне аудит жүргізу үшін аудиторлық ұйымды айқындауы',
        },
      ],
    },
    {
      month: 'ИЮНЬ',
      monthEn: 'JUNE',
      monthKK: 'МАУСЫМ',
      content: [
        {
          date: [],
          text: 'Избрание членов Ревизионной комиссии ТОО «BASS Gold»',
          textEn:
            'Election of members to the Audit Committee of “BASS Gold” LLP.',
          textKK: '«BASS Gold» ЖШС ревизия комиссиясының мүшелерін сайлауы',
        },
      ],
    },
    {
      month: 'ИЮЛЬ',
      monthEn: 'JULY',
      monthKK: 'ШІЛДЕ',
      dates: [],
      content: [
        {
          date: [],
          text: 'Утверждение и публикация годового отчета ТОО «BASS Gold» на сайтах АО «Казахстанская фондовая биржа» и Холдинга ',
          textEn:
            "Approval and publication of the annual report of “BASS Gold” LLP on the Kazakhstan Stock Exchange JSC (KASE) and the Holding's websites ",
          textKK:
            '«BASS Gold» ЖШС жылдық есебін «Қазақстан қор биржасы» АҚ-да және Холдингтің сайтында бекіту және жариялауы',
        },
      ],
    },
    {
      month: 'АВГУСТ',
      monthEn: 'AUGUST',
      monthKK: 'ТАМЫЗ',
      content: [
        {
          date: [],
          text: 'Информация о суммарном размере вознаграждения членов исполнительного органа ТОО «BASS Gold» по итогам года на сайте АО «Казахстанская фондовая биржа»',
          textEn:
            'Information on the total amount of remuneration of members of the executive body of “BASS Gold” LLP at the end of the year on the Kazakhstan Stock Exchange JSC (KASE) website',
          textKK:
            'Жыл қорытындысы бойынша «BASS Gold» ЖШС атқарушы органы мүшелеріне сыйақының жиынтық мөлшері туралы ақпарат «Қазақстан қор биржасы» АҚ сайтында жариялануы',
        },
        {
          date: [],
          text: 'Получение ТОО «BASS Gold» лицензии на разработку за контрактной территории месторождения Ушшокы',
          textEn:
            '“BASS Gold” LLP obtained a license to develop the Ushshoky deposit outside the contract area ',
          textKK:
            '«BASS Gold» ЖШС Үшшоқы кен орнын келісімшарттық аумақтан тыс игеруге лицензия алуы',
        },
        {
          date: [],
          text: 'Получение ТОО «Block One Company» лицензии на добычу ТПИ на месторождении Чинасыл-Сай',
          textEn:
            '“Block One Company” LLP obtained a license for solid mineral extraction at Chinasyl-Sai field ',
          textKK:
            '«Block One Company» ЖШС Чинасыл-Сай кен орнында қатты пайдалы қазбаларды өндіруге лицензия алуы',
        },
      ],
    },
    {
      month: 'Сентябрь',
      monthEn: 'SEPTEMBER',
      monthKK: 'ҚЫРКҮЙЕК',
      content: [
        {
          date: [],
          text: 'Реорганизация ТОО «BASS Gold» путем присоединения к нему ТОО «Block One Company»',
          textEn:
            'Reorganization of BASS Gold LLP by merging Block One Company LLP into it',
          textKK:
            '«BASS Gold» ЖШС-не «Block One Company» ЖШС-ін қосу жолымен «BASS Gold» ЖШС-ін қайта ұйымдастыруы',
        },
      ],
    },
    {
      month: 'ОКТЯБРЬ',
      monthEn: 'OCTOBER',
      monthKK: 'ҚАЗАН',
      content: [
        {
          date: [],
          text: 'Погашение второго выпуска облигаций ТОО «BASS Gold»',
          textEn: 'Redemption of the second bond issue of “BASS Gold” LLP ',
          textKK: '«BASS Gold» ЖШС облигацияларының екінші шығарылымын өтеуі',
        },
      ],
    },
    {
      month: 'НОЯБРЬ',
      monthEn: 'NOVEMBER',
      monthKK: 'ҚАРАША',
      content: [
        {
          date: [],
          text:
            'Определение аудиторской организации для проведения аудита годовой финансовой отчетности ТОО «BASS Gold» \n' +
            'за 2024 год ',
          textEn:
            'Selection of an audit to conduct the audit of the annual financial statements of “BASS Gold” LLP for 2024',
          textKK:
            '«BASS Gold» ЖШС-нің 2024 жылғы жылдық қаржылық есептілігіне аудит жүргізу үшін аудиторлық ұйымды айқындауы',
        },
      ],
    },
    {
      month: 'ДЕКАБРЬ',
      monthEn: 'DECEMBER',
      monthKK: 'ЖЕЛТОҚСАН',
      content: [
        {
          date: [],
          text: 'Получение международного кредитного рейтинга ',
          textEn: 'Obtaining an international credit rating ',
          textKK: 'Халықаралық кредиттік рейтинг алуы',
        },
        {
          date: [],
          text: 'Запуск золотообогатительной фабрики на месторождении Чинасыл-Сай',
          textEn: 'Launch of gold processing plant at the Chinasyl-Sai deposit',
          textKK:
            'Чинасыл-Сай кен орнында алтын байыту фабрикасын іске қосылуы',
        },
      ],
    },
    {
      month: 'ПЕРИОДИЧЕСКИЕ СОБЫТИЯ',
      monthEn: 'Periodic corporate events \n',
      monthKK: 'Мерзімді корпоративтік оқиғалар ',
      content: [
        {
          date: ['20.01', '20.04'],
          text: 'Выплаты купонного вознаграждения по первому выпуску облигаций ТОО «BASS Gold»',
          textEn:
            'Coupon interest payments for the first bond issuance of “BASS Gold” LLP',
          textKK:
            '«BASS Gold» ЖШС облигацияларының бірінші шығарылымы бойынша купондық сыйақы төлеу',
        },
        {
          date: ['12.01', '12.04', '12.07', '12.10'],
          text: 'Выплаты купонного вознаграждения по второму выпуску облигаций ТОО «BASS Gold»',
          textEn:
            'Coupon interest payments for the second bond issuance of “BASS Gold” LLP',
          textKK:
            '«BASS Gold» ЖШС облигацияларының екінші шығарылымы бойынша купондық сыйақы төлеу',
        },
        {
          date: ['15.05', '15.07', '15.11'],
          text: 'Утверждение и публикация ежеквартальной финансовой отчетности ТОО «BASS Gold» на сайтах Депозитария финансовой отчетности и АО «Казахстанская фондовая биржа» ',
          textEn:
            'Approval and publication of quarterly financial statements of “BASS Gold” LLP on the Financial Reporting Depository and Kazakhstan Stock Exchange JSC (KASE)  websites',
          textKK:
            '«BASS Gold» ЖШС тоқсан сайынғы қаржылық есептілігін Қаржылық есептілік депозитарийінің және «Қазақстан қор биржасы» АҚ сайттарында бекіту және жариялау',
        },
        {
          date: ['31.01', '30.04', '31.07', '31.10'],
          text:
            'Раскрытие информации об аффилированных лицах \n' +
            'ТОО «BASS Gold» на сайте АО «Казахстанская фондовая биржа»  ',
          textEn:
            'Disclosure of information about affiliated parties of “BASS Gold” LLP on the Kazakhstan Stock Exchange JSC (KASE) website ',
          textKK:
            '«BASS Gold» ЖШС аффилиирленген тұлғалары туралы ақпаратты «Қазақстан қор биржасы» АҚ сайтында ашу',
        },
        {
          date: ['В течение года'],
          text: 'Опубликование решений Общего собрания участников ТОО «BASS Gold» ',
          textEn:
            'Publication of decisions of the General Meeting of “BASS Gold” LLP participants',
          textKK:
            '«BASS Gold» ЖШС қатысушыларының жалпы жиналысының шешімдерін жариялау',
        },
      ],
    },
  ]

  const getName = (
    index: number,
    field: 'month' | 'text',
    locale: Locale,
    subIndex: number = 0,
  ) => {
    switch (field) {
      case 'month':
        return corpCalendar[index][
          locale === 'ru' ? 'month' : locale === 'en' ? 'monthEn' : 'monthKK'
        ]
      case 'text':
        return corpCalendar[index].content[subIndex][
          locale === 'ru' ? 'text' : locale === 'en' ? 'textEn' : 'textKK'
        ]
    }
  }

  return (
    <div className={`flex flex-col snap-mandatory snap-y`}>
      <div className={`mb-5 flex justify-end`}>
        <span
          onClick={handleVisible}
          className={`text-primary-gold xl:text-[18px] lg:text-[16px] text-[12px] duration-200 ease-in-out underline cursor-pointer hover:opacity-95`}
        >
          {isVisible ? dictionary.collapse : dictionary.expand}
        </span>
      </div>

      {isVisible
        ? corpCalendar.map((calendar, index) => (
            <motion.div
              key={calendar.month}
              className={`flex gap-x-20 gap-y-10 justify-between mb-10 snap-center`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <div className={`flex flex-1 border-t py-10`}>
                <span
                  className={`xl:text-[28px] lg:text-[24px] text-[16px] inline-flex w-min`}
                >
                  {getName(index, 'month', locale)}
                </span>
              </div>

              <div className={`flex flex-col flex-1 border-t py-10 gap-y-20`}>
                {calendar.content.map((content, subIndex) => (
                  <div key={subIndex} className={`relative`}>
                    {content.date.length ? (
                      <div
                        className={`absolute left-[-35%] text-[24px] text-primary-gold grid grid-cols-2 gap-x-5`}
                      >
                        {content.date.map((el, index) => (
                          <span key={index} className={`flex flex-1`}>
                            {index % 2 !== 0 ||
                            index === content.date.length - 1
                              ? el
                              : el + ','}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                    <span
                      className={`xl:text-[20px] lg:text-[18px] text-[14px]`}
                    >
                      {getName(index, 'text', locale, subIndex)}
                    </span>
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
                    <span
                      className={`xl:text-[28px] lg:text-[24px] text-[16px]`}
                    >
                      {getName(index, 'month', locale)}
                    </span>
                  </div>

                  <div
                    className={`flex flex-col flex-1 border-t py-10 gap-y-20`}
                  >
                    {calendar.content.map((content, subIndex) => (
                      <div key={subIndex} className={`relative`}>
                        {content.date.length ? (
                          <div
                            className={`absolute left-[-35%] text-[24px] text-primary-gold grid grid-cols-2 gap-x-5`}
                          >
                            {content.date.map((el, index) => (
                              <span key={index} className={`flex flex-1`}>
                                {index % 2 !== 0 ||
                                index === content.date.length - 1
                                  ? el
                                  : el + ','}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <></>
                        )}
                        <span
                          className={`xl:text-[20px] lg:text-[18px] text-[14px]`}
                        >
                          {getName(index, 'text', locale, subIndex)}
                        </span>
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
