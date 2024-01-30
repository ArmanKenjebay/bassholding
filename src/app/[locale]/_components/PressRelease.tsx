import { Locale } from '@/i18n-config'
import Link from 'next/link'

type Props = {
  locale: Locale
}

export default async function PressRelease({ locale }: Props) {
  const token = process.env.NEXT_PUBLIC_TOKEN
  const api = process.env.NEXT_PUBLIC_BACKEND_API
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const response = await fetch(
    `${api}/news?locale=${locale}&sort=createdAt:desc`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  )

  let post: any | undefined = undefined

  if (response.ok) {
    post = await response.json().then((res) => {
      return res.data.filter(
        (el: any) => el.attributes.chips.trim() === 'Bass Gold',
      )
    })
  }

  return (
    <div
      className={`flex flex-col xl:gap-y-[30px] sm:gap-y-[20px] gap-y-[12px]`}
    >
      {post && post.length > 0 ? (
        post.map((el: any) => (
          <Link
            href={`news/${el.id}`}
            locale={locale}
            lang={locale}
            key={el.id}
            className={`flex flex-col xl:w-3/4 w-full hover:text-primary-gold duration-200 ease-in-out`}
          >
            <span className={`xl:text-[24px] lg:text-[20px] text-[18px] mb-2`}>
              {el.attributes.title}
            </span>
            <span className={`text-[16px]`}>{el.attributes.date}</span>
          </Link>
        ))
      ) : (
        <></>
      )}
    </div>
  )
}
