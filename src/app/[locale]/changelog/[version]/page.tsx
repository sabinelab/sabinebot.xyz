import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'

type Content = {
	lang: string
	text: string
}
type Update = {
	id: string
	published_at: number
	content: Content[]
}
type Props = {
	params: Promise<{
		version: string
		locale: string
	}>
}

export default async function Update({ params }: Props) {
    const { version, locale } = await params

    const res = await fetch(process.env.API_URL + '/updates')
    const updates: Update[] = await res.json()
    const update = updates.find(u => u.id === version.replace('v', '').trim())

    if(!update) {
        notFound()
    }

    const content = update.content.find(c => c.lang === locale)

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