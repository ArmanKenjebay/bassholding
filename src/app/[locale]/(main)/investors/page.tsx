import NextImage from 'next/image'
import wallImage from '@/../public/images/company_profile.webp'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

type Props = {
  params: { locale: Locale }
}
export default async function Investors({ params: { locale } }: Props) {
  const dictionary = await getDictionary(locale)

  return (
    <div className={`flex flex-col h-full xl:mb-10 mb-5`}>
      <div className={`w-full`}>
        <NextImage
          className={`w-full xl:h-[484px] lg:h-[280px] md:h-[180px] sm:h-[140px] h-[121px] object-cover`}
          width={1440}
          height={484}
          src={wallImage.src}
          alt="bassholding image"
        />
      </div>
    </div>
  )
}
