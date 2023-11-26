import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { Image } from '@nextui-org/image'
import pincodeImage from '../../../../../public/images/pincode.webp'
import pincodeImage1 from '../../../../../public/images/pincode-1.webp'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.pincode,
    description: dictionary.pincode,
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
      <div className="relative w-full h-full flex sm:mb-10 mb-5">
        <Image
          className="2xl:h-[650px] xl:h-[500px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[200px] brightness-[.45] object-cover object-top"
          width={1919}
          height={1098}
          radius="none"
          src={pincodeImage.src}
          alt="bassgold image"
        />
        <div className="z-10 lg:w-[80%] w-full absolute bottom-5 left-2 flex flex-col">
          <span className="tracking-widest xl:text-[64px] font-[400]">
            PINCODE
          </span>
          <span className="opacity-95 xl:text-[40px] leading-tight font-[300] text-xs">
            уникальная онлайн-платформа, которая дает возможность пройти
            тестирование и получить рекомендации по вопросам профессиональной
            ориентации, отбора и оценки кадров, карьерного развития и
            психологической совместимости людей в команде.
          </span>
        </div>
      </div>

      <div className="relative z-50 sm:px-5 px-2 flex flex-col gap-y-3 gap-x-10 sm:flex-row sm:mb-10 mb-5">
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
            <span>
              Развитие человеческого потенциала - одно из наших направлений
              деятельности. Это основа успеха каждой компании, и каждой страны.
            </span>
            <br />
            <br />
            <span>
              Мы создаем уникальную HR-историю Холдинга в рамках проекта
              Pincode.
            </span>
          </div>
          <div className="text-sm md:text-lg">
            <span>
              В 21 веке, потребность самореализации личности актуализировалась
              как никогда прежде. Это характерно современному
              постиндустриальному обществу, в котором личность выступает как
              самоцель общечеловеческого развития, одновременно являясь главным
              орудием прогресса.
            </span>
            <br />
            <span>
              Cегодня мы выполняем роль «надежного компаса» для человека,
              ориентированного на успех в жизни, учебе и в профессиональной
              деятельности.
            </span>
            <span>
              С помощью инновационных инструментов, продуктов синтеза науки и
              технологий, мы помогаем людям прикоснутся к природному потенциалу
              и содействуем самореализации личности с 13 лет.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
