'use client'

import { Button, Card, CardFooter, CardHeader, Chip } from '@nextui-org/react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React, { ComponentProps, HTMLAttributes } from 'react'
import NextArrow from '@/../public/svgs/next-arrow'
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
    <Card
      onClick={redirect}
      isPressable
      className={`${className ? className : ''}`}
    >
      <CardHeader className="absolute pointer-events-none z-10 top-1 justify-between items-start">
        <div className=" flex overflow-x-auto scrollbar-hide gap-x-2 gap-y-3">
          {chips.map((chi) => (
            <Chip
              key={chi}
              className="pointer-events-none border-white"
              // @ts-ignored
              variant="bordered"
            >
              <span>{dictionary.chips[chi] ?? chi}</span>
            </Chip>
          ))}
        </div>
        <div>
          <NextArrow width={'30'} height={'30'} />
        </div>
      </CardHeader>

      <Image
        src={image}
        quality={100}
        width={668}
        height={774}
        className={`z-0 w-full h-full  ${classNameImage ?? ''}`}
        alt="Bassholding card"
      />

      <CardFooter className="pointer-events-none absolute z-10 bottom-0 flex flex-col w-full">
        <div className="relative flex flex-col w-full sm:h-32">
          <span className="tracking-wider text-2xl">{title}</span>
          <span className="text-sm h-10 overflow-hidden">
            {dictionary['card_direction'][desc] ?? desc}
          </span>
        </div>
        <Button as="div" className="bg-white text-black flex w-full" size="sm">
          {dictionary.button['find-out-more']}
        </Button>
      </CardFooter>
    </Card>
  )
}
