'use client'

import { useEffect, useState } from 'react'
import { TQuote } from '@/app/[locale]/_types/TQuote'

export default function CalculateModal() {
  const [item, setItem] = useState<'US_GLD_' | 'FPSTb2'>('US_GLD_')

  const [quotes, setQuotes] = useState<Pick<TQuote, 'clean_price' | 'yield'>>()

  const postReq = async (item: 'US_GLD_' | 'FPSTb2') => {
    const response = await fetch(`investors/api`, {
      method: 'POST',
      body: JSON.stringify({ item }),
    })

    return (await response.json()) as Promise<TQuote[]>
  }

  useEffect(() => {
    postReq(item).then((res) => {
      const mapRes = {
        clean_price: res[0].clean_price,
        yield: res[0].yield,
      }
      setQuotes(mapRes)
    })
  }, [item])

  const changeItem = (value: string) => {
    if (value === 'US_GLD_' || value === 'FPSTb2') setItem(value)
  }

  return (
    <div
      className={`group bg-opacity-50  px-5 py-[23px] xl:flex flex-col gap-y-3 items-center justify-between rounded-xl bg-white hidden`}
    >
      <div className={`text-black`}>
        <span className={`text-[24px] font-normal`}>
          {item === 'US_GLD_' ? 'Курс золота' : 'Курс серебра'}
        </span>
      </div>

      {quotes && (
        <div
          className={`flex bg-white py-3 px-10 rounded-xl flex-col gap-y-3 items-center text-[21px]`}
        >
          <div>
            <span className={`text-black mr-1`}>{quotes.clean_price}</span>
            <span className={`text-red-600`}>&#8595;</span>
            <span className={`text-red-600`}>{quotes.yield}</span>
            <span className={`text-red-600`}>-2.68%</span>
          </div>

          <div className={`flex gap-x-1 text-[14px]`}>
            <select
              onChange={(change) => changeItem(change.target.value)}
              className={`w-[80px] bg-white text-gray-500 p-2 border-1 border-gray-200 rounded-lg outline-0`}
            >
              <option value={`US_GLD_`}>Gold</option>
              <option value={`FPSTb2`}>Silver</option>
            </select>
            <select
              className={`w-[80px] bg-white text-gray-500 p-2 border-1 border-gray-200 rounded-lg outline-0`}
            >
              <option>USD</option>
            </select>
            <select
              className={`w-[80px] bg-white text-gray-500 p-2 border-1 border-gray-200 rounded-lg outline-0`}
            >
              <option>oz</option>
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
