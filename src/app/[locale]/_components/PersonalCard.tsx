import NextImage, { StaticImageData } from 'next/image'
import { Image } from '@nextui-org/image'

type Props = {
  src: StaticImageData
  name: string
  position: string
}
export default function PersonalCard({ src, name, position }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-y-1">
      <Image
        as={NextImage}
        quality={100}
        width={420}
        height={500}
        src={src.src}
        alt={name}
        className="2xl:w-[420px] 2xl:h-[500px] xl:w-[360px] xl:h-[430px] lg:h-[410px] md:h-[310px] sm:w-full sm:h-[260px] w-[155px] h-[192px] object-cover object-center rounded-xl pointer-events-none"
      />
      <span className="text-primary-gold text-sm md:text-base lg:text-xl xl:text-3xl text-left">
        {name}
      </span>
      <span className="opacity-70 text-xs md:text-sm lg:text-base xl:text-xl">
        {position}
      </span>
    </div>
  )
}
