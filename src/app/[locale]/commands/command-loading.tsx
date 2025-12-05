'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export type Command = {
  name: string
  description: string
}

export default function CommandLoading() {
  const [loading, setLoading] = useState(true)
  const [commands, setCommands] = useState<Command[]>([])

  const t = useTranslations()

  useEffect(() => {
    const fetchCommands = async() => {
      const res = await fetch('/api/commands')
      const commands: Command[] = await res.json()

      setLoading(false)
      setCommands(
        commands.sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        )
      )
    }

    fetchCommands()
  }, [])

  if(loading || !Array.isArray(commands)) {
    return (
      <>
        <div
          className='grid justify-items-center pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className='bg-[#2A2A2A] p-10 rounded-2xl max-w-xs md:max-w-3xs mb-20 w-[700] h-72 animate-pulse'
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <div
        className='grid justify-items-center pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      >
        {commands.map((cmd, i) => (
          <div
            key={i}
            className='
              bg-[#2A2A2A] p-5 rounded-2xl max-w-xs md:max-w-3xs
              mb-6 w-[700] transition duration-500 hover:scale-105
            '
          >
            <div>
              <h2
                className='text-2xl font-extrabold'
              >
                /{cmd.name}
              </h2>
              <p
                className='mt-2 text-lg'
              >
                {t(`commands.${cmd.name}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}