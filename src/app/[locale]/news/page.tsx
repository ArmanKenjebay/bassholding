import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.news.title,
    description: dictionary.news.description,
  }
}

export default async function News({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col">
      <div className="mt-20">
        <h3>News page</h3>
        <p>Current locale: {locale}</p>
        This text is rendered on the server: {dictionary.about.title}
      </div>
    </section>
  )
}
