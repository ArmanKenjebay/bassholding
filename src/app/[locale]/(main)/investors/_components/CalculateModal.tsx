'use client'

import { useEffect, useState } from 'react'

export default function CalculateModal() {
  const [item, setItem] = useState<'US_GLD_' | 'FPSTb2'>('US_GLD_')

  const postReq = async (item: 'US_GLD_' | 'FPSTb2') => {
    const response = await fetch(`investors/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 3485455ed7a83457656aee075c8c8bf09cf3c51979d1b6bf51de14cc26c1b81c9b62bfee927d937f99de3ae05cfa404f4852994049e365e98f54932ec17d95b9cda53d5d7a42f84d905690ae30828660030d891624ed8a93dc51dd914e8b5211de96f44f1d6a98738d5c40b9a4c5345e77bf974a78cd13d9fd9691a2b5ada247',
      },
      body: JSON.stringify({ item }),
    })

    return response.json()
  }

  useEffect(() => {
    postReq(item).then((res) => {
      console.log(res)
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
        <span className={`text-[32px] font-normal`}>Курс золота</span>
      </div>

      <div
        className={`flex bg-white py-3 px-10 rounded-xl flex-col gap-y-3 items-center text-[21px]`}
      >
        <div>
          <span className={`text-black mr-1`}>2 061,91</span>
          <span className={`text-red-600`}>&#8595;</span>
          <span className={`text-red-600`}>-56.79 -2.68%</span>
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
    </div>
  )
}
