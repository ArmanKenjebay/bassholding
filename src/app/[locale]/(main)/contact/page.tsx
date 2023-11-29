import { ReactNode } from 'react'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

type Props = {
  params: {
    locale: Locale
  }
}

export default async function Contact({ params: { locale } }: Props) {
  const dictionary = await getDictionary(locale)

  return (
    <div className={`flex flex-col h-full sm:px-10 px-5`}>
      <span className={`xl:text-[48px] text-primary-gold mb-5 sm:mb-10`}>
        {dictionary.contact.title}
      </span>

      <div className={`flex md:flex-row flex-col justify-between`}>
        <div className={`flex flex-col gap-y-3 mb-5 sm:mb-10`}>
          <a
            target={`_blank`}
            href={`tel:+7(7172)2783788`}
            className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[32px] font-[250] duration-200 transition ease-in-out hover:text-primary-gold`}
          >
            +7 (7172) 278 37 88
          </a>
          <a
            target={`_blank`}
            href={`mailto:bassholding@mail.com`}
            className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[32px] font-[250] duration-200 transition ease-in-out hover:text-primary-gold`}
          >
            bassholding@mail.com
          </a>
          <a
            target={`_blank`}
            href={`https://maps.app.goo.gl/tar25zruLETznWYf8`}
            className={`text-[14px] sm:text-[16px] md:text-[18px] xl:text-[32px] font-[250] duration-200 transition ease-in-out hover:text-primary-gold`}
          >
            проспект Кабанбай Батыра 11/5
          </a>
        </div>

        <div className={`md:w-[350px] md:h-[250px] lg:w-[500px] xl:w-[652px]`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.3030203670364!2d71.41365677585217!3d51.139762985257164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424587058c90d549%3A0xf079f37deb59e996!2z0JHQpiDQndKx0YDQu9GLINCe0YDQtNCw!5e0!3m2!1sru!2skz!4v1701059083301!5m2!1sru!2skz"
            loading="lazy"
            className={`rounded-3xl`}
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="150"
            style={{ width: '100%', maxWidth: '100%', height: '300px' }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
