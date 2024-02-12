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
      title: dictionary.corporate_event_calendar.investorInfo.title,
      content: [
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_1,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_1_text_1,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_2,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_2_text_1,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_3,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_3_text_1,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_4,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_4_text_1,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_5,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_5_text_1,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_6,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_6_text_1,
            dictionary.corporate_event_calendar.investorInfo.subTitle_6_text_2,
            dictionary.corporate_event_calendar.investorInfo.subTitle_6_text_3,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_7,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_7_text_1,
          ],
        },
        {
          subTitle: dictionary.corporate_event_calendar.investorInfo.subTitle_8,
          text: [
            dictionary.corporate_event_calendar.investorInfo.subTitle_8_text_1,
            dictionary.corporate_event_calendar.investorInfo.subTitle_8_text_2,
            dictionary.corporate_event_calendar.investorInfo.subTitle_8_text_3,
            dictionary.corporate_event_calendar.investorInfo.subTitle_8_text_4,
            dictionary.corporate_event_calendar.investorInfo.subTitle_8_text_5,
          ],
        },
      ],
    },
    {
      title: dictionary.corporate_event_calendar.financialInformation.title,
      content: [
        {
          subTitle:
            dictionary.corporate_event_calendar.financialInformation.subTitle_1,
          text: [
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_1_text_1,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.financialInformation.subTitle_2,
          text: [
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_2_text_1,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.financialInformation.subTitle_3,
          text: [
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_3_text_1,
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_3_text_2,
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_3_text_3,
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_3_text_4,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.financialInformation.subTitle_4,
          text: [
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_4_text_1,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.financialInformation.subTitle_5,
          text: [
            dictionary.corporate_event_calendar.financialInformation
              .subTitle_5_text_1,
          ],
        },
      ],
    },
    {
      title: dictionary.corporate_event_calendar.generalInformation.title,
      content: [
        {
          subTitle:
            dictionary.corporate_event_calendar.generalInformation.subTitle_1,
          text: [
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_1_text_1,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.generalInformation.subTitle_2,
          text: [
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_2_text_1,
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_2_text_2,
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_2_text_3,
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_2_text_4,
          ],
        },
        {
          subTitle:
            dictionary.corporate_event_calendar.generalInformation.subTitle_3,
          text: [
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_3_text_1,
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_3_text_2,
            dictionary.corporate_event_calendar.generalInformation
              .subTitle_3_text_3,
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
