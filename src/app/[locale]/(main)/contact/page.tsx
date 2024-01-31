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
      title: 'Отдел стратегии и аналитики',
      name: 'Алимжан Абишев',
      phone: '+7 701 555 01 78',
    },
    {
      title: 'Bass Gold',
      name: 'Ермек Ильясов',
      phone: '+7 707 555 50 74',
    },
    {
      title: 'Отдел финансов и инвестирования',
      name: 'Берик Канаев',
      phone: '+7 707 223 34 48',
    },
    {
      title: 'Ili River Port',
      name: 'Марат Джулаев',
      phone: '+7 701 723 70 77',
    },
    {
      title: 'PR-отдел и Креативное агентство 80/20',
      name: 'Мольдир Каримова',
      phone: '+7 701 916 11 11',
    },
    {
      title: 'Проект PINCODE',
      name: 'Балсулу Тасбулатова',
      phone: '+7 775 442 1221',
    },
    {
      title: 'Отдел HR',
      name: 'Асылжан Сыздыкова',
      phone: '+7 702 408 61 60',
    },
    {
      title: 'По общим вопросам:',
      name: 'bassholding@mail.com',
      phone: '+7 (7172) 278 37 88',
    },
  ]

  return (
    <div className={`flex flex-col h-full xl:px-[60px] px-5`}>
      <span className={`xl:text-[48px] text-primary-gold mb-5 sm:mb-10 mt-10`}>
        {dictionary.contact.title}
      </span>

      <div
        className={`flex flex-wrap xl:flex-row flex-col gap-6 xl:mb-10 mb-2`}
      >
        {data.map((el) => (
          <div
            className={`flex flex-1 flex-col bg-[#262626] p-4 rounded-xl min-w-[659px]`}
          >
            <span className={`xl:text-2xl text-base text-primary-gold`}>
              {el.title}
            </span>
            <span className={`xl:text-2xl text-base`}>{el.name}</span>
            <span className={`xl:text-2xl text-base`}>{el.phone}</span>
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
