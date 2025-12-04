'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type Content = {
    lang: string
    text: string
}
type Update = {
    id: string
    published_at: string
    content: Content[]
}
type Props = {
    locale: string
}

export default function UpdateLoading({ locale }: Props) {
    const [loading, setLoading] = useState(true)
    const [updates, setUpdates] = useState<Update[]>([])

    useEffect(() => {
        const fetchUpdates = async() => {
            const res = await fetch('/api/updates')
            const data: Update[] = await res.json()

            setUpdates(data)
            setLoading(false)
        }

        fetchUpdates()
    }, [])

    if(loading || !Array.isArray(updates)) {
        return (
            <>
                <div
                    className='flex flex-col items-center justify-center pt-10'
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className='bg-[#2A2A2A] p-10 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] animate-pulse'
                        />
                    ))}
                </div>
            </>
        )
    }

    return (
        <>
            <div
                className='flex flex-col items-center justify-center pt-10'
            >
                {
                    updates.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
                        .map((update, i) => (
                            <Link
                                key={i}
                                className='bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-2xl mb-6 w-[700] transition duration-500 hover:scale-105'
                                href={`/${locale}/changelog/v${update.id}`}
                            >
                                <h2
                                    className='text-2xl font-bold'
                                >
                                    v{update.id}
                                </h2>
                            </Link>
                        ))
                }
            </div>
        </>
    )
}