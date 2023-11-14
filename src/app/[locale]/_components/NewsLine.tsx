import { Chip } from '@nextui-org/chip'
import NextArrow from '@/../../public/svgs/next-arrow'
import React, { ComponentProps } from 'react'

type Props = {
  content: string
  chip: string
  date: string
}
export default function NewsLine({ content, chip, date }: Props) {
  return (
    <div className="sm:py-5 py-3 flex sm:flex-row flex-col gap-y-2 justify-between">
      <div className="flex">
        <span className="text-sm">{content}</span>
      </div>
      <div className="flex justify-between items-center gap-x-3">
        <Chip variant="bordered" color="warning">
          {chip}
        </Chip>
        <div>
          <span>{date}</span>
        </div>
        <div>
          <NextArrow
            fillColor="#FFFF"
            arrowColor="#000000"
            width="30"
            height="30"
          />
        </div>
      </div>
    </div>
  )
}
