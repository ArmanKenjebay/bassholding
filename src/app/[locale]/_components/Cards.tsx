'use client'

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from '@nextui-org/react'
import { StaticImageData } from 'next/image'
import React, { HTMLAttributes } from 'react'
import NextArrow from '@/../public/svgs/next-arrow'

type Props = TCard & {
  className?: string | HTMLAttributes<any>
}

type TCard = {
  image: StaticImageData
  title: string
  desc: string
  chips: string[]
}

export default function Cards({ image, title, desc, chips, className }: Props) {
  return (
    <Card isFooterBlurred className={`${className ? className : ''}`}>
      <CardHeader className="absolute z-10 top-1 justify-between items-start">
        <div className="flex gap-x-2 gap-y-3">
          {chips.map((chi) => (
            <Chip key={chi} color="warning" variant="bordered">
              {chi}
            </Chip>
          ))}
        </div>
        <div className="">
          <NextArrow />
        </div>
      </CardHeader>
      <Image
        removeWrapper
        alt="Bassholding card"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image.src}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  )
}
