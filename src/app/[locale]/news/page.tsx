import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import newsImage from '@/../public/news.jpg'
import { Image as ImageNext } from '@nextui-org/image'
import React from 'react'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.news.title,
    description: dictionary.news.description,
  }
}

export default async function News({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex justify-between sm:flex-row flex-col-reverse gap-y-5 sm:mb-10 mb-5">
        <div className="flex flex-col sm:mt-20 py-5 sm:px-2 px-5 sm:static absolute z-50">
          <span>
            <span className="text-primary-gold">Наши новости и обновления</span>{' '}
            - это история нашего роста и развития.
          </span>
          <br />
          <span>
            Мы гордимся тем, что достигли и гордимся тем, куда нас ведет наш
            путь.
          </span>
        </div>

        <div className="flex xl:w-[570px] lg:w-[370px] md:w-[310px] sm:w-[270px] w-full">
          <div className="sm:h-full h-[294px] overflow-hidden relative right-0">
            <ImageNext
              fetchPriority="high"
              src={newsImage.src}
              radius="none"
              className="filter sm:brightness-75 brightness-[.3] z-10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
