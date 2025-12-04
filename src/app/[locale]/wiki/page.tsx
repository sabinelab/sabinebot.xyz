import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function Wiki() {
    const t = await getTranslations()
    
    return (
        <>
            <div>
                <h1 className='flex flex-col font-bold text-3xl md:text-5xl items-center pt-15'>
                    {t('wiki.title')}
                </h1>
            </div>
            <div>
                <ul
                    className='flex flex-col items-center justify-center pt-10'
                >
                    <Link
                        href='/wiki/predictions'
                        target='_blank'
                        className='hover:brightness-110'
                    >
                        <li
                            className='bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105  md:text-3xl'
                        >
                            {t('wiki.module.predictions.title')}
                        </li>
                    </Link>
                    <Link
                        href='/wiki/simulator'
                        target='_blank'
                        className='hover:brightness-110'
                    >
                        <li
                            className='bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105 md:text-3xl'
                        >
                            {t('wiki.module.simulator.title')}
                        </li>
                    </Link>
                    <Link
                        href='/wiki/cards'
                        target='_blank'
                        className='hover:brightness-110'
                    >
                        <li
                            className='bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105 md:text-3xl'
                        >
                            {t('wiki.module.cards.title')}
                        </li>
                    </Link>
                    <Link
                        href='/wiki/meta'
                        target='_blank'
                        className='hover:brightness-110'
                    >
                        <li
                            className='bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105 md:text-3xl'
                        >
                            {t('wiki.module.meta.title')}
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}