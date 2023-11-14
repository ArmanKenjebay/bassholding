import Image, { StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
  name: string
  position: string
}
export default function PersonalCard({ src, name, position }: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <Image
        quality={100}
        src={src}
        alt={name}
        className="md:w-[420px] md:h-[500px] w-[155px] h-[192px] object-cover object-center rounded-xl"
      />
      <span className="text-primary-gold">{name}</span>
      <span className="opacity-70">{position}</span>
    </div>
  )
}
