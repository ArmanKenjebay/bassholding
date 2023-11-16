import NextImage, { StaticImageData } from 'next/image'
import { Image } from '@nextui-org/image'

type Props = {
  src: StaticImageData
  name: string
  position: string
}
export default function PersonalCard({ src, name, position }: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <Image
        as={NextImage}
        width={420}
        height={500}
        src={src.src}
        alt={name}
        className="md:w-[420px] md:h-[500px] w-[155px] h-[192px] object-cover object-center rounded-xl"
        classNames={{
          wrapper: 'w-full h-full',
        }}
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
