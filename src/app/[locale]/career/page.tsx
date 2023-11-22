import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import NextImage from 'next/image'
import { Image } from '@nextui-org/image'
import careerImage from '@/../public/images/career.webp'
import careerImage1 from '@/../public/images/career1.webp'
import careerImage2 from '@/../public/images/career2.webp'
import careerImage3 from '@/../public/images/career3.webp'
import careerImage4 from '@/../public/images/career4.webp'
import { Divider } from '@nextui-org/divider'
import NewsLine from '@/app/[locale]/_components/NewsLine'
import React from 'react'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.career.title,
    description: dictionary.career.description,
  }
}

export default async function Career({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const careers = [
    {
      text: 'Тестирование по личностно-деловым компетенциям',
      content:
        'Мы даем каждому сотруднику возможность определить свои сильные стороны и области для улучшения. После тестирования, вы получите полную коуч-сессию от наших ведущих экспертов, которые помогут вам разработать стратегию для своего личного и профессионального роста.',
      image: careerImage1,
    },
    {
      text: 'HR-среда',
      content:
        'У нас есть 1,5-часовые групповые коуч-сессии, где наши HR-эксперты помогут вам улучшить свои деловые компетенции и навыки. Это отличная возможность для роста в коллективе и обмена опытом с коллегами.',
      image: careerImage2,
    },
    {
      text: 'Изучение английского языка',
      content:
        'Мы предоставляем нашим сотрудникам возможность повышения своего уровня английского языка. 2 раза в неделю, во время рабочего дня, вы сможете учить и совершенствовать свои навыки владения английским языком.',
      image: careerImage3,
    },
    {
      text: 'Повышение квалификации',
      content:
        'Мы поддерживаем профессиональное и личностное развитие наших сотрудников. У нас есть разнообразные программы для повышения квалификации, позволяющие вам развиваться в своей области и достигать новых высот.',
      image: careerImage4,
    },
  ]

  const positions = [
    {
      content: 'Продакт менеджер',
      chip: 'PINCODE',
    },
    {
      content: 'Специалист по кадровому делопроизводству',
      chip: 'BASS Holding',
    },
    {
      content: 'Офис менеджер',
      chip: 'BASS Holding',
    },
  ]

  return (
    <section className="flex flex-col">
      <div className="mt-20">
        <div className="sm:mb-10 mb-5">
          <div className="relative w-full h-[294px] sm:h-[380px] md:h-[480px] lg:h-[540px] xl:h-[620px] 2xl:h-[660px]">
            <Image
              priority
              as={NextImage}
              radius="none"
              src={careerImage.src}
              width={careerImage.width}
              height={careerImage.height}
              alt={'bassholding career'}
              className="filter brightness-50 w-full h-full object-cover object-bottom"
              classNames={{
                wrapper: 'w-full h-full',
              }}
            />
            <span className="z-50 tracking-widest absolute lg:bottom-20 bottom-5 left-3 font-gilroy xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Люди — главный актив компании.
            </span>
          </div>
        </div>

        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="sm:w-3/4 xl:w-1/2 py-3 w-full">
            <span className="text-base md:text-4xl text-primary-gold tracking-widest">
              Мы предоставляем комфортную среду и поддерживаем развитие наших
              людей.
            </span>
          </div>
        </div>

        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <div className="flex h-full flex-col gap-y-14">
            {careers.map(({ text, image, content }) => (
              <div
                key={text}
                className="flex h-full lg:gap-x-20 md:gap-x-14 sm:gap-x-10 gap-y-3 sm:odd:flex-row sm:even:flex-row-reverse flex-col justify-between items-center"
              >
                <div className="relative overflow-hidden w-full h-full">
                  <span className="z-20 absolute flex w-full items-center justify-center h-full text-base lg:text-lg xl:text-xl text-center">
                    {text}
                  </span>
                  <Image
                    as={NextImage}
                    width={image.width}
                    height={image.height}
                    src={image.src}
                    alt={text}
                    className="z-10 w-full h-full  object-cover rounded-[30px] md:rounded-[50px]  filter brightness-[.35] grayscale"
                    classNames={{
                      wrapper: 'w-full h-full',
                    }}
                  />
                </div>
                <div>
                  <span className="text-sm lg:text-base xl:text-lg">
                    {content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:px-5 px-2 sm:mb-10 mb-5">
          <span className="lg:text-4xl md:text-3xl text-2xl">
            {dictionary.career.open_positions}
          </span>
          {positions.map((n, index) => (
            <div key={index}>
              {index < positions.length && (
                <Divider className="my-2 bg-white" />
              )}
              <NewsLine {...n} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
