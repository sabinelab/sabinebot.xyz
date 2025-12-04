import { getTranslations } from 'next-intl/server'
import { Search } from 'lucide-react'
import { calcPlayerOvr, getPlayer, getPlayers } from '@sabinelab/players'
import { redirect } from 'next/navigation'
import CardLoading from './card-loading'

type Props = {
    searchParams?: Promise<Record<string, string>>
}

const players = getPlayers()

const searchAction = async(formData: FormData) => {
    'use server'

    const q = formData.get('q')?.toString()
    redirect(!q ? '/cards' : `/cards/?q=${encodeURIComponent(q)}`)
}

const ts = Date.now()

export default async function Cards({ searchParams }: Props) {
    const t = await getTranslations()

    const q = (await searchParams)?.q?.toLowerCase() ?? ''

    const filtered = players.sort((a, b) => calcPlayerOvr(b) - calcPlayerOvr(a))
        .map(p => ({ name: `${p.name} — ${p.collection}`, id: p.id, collection: p.collection }))
        .filter(p => p.name.toLowerCase().includes(q))

    return (
        <>
            <div
                className='flex flex-col items-center gap-5'
            >
                <h1
                    className='font-bold text-4xl md:text-5xl pt-15'
                >
                    {t('cards.title')}
                </h1>
                <form
                    action={searchAction}
                    className='relative md:w-full max-w-md'
                >
                    <input
                        type='text'
                        placeholder={t('cards.search')}
                        className='w-full rounded-4xl border border-[#9CA3AF] pl-4 py-3'
                        name='q'
                    />
                    <button
                        type='submit'
                    >
                        <Search
                            className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'
                        />
                    </button>
                </form>
            </div>
            <div
                className='grid justify-items-center gap-7 mt-10 md:px-30 mb-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
            >
                {filtered.map(p => {
                    const player = getPlayer(p.id)

                    if(!player) return null

                    return (
                        <CardLoading
                            key={p.id}
                            src={`${process.env.CDN_URL}/cards/${p.id}.png?ts=${ts}`}
                            alt={p.name}
                            collection={p.collection}
                            player={player}
                        />
                    )
                })}
            </div>
        </>
    )
}