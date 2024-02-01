export type FinDocs = {
  data: {
    id: number
    attributes: FinDocsAttribute
  }[]
}

export type AnnualsDocs = {
  data: {
    id: number
    attributes: AnnualsDocsAttribute
  }[]
}

export type FinDocsAttribute = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  name_ru: string
  name_kz: string
  name_en: string
  name_th: string | null
  date_provision: string | null
  period_provision: string | null
  file: FinDocsFile
}

export type AnnualsDocsAttribute = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  name_ru: string
  name_kz: string
  name_en: string
  name_th: string | null
  date_provision: string | null
  period_provision: string | null
  file: FinDocsFile
  href: string
}

export type FinDocsFile = {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: string | null
      caption: string | null
      width: number | null
      height: number | null
      formats: any[] | null
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: string | null
      provider: string
      provider_metadata: any | null
      createdAt: string
      updatedAt: string
    }
  }[]
}
