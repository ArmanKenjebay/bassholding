import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Image } from '@nextui-org/image'
import pincodeImage from '../../../../../public/images/pincode.webp'
import pincodeImage1 from '../../../../../public/images/pincode-1.webp'
import PageWrapper from '@/app/[locale]/_components/PageWrapper'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.pincode.title,
    description: dictionary.pincode.title,
  }
}

export default async function Pincode({
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
            className="2xl:h-[650px] xl:h-[500px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] brightness-[.45] object-cover object-top"
            width={1919}
            height={1098}
            radius="none"
            src={pincodeImage.src}
            alt="bassgold image"
          />
          <div className="z-10 lg:w-[80%] w-full absolute flex flex-col justify-end h-full pl-10 pb-10 xl:pl-[60px]">
            <span className="xl:text-[64px] font-[400]">PINCODE</span>
            <span className="opacity-95 xl:text-[24px] leading-tight font-[300] text-xs">
              {dictionary.pincode.text_1}
            </span>
          </div>
        </div>

        <div className="pl-10 pb-10 xl:px-[60px] relative z-50 sm:px-5 px-5 flex flex-col gap-y-3 gap-x-10 sm:flex-row sm:mb-10 mb-5">
          <div className="relative flex h-[300px] lg:h-[500px] md:h-[450px] sm:h-[400px]">
            <Image
              className="aspect-square sm:aspect-auto w-full h-full object-cover"
              width={2731}
              height={4096}
              src={pincodeImage1.src}
              alt="pincode image"
            />
          </div>

          <div className="flex flex-1 gap-y-5 flex-col">
            <div className="text-primary-gold text-base md:text-2xl">
              <span>{dictionary.pincode.text_2}</span>
              <br />
              <br />
              <span>{dictionary.pincode.text_3}</span>
            </div>
            <div className="text-sm md:text-lg">
              <span>{dictionary.pincode.text_4}</span>
            </div>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
