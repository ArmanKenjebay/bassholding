'use client'

import { Button, Card, CardFooter, CardHeader, Chip } from '@nextui-org/react'
import Image, { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'
import { useRouter } from 'next-intl/client'

type Props = TCard & {
  className?: string | HTMLAttributes<any>
  classNameImage?: string | HTMLAttributes<any>
  dictionary: any
}

type TCard = {
  image: StaticImageData
  title: string
  desc: string
  chips: string[]
  link: string
}

export default function DirectionCard({
  image,
  title,
  desc,
  classNameImage,
  chips,
  className,
  dictionary,
  link,
}: Props) {
  const router = useRouter()

  const redirect = () => {
    router.push(link)
  }

  return (
    <Card className={`${className ? className : ''} group`}>
      <CardHeader className="absolute z-10 top-1 justify-between items-start">
        <div className=" flex flex-wrap max-h-20 overflow-x-auto scrollbar-hide gap-x-2 gap-y-3">
          {chips.map((chi) => (
            <Chip
              key={chi}
              className="border-white group-hover:border-primary-gold"
              // @ts-ignored
              variant="bordered"
            >
              <span className="group-hover:text-primary-gold">
                {dictionary.chips[chi] ?? chi}
              </span>
            </Chip>
          ))}
        </div>

        <div
          className={`rounded-[99px] min-w-[30px] min-h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 group-hover:bg-primary-gold group-hover:text-white`}
        >
          <span className={`block group-hover:hidden`}>&#8594;</span>
          <span className={`hidden group-hover:block`}>&#8599;</span>
        </div>
      </CardHeader>

      <Image
        src={image}
        quality={100}
        width={454}
        height={526}
        className={`pointer-events-none group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-[.5] z-0 w-full h-full  ${
          classNameImage ?? ''
        }`}
        alt="Bassholding card"
      />

      <CardFooter className="absolute z-10 bottom-0 flex flex-col w-full text-left">
        <div className="relative flex flex-col w-full sm:h-32">
          <span className="z-10 tracking-wider text-[28px] lg:text-3xl xl:text-[40px] truncate">
            {title}
          </span>
          <span className="pointer-events-auto z-0 text-sm xl:text-[20px] h-10 group-hover:h-full overflow-hidden">
            {dictionary['card_direction'][desc] ?? desc}
          </span>
        </div>
        <Button
          onClick={redirect}
          as="div"
          className="py-1 rounded-3xl outline-0 border-0 bg-white text-black transition-transform hover:scale-95 hover:bg-primary-gold hover:text-white text-base xl:text-xl flex w-full"
          size="sm"
        >
          <span className={`truncate inline-block w-full text-left text-base`}>
            {dictionary.button['find-out-more']}
          </span>
          &#8594;
        </Button>
      </CardFooter>
    </Card>
  )
}
