type Props = {
  params: {
    id: string
    locale: 'en' | 'ru'
  }
  searchParams: { [key: string]: string }
}
export default function NewsDetail({ params: { locale, id } }: Props) {
  return (
    <div className={`mt-20 flex flex-col w-full h-full`}>
      <div className={`flex flex-col`}>
        <span>news detail {id}</span>
      </div>
    </div>
  )
}
