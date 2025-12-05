import Markdown from 'react-markdown'
import type { Changelog } from '../changelogs-list'
import { notFound } from 'next/navigation'

type Props = {
  version: string
  locale: string
}

const getContent = async(props: Props) => {
  const res = await fetch(process.env.API_URL + '/updates')
  const changelogs: Changelog[] = await res.json()
  const changelog = changelogs.find(c =>
    c.id === props.version.replace('v', '')
  )

  const content = changelog?.content.find(c => c.lang === props.locale)

  return content
}

export default async function Changelog(props: Props) {
  const content = await getContent(props)

  if(!content) {
    notFound()
  }

  return (
    <>
      <div className='px-10 pt-15 max-w-none markdown mb-20'>
        <Markdown>
          {content.text.trim()}
        </Markdown>
      </div>
    </>
  )
}