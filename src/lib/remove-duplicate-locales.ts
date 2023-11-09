type Locale = 'en' | 'ru'

export const removeDuplicateLocales = (input: string): string => {
  const paths: string[] = input.split(',') // Разделяем входную строку на массив путей
  const localeCounts: { [key in Locale]: number } = {
    en: 0,
    ru: 0,
  }

  const filteredPaths: string[] = []

  for (const path of paths) {
    const [locale, rest] = path.split('/') // Разделяем путь на локаль и остаток пути
    if (localeCounts[locale as Locale] < 1) {
      // Если локаль встречается впервые, добавляем в результат
      filteredPaths.push(path)
      localeCounts[locale as Locale]++
    }
  }

  const result: string = filteredPaths.join(',') // Собираем массив путей обратно в строку

  return result
}
