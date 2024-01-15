import Image from 'next/image'
import { Image as ImageNext } from '@nextui-org/image'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import { Divider } from '@nextui-org/divider'

import news1 from '@/../public/images/news1.webp'
import news1_mobile from '@/../public/images/news1_mobile.webp'
import homeImg from '@/../public/images/home-page.webp'
import homeImg2 from '@/../public/images/home-page-2.webp'
import DirectionCard from '@/app/[locale]/_components/DirectionCard'
import Marquee from '@/app/[locale]/_components/Marquee'
import NewsLine from '@/app/[locale]/_components/NewsLine'
import getDirections from '@/app/[locale]/_variables/direction-cards'
import HomeBackgroundImage from '@/app/[locale]/_components/HomeBackgroundImage'
import { getMockNews, getNews } from '@/get-api'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'
import MotionDiv from '@/app/[locale]/_components/MotionDiv'
import Reveal from '@/app/[locale]/_components/Reveal'
import DivTransform from '@/app/[locale]/_components/DivTransform'

type Props = {
  params: { locale: Locale }
}

export default async function Home({ params: { locale } }: Props) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const dictionary = await getDictionary(locale)
  const news = await getMockNews().then((res) => res)
  const cards = getDirections()

  const response = await fetch(
    `${api}/news?locale=${locale}&populate=*&sort=createdAt:desc`,
    {
      headers,
      cache: 'no-cache',
      next: { revalidate: 100 },
    },
  )

  let post: any | undefined = undefined

  if (response.ok) {
    post = await response.json()
  }

  return (
    <section className="flex flex-col w-full h-full">
      <PageWrapper>
        <MotionDiv>
          <div className="lg:min-h-[600px] flex justify-between sm:flex-row flex-col-reverse gap-y-5 sm:mb-0 mb-8">
            <DivTransform
              transition={{ duration: 1, delay: 1 }}
              viewport={{ amount: 0.25 }}
              className="flex flex-col gap-y-3 justify-end px-5 sm:pb-10 lg:pb-24 sm:px-6 md:px-[60px]"
            >
              <ImageNext
                as={Image}
                className="lg:w-[336px] lg:h-[83px] w-[168px] h-[42px]"
                src={homeImg2.src}
                width={447}
                height={111}
                radius="full"
                alt={'bassholding image'}
              />
              <div className="flex flex-col gap-y-1">
                <span className="text-2xl lg:text-5xl font-[250]">
                  BASS HOLDING
                </span>
                <span className=" tracking-wide text-sm lg:text-3xl font-[250]">
                  {dictionary.main['text-under-photo']}
                </span>
              </div>
            </DivTransform>
            <div className="flex h-full">
              <HomeBackgroundImage
                image={homeImg}
                width={1800}
                height={2120}
                className={`w-full h-[294px] sm:h-[380px] sm:w-[210px] md:h-[480px] md:w-[300px] lg:h-[640px] lg:w-[340px] xl:w-[564px] xl:h-[700px]`}
              >
                {[
                  dictionary.main['text-build'],
                  dictionary.main['text-develop'],
                  dictionary.main['text-inspire'],
                ].map((text, index) => (
                  <Reveal
                    transition={{ duration: 1, delay: 1.75 + index * 0.5 }}
                    viewport={{ amount: 0 }}
                    className="lg:text-4xl xl:text-4xl font-[250]"
                  >
                    {text}
                  </Reveal>
                ))}
              </HomeBackgroundImage>
            </div>
          </div>
        </MotionDiv>

        <div className="sm:mb-[35px] mb-5">
          <Marquee>
            <span className="text-4xl mx-4">HR TECH</span>
            <span className="text-4xl mx-4">FINTECH</span>
            <span className="text-4xl mx-4">ENERGY</span>
            <span className="text-4xl mx-4">MINING</span>
            <span className="text-4xl mx-4">HR TECH</span>
            <span className="text-4xl mx-4">FINTECH</span>
            <span className="text-4xl mx-4">ENERGY</span>
            <span className="text-4xl mx-4">MINING</span>
            <span className="text-4xl mx-4">HR TECH</span>
            <span className="text-4xl mx-4">FINTECH</span>
            <span className="text-4xl mx-4">ENERGY</span>
            <span className="text-4xl mx-4">MINING</span>
            <span className="text-4xl mx-4">HR TECH</span>
            <span className="text-4xl mx-4">FINTECH</span>
            <span className="text-4xl mx-4">ENERGY</span>
            <span className="text-4xl mx-4">MINING</span>
          </Marquee>
        </div>

        <MotionDiv>
          <div className="sm:px-5 xl:px-[60px] px-5 sm:mb-10 mb-5">
            <div className="flex justify-center sm:flex-row flex-col">
              {cards.map((card) => (
                <DirectionCard
                  key={card.title}
                  locale={locale}
                  dictionary={dictionary}
                  image={card.image}
                  title={card.title}
                  desc={card.desc}
                  chips={card.chips}
                  link={card.link}
                  className="app-img-box"
                />
              ))}
            </div>
          </div>
        </MotionDiv>

        <MotionDiv>
          <div className="sm:px-5 xl:px-[60px] px-5 sm:mb-10 mb-5">
            <span className="lg:text-4xl md:text-3xl text-2xl font-[250]">
              {dictionary.news.title}
            </span>
            {post && post.data.length > 0
              ? post.data.map((n: any, index: number) => (
                  <DivTransform
                    key={index}
                    viewport={{ amount: 0.25 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {index <= 3 && (
                      <>
                        <Divider className="my-2 bg-white" />
                        <div className={`py-[27px]`}>
                          <NewsLine
                            locale={locale}
                            id={n.id.toString()}
                            content={n.attributes.title}
                            date={n.attributes.date}
                            chip={n.attributes.chips}
                          />
                        </div>
                      </>
                    )}
                  </DivTransform>
                ))
              : news.map((n, index) => (
                  <DivTransform
                    key={index}
                    viewport={{ amount: 0.25 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {index <= 3 && (
                      <>
                        <Divider className="my-2 bg-white" />
                        <div className={`py-[27px]`}>
                          <NewsLine
                            locale={locale}
                            id={n.id}
                            content={n.title[locale]}
                            date={n.date[locale]}
                            chip={n.chips.map((c) => c[locale])[0]}
                          />
                        </div>
                      </>
                    )}
                  </DivTransform>
                ))}
          </div>
        </MotionDiv>

        <div className="sm:px-5 xl:px-[60px] px-5 sm:mb-10 w-full h-full flex justify-center mb-10">
          <ImageNext
            as={Image}
            src={news1.src}
            srcSet={`${news1_mobile} 640w, ${news1} 1024w`}
            sizes="(max-width: 640px) 100vw, 1024px"
            width={1965}
            height={615}
            radius={`none`}
            className={`w-[320px] h-[104px] sm:h-full sm:w-full xl:h-[610px] rounded-[40px] sm:rounded-3xl object-contain`}
            alt="bassholding image"
          />
        </div>
      </PageWrapper>
    </section>
  )
}
