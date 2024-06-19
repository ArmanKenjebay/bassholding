import {
  THtmlBlock,
  THtmlBlockChild,
  THtmlBlockChildText,
} from '@/app/[locale]/_types/THtmlBlock'
import Link from 'next/link'

const getClassName = (text: THtmlBlockChildText) => {
  return `${text.italic ? 'italic' : 'not-italic'} ${
    text.bold ? 'font-bold' : 'font-normal'
  } ${text.text.at(0) === ' ' ? 'whitespace-pre' : 'whitespace-pre-line'}`
}

const ParseText = ({ child }: { child: THtmlBlockChild }) => {
  switch (child.type) {
    case 'text':
      return <span className={`${getClassName(child)}`}>{child.text}</span>
    case 'link':
      return (
        <Link
          className={`cursor-pointer hover:text-primary-gold duration-200 ease-in-out`}
          href={child.url}
        >
          {child.children.map((el) => (
            <ParseText child={el} />
          ))}
        </Link>
      )
    case 'list-item':
      return child.children.map((el) => <ParseText child={el} />)
  }
}

const ParseParagraph = ({ block }: { block: THtmlBlock }) => {
  return (
    <p>
      {block.children.map((el) => (
        <ParseText child={el} />
      ))}
    </p>
  )
}

const ParseList = ({ block }: { block: THtmlBlock }) => {
  if (block.type === 'list') {
    if (block.format === 'ordered') {
      return (
        <ol className={`list-decimal`}>
          {block.children.map((el) => (
            <li>
              <ParseText child={el} />
            </li>
          ))}
        </ol>
      )
    }
    if (block.format === 'unordered') {
      return (
        <ul className={`list-disc`}>
          {block.children.map((el) => (
            <li>
              <ParseText child={el} />
            </li>
          ))}
        </ul>
      )
    }
  }
}

const ParseHeading = ({ block }: { block: THtmlBlock }) => {
  return block.children.map((el) => {
    if (el.type === 'text') {
      switch (block.level) {
        case 1:
          return (
            <h1
              className={`${getClassName(el)} xl:text-4xl lg:text-3xl text-2xl`}
            >
              {el.text}
            </h1>
          )
        case 2:
          return (
            <h2
              className={`${getClassName(el)} xl:text-4xl lg:text-3xl text-2xl`}
            >
              {el.text}
            </h2>
          )
        case 3:
          return (
            <h3
              className={`${getClassName(el)} xl:text-4xl lg:text-3xl text-2xl`}
            >
              {el.text}
            </h3>
          )
        case 4:
          return (
            <h4
              className={`${getClassName(el)} xl:text-4xl lg:text-3xl text-2xl`}
            >
              {el.text}
            </h4>
          )
        case 5:
          return (
            <h5
              className={`${getClassName(el)} xl:text-4xl lg:text-3xl text-2xl`}
            >
              {el.text}
            </h5>
          )
        case 6:
          return (
            <h6
              className={`${getClassName(el)} xl:text-4xl lg:text-3xl text-2xl`}
            >
              {el.text}
            </h6>
          )
      }
    }
  })
}

const SwitchTypeHtmlElement = ({ block }: { block: THtmlBlock }) => {
  switch (block.type) {
    case 'heading':
      return <ParseHeading block={block} />
    case 'paragraph':
      return <ParseParagraph block={block} />
    case 'list':
      return <ParseList block={block} />
  }
}

export default function ParserHtml({ blocks }: { blocks: THtmlBlock[] }) {
  return (
    <div className={`flex flex-col gap-y-1`}>
      {blocks.map((block) => {
        return (
          <div
            className={`flex xl:min-h-[20px] lg:min-h-[1.5rem] min-h-[0.875rem] !leading-normal xl:text-[20px] lg:text-2xl text-sm font-[200]`}
          >
            <SwitchTypeHtmlElement block={block} />
          </div>
        )
      })}
    </div>
  )
}
