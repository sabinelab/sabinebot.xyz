import { getTranslations } from 'next-intl/server'
import ChangelogsList from './changelogs-list'
import { Suspense } from 'react'
import ChangelogsSkeleton from '@/app/[locale]/changelog/changelogs-skeleton'

type Props = {
  params: Promise<{
    locale: string
  }>
}

export default async function ChangelogPage({ params }: Props) {
  const t = await getTranslations()

  const { locale } = await params

  return (
    <>
      <div>
        <h1 className='flex flex-col font-bold text-4xl md:text-5xl items-center pt-15'>
          {t('changelog.title')}
        </h1>
      </div>
      
      <Suspense fallback={<ChangelogsSkeleton />} >
        <ChangelogsList
          locale={locale}
        />
      </Suspense>
    </>
  )
}