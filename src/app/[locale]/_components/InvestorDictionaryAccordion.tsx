'use client'

import { Accordion, AccordionItem } from '@nextui-org/accordion'
import IconPlus from '@/app/[locale]/_components/IconPlus'

export default function InvestorDictionaryAccordion({
  dictionary,
}: {
  dictionary: any
}) {
  const tops = [
    {
      title: dictionary.corporate_event_calendar.corporateInformation.title,
      content: [
        {
          subTitle:
            dictionary.corporate_event_calendar.corporateInformation.subTitle_1,
          text: [
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_1_text_1,
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_1_text_2,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.corporateInformation.subTitle_2,
          text: [
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_2_text_1,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.corporateInformation.subTitle_3,
          text: [
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_3_text_1,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.corporateInformation.subTitle_4,
          text: [
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_4_text_1,
            '',
            '',
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_4_text_2,
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_4_text_3,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.corporateInformation.subTitle_5,
          text: [
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_5_text_1,
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_5_text_2,
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_5_text_3,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.corporateInformation.subTitle_6,
          text: [
            dictionary.corporate_event_calendar.corporateInformation
              .subTitle_6_text_1,
          ],
        },
      ],
    },
    {
      title: 'Информация для инвесторов',
      content: [
        {
          subTitle:
            'Когда ТОО «BASS Gold» разместил облигации на бирже KASE?  ',
          text: [
            'Впервые в апреле 2023 года в торговой системе KASE состоялись специализированные торги по размещению 100 000 облигаций ТОО «BASS Gold» (ранее – ТОО «Форпост»).',
          ],
        },
        {
          subTitle: 'Где я могу узнать размер уставного капитала «BASS Gold»?',
          text: [
            'Данная информация представлена на нашем официальном сайте bassholding.com в разделе «Инвесторам», а также на сайте Казахстанской фондовой биржи KASE.',
          ],
        },
        {
          subTitle: 'Как приобрести облигации ТОО «BASS Gold»?',
          text: [
            'Приобрести облигации ТОО «BASS Gold» можно на сайте Казахстанской фондовой биржи KASE (альтернативная площадка KASE, категория «коммерческие облигации»).',
          ],
        },
        {
          subTitle: 'Какой объем реализованных облигаций ТОО «BASS Gold»? ',
          text: [
            'По состоянию на январь 2024 года реализовано более 100 000 облигаций ТОО «BASS Gold». ',
          ],
        },
        {
          subTitle:
            'Какой процент процент доходности облигаций ТОО «BASS Gold»? ',
          text: ['Процент доходности облигаций ТОО «BASS Gold» – 10,75%. '],
        },
        {
          subTitle: 'Кто является ответственным по работе с инвесторами? ',
          text: [
            'Оственное лицо по работе с инвесторами Канаев Берик',
            '',
            '',
            'Тел.: +7 707 223 34 48',
          ],
        },
        {
          subTitle: 'Какие планы по развитию ТОО «BASS Gold»? ',
          text: [
            'В 2024 году планируется запуск золотоизвлекательной фабрики на месторождении Ушшокы. ',
            'Результат – выход готовой продукции в сплаве Доре',
            'Для наращивания объема добычи и переработки твердых полезных ископаемых в 2023 году приобретено месторождение «Чинасыл-сай» в Алматинской области. Данная сделка позволила увеличить запасы золота на объем порядка 7 тонн.',
            'В 2024 году запланировано освоение месторождения с последующим строительством фабрики по переработке флотоконцентрата производственной мощностью 300 тыс. тонн руды в год с получением товарного свинцового и цинкового концентрата с содержанием золота, серебра и кадмия.',
          ],
        },
      ],
    },
    {
      title: 'Финансовая информация',
      content: [
        {
          subTitle: 'Когда заканчивается финансовый год компании?',
          text: [
            'Финансовый год ТОО «BASS Gold» совпадает с календарным и заканчивается 31 декабря.',
          ],
        },
        {
          subTitle: 'Где можно ознакомиться с отчетностью ТОО «BASS Gold»?\n',
          text: [
            'Квартальные отчеты опубликованы на нашем официальном сайте bassholding.com в разделе «Инвесторам». Также документы представлены на сайте Казахстанской фондовой биржи KASE.',
          ],
        },
        {
          subTitle:
            'Как я могу получить финансовую отчетность ТОО «BASS Gold» предыдущих годов?',
          text: [
            'Данную информацию Вы можете запросить в индивидуальном порядке. Ответственное лицо – Канаев Берик.',
            'Тел.: +7 707 223 34 48 ',
          ],
        },
        {
          subTitle: 'Какие ежегодные расходы ТОО «BASS Gold»?',
          text: [
            'Согласно финансовому прогнозу, ежегодные расходы ТОО «BASS Gold» составляют около 30 млн долларов США. ',
          ],
        },
      ],
    },
    {
      title: 'Общая информация: ',
      content: [
        {
          subTitle:
            'Какой процент доли участия ТОО «BASS Gold» в уставном капитале Группы компаний Bass Holding? ',
          text: [
            'В сентябре 2023 года Министерством промышленности и строительства Республики Казахстан согласован переход 100% доли участия в уставном капитале ТОО «BASS Gold» (ранее – ТОО «Форпост»), принадлежащей Садвакасову Ч.М. (50%) и Тасбулатову Е.Т. (50%), в пользу ТОО «BASS Holding». Отмечаем, что доли участия в уставном капитале ТОО «BASS Holding» также принадлежат Садвакасову Ч.М. и Тасбулатову Е.Т. в равных долях.',
            'Таким образом подтверждаем приверженность лучшим стандартам корпоративного управления с целью обеспечения прозрачности принимаемых решений и открытости перед инвесторами и партнерами группы компаний BASS Holding.',
          ],
        },
        {
          subTitle: 'Ключевые бизнес-аббревиатуры',
          text: [
            'EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) – финансовый показатель, который измеряет прибыль компании до учета процентов по займам, налогов, амортизации и расходов на погашение долгов.',
            'ROA (Return on Assets) – показатель эффективности использования активов компании',
            'ROE (Return on Equity) – показатель доходности собственного капитала компании.',
          ],
        },
      ],
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
      {tops.map((el, index) => (
        <AccordionItem
          indicator={<IconPlus />}
          key={el.title + index}
          title={el.title}
          classNames={{
            title: 'hover:text-primary-gold duration-200 ease-in-out',
          }}
        >
          {el.content.map((sub, subIndex) => (
            <Accordion
              key={sub.subTitle}
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
              <AccordionItem
                key={sub.subTitle + subIndex}
                title={sub.subTitle}
                classNames={{
                  title:
                    'hover:text-primary-gold duration-200 ease-in-out opacity-90',
                }}
              >
                {sub.text.map((t, tIndex) => (
                  <span
                    key={sub.subTitle + tIndex}
                    className={`flex flex-col mb-2 last:mb-0 opacity-80`}
                  >
                    {t}
                  </span>
                ))}
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
