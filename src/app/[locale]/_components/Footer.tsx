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
    <footer className="flex gap-y-3 sm:flex-row flex-col justify-between py-2 px-5">
      <div className="grid gap-x-20 gap-y-3 sm:grid-cols-2 grid-cols-1">
        <div className="flex flex-col gap-y-3">
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out"
            href="/about"
            lang={locale}
          >
            {dictionary.navbar.about}
          </Link>
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out"
            href="/direction"
            lang={locale}
          >
            {dictionary.navbar.direction}
          </Link>
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out"
            href="/news"
            lang={locale}
          >
            {dictionary.navbar.news}
          </Link>
          <Link
            className="hover:text-primary-gold duration-200 ease-in-out"
            href="/career"
            lang={locale}
          >
            {dictionary.navbar.career}
          </Link>
        </div>
        <div className="flex flex-col gap-y-3">
          {links.map(({ name, link }, index) => (
            <a
              key={index + 'link'}
              className="hover:text-primary-gold duration-200 ease-in-out"
              href={link}
              target="_blank"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end justify-end text-end">
        <span>{dictionary.contact.footer_text}</span>
        <a
          className="hover:text-primary-gold duration-200 ease-in-out"
          href="https://maps.app.goo.gl/YB7soxRrB8FxhmRu8"
          target="_blank"
        >
          {dictionary.contact.address}
        </a>
        <a
          className="hover:text-primary-gold duration-200 ease-in-out"
          href="tel:+771722783788"
        >
          +7 (7172) 278 37 88
        </a>
        <a
          className="hover:text-primary-gold duration-200 ease-in-out"
          href="mailto:info@bassholding.kz"
        >
          info@bassholding.kz
        </a>
      </div>
    </footer>
  )
}
