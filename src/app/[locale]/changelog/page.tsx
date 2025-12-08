import { getTranslations } from 'next-intl/server'
import ChangelogsList from './changelogs-list'
import { Suspense } from 'react'
import ChangelogsSkeleton from '@/app/[locale]/changelog/changelogs-skeleton'

export default async function ChangelogPage() {
  const t = await getTranslations()

  return (
    <>
      <div>
        <h1 className='flex flex-col font-bold text-4xl md:text-5xl items-center pt-15'>
          {t('changelog.title')}
        </h1>
      </div>
      
      <Suspense fallback={<ChangelogsSkeleton />} >
        <ChangelogsList />
      </Suspense>
    </>
  )
}