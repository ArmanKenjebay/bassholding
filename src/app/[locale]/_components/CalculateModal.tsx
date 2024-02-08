'use client'

type Props = {
  classNames?: {
    main?: string
  }
}
export default function CalculateModal({ classNames }: Props) {
  return (
    <div
      className={`w-[520px] py-[23px] xl:flex flex-col gap-y-3 items-center justify-between rounded-xl bg-white hidden ${
        classNames && classNames?.main ? classNames.main : ''
      }`}
    >
      <div className={`text-black`}>
        <span className={`text-[32px] font-normal`}>Курс золота</span>
      </div>

      <div className={`flex flex-col gap-y-3 items-center text-[21px]`}>
        <div>
          <span className={`text-black mr-1`}>2 061,91</span>
          <span className={`text-red-600`}>&#8595;</span>
          <span className={`text-red-600`}>-56.79 -2.68%</span>
        </div>

        <div className={`flex gap-x-1 text-[14px]`}>
          <select
            className={`w-[80px] bg-white text-gray-500 p-2 border-1 border-gray-200 rounded-lg outline-0`}
          >
            <option>Gold</option>
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
