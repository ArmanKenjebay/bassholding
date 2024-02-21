import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

type Props = {
  params: {
    locale: Locale
  }
}

export default async function Contact({ params: { locale } }: Props) {
  const dictionary = await getDictionary(locale)

  const data = [
    {
      title: {
        ru: 'Отдел Стратегии и аналитики',
        en: 'Stratetgy and analysis department',
        kk: 'Стратегия және талдау бөлімі',
      },
      name: {
        ru: 'Алимжан Абишев',
        kk: 'Алимжан Абишев',
        en: 'Alimzhan Abishev',
      },
      phone: '+7 701 555 01 78',
      email: 'abishev.a@bassholding.kz',
    },
    {
      title: {
        ru: 'Bass Gold',
        en: 'Bass Gold',
        kk: 'Bass Gold',
      },
      name: {
        ru: 'Ермек Ильясов',
        kk: 'Ермек Ильясов',
        en: 'Ermek Ilyasov',
      },
      email: 'ilyasov.e@forpostgold.kz',
    },
    {
      title: {
        ru: 'Отдел финансов и инвестирования',
        en: 'Finance and investment department',
        kk: 'Қаржы және инвестициялау бөлімі',
      },
      name: {
        ru: 'Берик Канаев',
        kk: 'Берик Канаев',
        en: 'Berik Kanayev',
      },
      phone: '+7 707 223 34 48',
      email: 'Kanayev.B@bassholding.kz',
    },
    {
      title: {
        ru: 'Ili River Port',
        en: 'Ili River Port',
        kk: 'Ili River Port',
      },
      name: {
        ru: 'Марат Джулаев',
        kk: 'Марат Джулаев',
        en: 'Marat Julayev',
      },
      email: 'Julayev.m@bassholding.kz',
    },
    {
      title: {
        ru: 'PR-отдел и Креативное агентство 80/20',
        en: 'PR department and 80/20 creative agency ',
        kk: 'PR-бөлімі және 80/20 креативтік агенттігі',
      },
      name: {
        ru: 'Мольдир Каримова',
        kk: 'Мольдир Каримова',
        en: 'Moldir Karimova',
      },
      email: 'karimova.m@bassholding.kz',
    },
    {
      title: {
        ru: 'Проект PINCODE',
        en: 'Project PINCODE',
        kk: 'PINCODE жобасы',
      },
      name: {
        ru: 'Балсулу Тасбулатова',
        kk: 'Балсулу Тасбулатова',
        en: 'Balsulu Tasbulatova',
      },
      email: 'tasbulatov.b@bassholding.kz ',
    },
    {
      title: {
        ru: 'Отдел HR ',
        en: 'HR Department',
        kk: 'HR бөлімі',
      },
      name: {
        ru: 'Асылжан Сыздыкова',
        kk: 'Асылжан Сыздыкова',
        en: 'Asylzhan Syzdykova',
      },
      email: 'syzdykova.a@bassholding.kz',
    },
    {
      title: {
        ru: 'По общим вопросам:',
        en: 'General inquiries:',
        kk: 'Жалпы сұрақтар бойынша:',
      },
      name: {
        ru: '',
        kk: '',
        en: '',
      },
      phone: '+7 (7172) 278 37 88',
      email: 'bassholding@mail.com',
    },
  ]

  const getTranslateField = (
    item: Record<'title' | 'name', Record<Locale, string>>,
    field: 'title' | 'name',
  ) => {
    switch (locale) {
      case 'ru':
        return item[field].ru
      case 'kk':
        return item[field].kk
      case 'en':
        return item[field].en
    }
  }

  return (
    <div className={`flex flex-col h-full xl:px-[60px] px-5`}>
      <span className={`xl:text-[48px] text-primary-gold mb-5 sm:mb-10 mt-10`}>
        {dictionary.contact.title}
      </span>

      <div
        className={`flex flex-wrap xl:flex-row flex-col gap-6 xl:mb-10 mb-2`}
      >
        {data.map((el: any) => (
          <div
            className={`flex flex-1 gap-y-2 flex-col bg-[#262626] p-4 rounded-xl min-w-[659px]`}
          >
            <span className={`xl:text-xl text-base text-primary-gold`}>
              {getTranslateField(el, 'title')}
            </span>
            <span className={`xl:text-lg text-base`}>
              {getTranslateField(el, 'name')}
            </span>

            {el && el?.phone && (
              <a
                href={`tel:${el.phone.replace(/ /g, '')}`}
                className={`xl:text-lg text-base`}
              >
                {el.phone}
              </a>
            )}
            {el && el?.email && (
              <a
                target={`_blank`}
                href={`mailto:${el.email}`}
                className={`w-fit xl:text-lg text-base cursor-pointer hover:text-primary-gold ease-in-out duration-200`}
              >
                {el.email}
              </a>
            )}
          </div>
        ))}
      </div>
      <div className={`w-full xl:h-[455px] h-[200px]`}>
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
  )
}
