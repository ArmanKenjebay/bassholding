import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Image } from '@nextui-org/image'
import bassgoldImage from '@/../public/images/bassgold-slider.webp'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.direction.bassgold,
    description: dictionary.direction.bassgold,
  }
}

export default async function BassGold({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col w-full h-full">
      <div className="relative w-full h-full flex sm:mb-10 mb-5">
        <Image
          className="2xl:h-[650px] xl:h-[500px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] brightness-75 object-cover object-center"
          width={1919}
          height={1098}
          radius="none"
          src={bassgoldImage.src}
          alt="bassgold image"
        />
        <div className="px-5 xl:pl-[60px] xl:pb-[67px] z-10 absolute h-full flex flex-col justify-end">
          <span className="tracking-widest xl:text-[64px] font-[400]">
            BASS GOLD
          </span>
          <span className="opacity-95 xl:text-[40px] text-xs font-[300] mb-5">
            {dictionary.direction['bassgold_title-1']}
          </span>
          <span className="opacity-95 xl:text-[40px] text-xs font-[300]">
            {dictionary.direction['bassgold_title-2']}
          </span>
        </div>
      </div>

      <div className="xl:px-[60px] relative z-50 sm:px-5 px-5 flex flex-col gap-3 xl:gap-x-[40px] md:flex-row sm:mb-10 mb-5">
        <div className="flex flex-1 flex-col p-5 xl:px-[40px] xl:py-[55px] rounded-3xl bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest xl:text-[48px] xl:mb-[50px]">
            {dictionary.direction['ushshoky_title']}
          </span>
          <span className="text-sm xl:text-[36px] leading-normal font-[300] xl:mb-10 mb-3">
            {dictionary.direction['ushshoky_text-1']}
          </span>

          <span
            className={`text-sm xl:text-[36px] leading-normal font-[300] xl:mb-10 mb-3`}
          >
            {dictionary.direction['ushshoky_text-2']}
          </span>

          <ul className="list-disc text-sm xl:text-[36px] leading-normal font-[300] px-5">
            <li>{dictionary.direction['ushshoky_li-1']}</li>
            <li>{dictionary.direction['ushshoky_li-2']}</li>
            <li>{dictionary.direction['ushshoky_li-3']}</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col p-5 xl:px-[40px] xl:py-[55px] rounded-3xl bg-[#0E0D0D]">
          <span className="text-primary-gold tracking-widest xl:text-[48px] xl:mb-[50px]">
            {dictionary.direction.chinasyl_say_title}
          </span>
          <span className="text-sm xl:text-[36px] leading-normal font-[300] mb-3">
            {dictionary.direction['chinasyl_say_text-1']}
            <br />
            <br />
            {dictionary.direction['chinasyl_say_text-2']}
          </span>
        </div>
      </div>
    </section>
  )
}
