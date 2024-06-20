export type THtmlData = {
  data: {
    id: number
    markdown: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    attributes: {
      blocks: THtmlBlock[]
    }
  }
}

export type THtmlBlock = {
  type: THtmlBlockType
  children: THtmlBlockChild[]
  level?: number
  format?: 'unordered' | 'ordered'
  image?: TImage
}

export type THtmlBlockChild =
  | THtmlBlockChildText
  | THtmlBlockChildList
  | {
      type: 'link'
      url: string
      children: THtmlBlockChildText[]
    }

export type THtmlBlockChildText = {
  type: 'text'
} & TTextClasses

export type THtmlBlockChildList = {
  type: 'list-item'
  children: THtmlBlockChild[]
} & TTextClasses

export type TImage = {
  name: string
  alternativeText: string
  url: string
  width: number
  height: number
}

type THtmlBlockType = 'heading' | 'paragraph' | 'list' | 'image'

type TTextClasses = {
  text: string
  bold?: boolean
  italic?: boolean
  strikethrough?: boolean
  underline?: boolean
}
