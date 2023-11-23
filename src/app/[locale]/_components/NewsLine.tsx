import { Chip } from '@nextui-org/chip'
import React from 'react'

type Props = {
  content: string
  chip: string
  date?: string
}
export default function NewsLine({ content, chip, date }: Props) {
  return (
    <div className="w-full grid grid-cols-[3fr_1fr_1fr_50px] gap-x-5 gap-y-3 items-center justify-center px-1">
      <div className="flex justify-start sm:col-span-1 col-span-4">
        <span className="text-sm">{content}</span>
      </div>

      <div className="flex justify-center items-center gap-x-3 sm:col-span-1 col-span-2">
        <Chip
          variant="bordered"
          color="warning"
          className={`text-sm`}
          classNames={{
            base: 'truncate',
            content: 'p-0 sm:p-1 truncate',
          }}
        >
          {chip}
        </Chip>
      </div>

      <div className={`flex justify-center sm:col-span-1`}>
        {date ?? <span>{date}</span>}
      </div>

      <div className={`flex justify-end sm:col-span-1`}>
        <div
          className={`group rounded-[99px] w-[30px] h-[30px] flex p-1 justify-center text-black bg-white ease-in-out duration-200 cursor-pointer hover:bg-primary-gold hover:text-white`}
        >
          <span className={`block group-hover:hidden`}>&#8594;</span>
          <span className={`hidden group-hover:block`}>&#8599;</span>
        </div>
      </div>
    </div>
  )
}
