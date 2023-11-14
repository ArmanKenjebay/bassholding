'use client'

import { Button, Card, CardFooter, CardHeader, Chip } from '@nextui-org/react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'
import NextArrow from '@/../public/svgs/next-arrow'

type Props = TCard & {
  className?: string | HTMLAttributes<any>
  classNameImage?: string | HTMLAttributes<any>
  isFirst: boolean
  dictionary: any
}

type TCard = {
  image: StaticImageData
  title: string
  desc: string
  chips: string[]
}

export default function CustomCard({
  image,
  title,
  desc,
  classNameImage,
  chips,
  isFirst,
  className,
  dictionary,
}: Props) {
  return (
    <Card className={`${className ? className : ''}`}>
      <CardHeader className="absolute pointer-events-none z-10 top-1 justify-between items-start">
        <div className=" flex overflow-x-auto scrollbar-hide gap-x-2 gap-y-3">
          {chips.map((chi) => (
            <Chip
              className="pointer-events-none"
              key={chi}
              // @ts-ignored
              color={isFirst ? 'warning' : ''}
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

      <CardFooter className="pointer-events-none absolute z-10 bottom-0">
        <div className="relative flex flex-col w-full">
          <span className="tracking-wider text-2xl">{title}</span>
          <span className="text-sm">{desc}</span>
          <Button className="bg-white text-black" size="sm">
            {dictionary.button['find-out-more']}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
