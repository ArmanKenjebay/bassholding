import { Chip } from '@nextui-org/chip'
import React from 'react'

type Props = {
  content: string
  chip: string
  date?: string
}
export default function NewsLine({ content, chip, date }: Props) {
  return (
    <div className="group sm:py-5 py-3 flex sm:flex-row flex-col gap-y-2 justify-between">
      <div className="flex">
        <span className="text-sm">{content}</span>
      </div>
      <div className="flex justify-between items-center gap-x-3">
        <Chip variant="bordered" color="warning">
          {chip}
        </Chip>
        {date ?? (
          <div>
            <span>{date}</span>
          </div>
        )}
        <div>
          <div
            className={`rounded-[99px] min-w-[30px] min-h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 group-hover:bg-primary-gold group-hover:text-white`}
          >
            <span className={`block group-hover:hidden`}>&#8594;</span>
            <span className={`hidden group-hover:block`}>&#8599;</span>
          </div>
        </div>
      </div>
    </div>
  )
}
