import { Suspense } from 'react'
import Changelog from './changelog'
import ChangelogSkeleton from './changelog-skeleton'

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

  return (
    <Suspense fallback={<ChangelogSkeleton />}>
      <Changelog version={version} locale={locale} />
    </Suspense>
  )
}