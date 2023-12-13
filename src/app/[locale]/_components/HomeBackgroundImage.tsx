import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import ImageNext from 'next/image'
import { Image } from '@nextui-org/image'

type Props = {
  image: StaticImageData
  children: ReactNode
  width: number
  height: number
  className?: string
  alt?: string
}
export default function HomeBackgroundImage({
  children,
  image,
  width,
  height,
  alt,
  className,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      <div
        className={`absolute z-20 px-3 pb-[52px] sm:pb-14 md:pb-16 lg:pb-24 w-full h-full flex flex-col justify-end`}
      >
        {children}
      </div>
      <Image
        as={ImageNext}
        src={image.src}
        width={width}
        height={height}
        className={`object-cover object-center w-full h-full`}
        classNames={{
          wrapper: 'w-full h-full',
        }}
        radius={`none`}
        alt={alt ?? 'bassholding image'}
      ></Image>
    </div>
  )
}
