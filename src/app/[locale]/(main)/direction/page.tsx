import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import DirectionCard from '@/app/[locale]/_components/DirectionCard'
import getDirections from '@/app/[locale]/_variables/direction-cards'

export default async function Direction({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  const cards = [...getDirections()]

  return (
    <>
      <div className="sm:px-16 md:px-24 lg:px-32 xl:px-52 px-5 py-8 flex justify-center items-center text-center sm:mb-10 mb-5">
        <span
          className="2xl:text-[64px] font-[250] lg:text-4xl md:text-3xl sm:text-2xl text-xl"
          style={{ lineHeight: '92%' }}
        >
          <span className="text-primary-gold">
            {dictionary.direction['main_aim-1']}
          </span>
          {dictionary.direction['main_aim-2']}
        </span>
      </div>
      <div className="xl:px-[54px] sm:px-5 px-2 lg:mb-40 sm:mb-10 mb-5">
        <div className="flex sm:flex-row flex-col">
          {cards.map((card, index) => (
            <DirectionCard
              locale={locale}
              key={card.title}
              {...card}
              dictionary={dictionary}
              className="app-img-box"
              classNameImage="filter brightness-50 ease-in-out duration-200 scale-150 -translate-y-6 object-cover grayscale hover:scale-110 hover:grayscale-0 hover:brightness-[.8]"
            />
          ))}
        </div>
      </div>
    </>
  )
}
