import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <main className="flex items-center justify-center flex-col h-full">
      <h3>{dictionary.main.title}</h3>
      <p>Current locale: {locale}</p>
      This text is rendered on the server: {dictionary.main.title}
    </main>
  )
}
