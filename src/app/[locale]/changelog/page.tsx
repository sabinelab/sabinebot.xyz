import { getTranslations } from 'next-intl/server'
import UpdateLoading from './update-loading'

type Props = {
    params: Promise<{
        locale: string
    }>
}

export default async function ChangeLog({ params }: Props) {
    const t = await getTranslations()

    const { locale } = await params
    
    return (
        <>
            <div>
                <h1 className='flex flex-col font-bold text-4xl md:text-5xl items-center pt-15'>
                    {t('changelog.title')}
                </h1>
            </div>
            <UpdateLoading
                locale={locale}
            />
        </>
    )
}