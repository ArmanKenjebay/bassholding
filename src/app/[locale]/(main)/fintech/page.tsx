import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Image } from '@nextui-org/image'
import fintechImage from '@/../public/images/fintech.webp'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.fintech.title,
    description: dictionary.fintech.title,
  }
}

export default async function Fintech({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col w-full h-full">
      <PageWrapper>
        <div className="relative w-full h-full flex sm:mb-10 mb-5">
          <Image
            className="2xl:h-[650px] xl:h-[500px] md:h-[300px] sm:h-[250px] h-[200px] brightness-[.3] object-cover object-center grayscale"
            width={1919}
            height={1098}
            radius="none"
            src={fintechImage.src}
            alt="fintechImage image"
          />
          <div className="px-5 xl:pl-[60px] xl:pb-[67px] z-10 sm:w-2/3 w-full absolute bottom-5 left-2 flex flex-col">
            <span className="tracking-widest xl:text-[48px] font-[400]">
              FINTECH
            </span>
            <span className="opacity-95 xl:text-[32px] leading-tight text-xs font-[300] mb-2">
              {dictionary.fintech.text_1}
            </span>
            <span className="opacity-95 xl:text-[32px] leading-tight text-xs font-[300] mb-2">
              {dictionary.fintech.text_2}
            </span>
          </div>
        </div>

        <div className="xl:px-[60px] relative z-50 sm:px-5 px-5 flex flex-col gap-3 md:flex-row sm:mb-10 mb-5">
          <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D] xl:px-[40px] xl:py-[55px]">
            <span className="text-primary-gold mb-5 xl:text-[24px] xl:mb-[50px]">
              AGROFINTECH
            </span>
            <span className="text-sm mb-3 xl:text-[20px] leading-normal font-[300] xl:mb-10">
              {dictionary.fintech.text_3}
            </span>
            <span className="text-sm mb-3 xl:text-[20px] leading-normal font-[300] xl:mb-10">
              {dictionary.fintech.text_4}
            </span>

            <span
              className={`xl:text-[20px] leading-normal font-[300] xl:mb-10`}
            >
              {dictionary.fintech.text_5}
            </span>

            <ul className="list-disc text-sm px-5 xl:text-[20px] leading-normal font-[300] xl:mb-10">
              <li>
                <span className="text-primary-gold">AgroCredit</span> –
                {' ' + dictionary.fintech.text_7}
              </li>
              <li>
                <span className="text-primary-gold">GetCapital.kz</span> –
                {' ' + dictionary.fintech.text_8}
              </li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col p-5 rounded-3xl bg-[#0E0D0D] xl:px-[40px] xl:py-[55px]">
            <span className="text-primary-gold mb-5 xl:text-[24px] xl:mb-[50px]">
              {dictionary.fintech.text_9}
            </span>
            <span className="text-sm mb-3 xl:text-[20px] leading-normal font-[300] xl:mb-10">
              {dictionary.fintech.text_10}
            </span>
            <span className="text-sm mb-3 xl:text-[20px] leading-normal font-[300] xl:mb-10">
              {dictionary.fintech.text_11}
            </span>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
