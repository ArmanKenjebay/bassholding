import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import wallImage from '@/../public/images/company_profile.webp'

export default async function Investors() {
  return (
    <div className={`flex flex-col h-full`}>
      <div className={`w-full`}>
        <NextImage
          className={`w-full h-[484px] object-cover`}
          width={1440}
          height={484}
          src={wallImage.src}
          alt="bassholding image"
        />
      </div>
    </div>
  )
}
