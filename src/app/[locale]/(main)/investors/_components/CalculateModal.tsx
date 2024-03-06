'use client'

import { useEffect, useState } from 'react'
import { TPrice } from '@/app/[locale]/_types/TQuote'
import { Locale } from '@/i18n-config'

export default function CalculateModal({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: any
}) {
  const [item, setItem] = useState<'GOLD' | 'SILVER'>('GOLD')

  const [price, setPrice] = useState<TPrice>()

  const getPrice = async () => {
    const response = await fetch(`investors/api`)

    return (await response.json()) as Promise<TPrice>
  }

  useEffect(() => {
    getPrice().then((res) => {
      setPrice(res)
    })
  }, [item])

  const changeItem = (value: string) => {
    if (value === 'GOLD' || value === 'SILVER') {
      setItem(value)
    }
  }

  return (
    <div
      className={`w-[380px] group px-5 py-[23px] xl:flex flex-col gap-y-3 items-center justify-between rounded-xl bg-white hidden`}
    >
      <div className={`text-black`}>
        <span className={`text-[24px] font-normal`}>
          {item === 'GOLD' ? 'Курс золота' : 'Курс серебра'}
        </span>
      </div>

      <div
        className={`flex bg-white py-3 px-10 rounded-xl flex-col gap-y-3 items-center text-[21px]`}
      >
        <div className={`flex gap-x-3`}>
          <span className={`text-black mr-1`}>
            {item === 'GOLD'
              ? price?.data[0].attributes.priceUnitGold
              : price?.data[0].attributes.priceUnitSilver}
          </span>
          <span className={`text-red-600`}>&#8595;</span>
          <span className={`text-red-600`}>
            {item === 'GOLD'
              ? price?.data[0].attributes.changesUsdGold
              : price?.data[0].attributes.changesUsdSilver}
          </span>
          <span className={`text-red-600`}>
            {item === 'GOLD'
              ? price?.data[0].attributes.changesPercentGold
              : price?.data[0].attributes.changesPercentSilver}
          </span>
        </div>

        <div className={`flex gap-x-1 text-[14px]`}>
          <select
            onChange={(change) => changeItem(change.target.value)}
            className={`w-[80px] bg-white text-gray-500 p-2 border-1 border-gray-200 rounded-lg outline-0`}
          >
            <option value={`GOLD`}>Gold</option>
            <option value={`SILVER`}>Silver</option>
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
    </div>
  )
}
