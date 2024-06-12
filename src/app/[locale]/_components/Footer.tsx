'use client'

import Link from 'next-intl/link'

export default function Footer({
  params: { dictionary, locale },
}: {
  params: { locale: string; dictionary: { [key: string]: any } }
}) {
  const links: { name: string; link: string }[] = [
    { name: 'Instagram', link: 'https://www.instagram.com/bassholding_kz/' },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61552930464080',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/bassholdingkz',
    },
    { name: 'YouTube', link: 'https://www.youtube.com/@BassHolding' },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@bassholding?_t=8h1ZJor9Lyz&_r=1',
    },
  ]

  return (
    <footer className="flex gap-y-10 sm:flex-row flex-col justify-between py-2 px-5 xl:p-[60px]">
      <div className="flex sm:gap-x-[154px] gap-x-10">
        <div className="flex flex-col gap-y-[53px]">
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
            href="/"
            lang={locale}
          >
            {dictionary.navbar.main}
          </Link>
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
            href="/about"
            lang={locale}
          >
            {dictionary.navbar.about}
          </Link>
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
            href="/direction"
            lang={locale}
          >
            {dictionary.navbar.direction}
          </Link>
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
            href="/news"
            lang={locale}
          >
            {dictionary.navbar.news}
          </Link>
          {/*<Link*/}
          {/*  className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"*/}
          {/*  href="/career"*/}
          {/*  lang={locale}*/}
          {/*>*/}
          {/*  {dictionary.navbar.career}*/}
          {/*</Link>*/}
        </div>
        <div className="flex flex-col gap-y-[53px]">
          {links.map(({ name, link }, index) => (
            <a
              key={index + 'link'}
              className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
              href={link}
              target="_blank"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end justify-end text-end">
        <span className="sm:text-sm text-xs">
          {dictionary.contact.footer_text}
        </span>
        <a
          className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
          href="https://maps.app.goo.gl/YB7soxRrB8FxhmRu8"
          target="_blank"
        >
          {dictionary.contact.address}
        </a>
        <a
          className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
          href="tel:+771722783788"
        >
          +7 (7172) 278 37 88
        </a>
        <a
          className="hover:text-primary-gold duration-200 ease-in-out sm:text-sm text-xs"
          href="mailto:info@bassholding.kz"
        >
          info@bassholding.kz
        </a>
      </div>
    </footer>
  )
}
