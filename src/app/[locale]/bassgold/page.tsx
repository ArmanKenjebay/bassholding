import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export async function generateMetadata({ params }: any) {
  const dictionary = await getDictionary(params.locale)

  return {
    title: dictionary.direction.bassgold,
    description: dictionary.direction.bassgold,
  }
}

export default async function BassGold({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return <section className="flex flex-col w-full h-full"></section>
}
