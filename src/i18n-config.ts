export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'kk', 'th'],
} as const

export type Locale = (typeof i18n)['locales'][number]
