'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { usePathname, useRouter } from 'next/navigation'
import { locales } from '../../config'
import { Languages } from 'lucide-react'

export default function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  
  const changeLanguage = (lang: typeof locales[number]) => {
    const reg = new RegExp(`^/(${locales.join('|')})`)
    router.push(`/${lang}${pathname.replace(reg, '')}`)
  }

  return (
    <>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className='relative inline-block'
      >
        <Languages
          className='cursor-pointer'
          size={25}
        />

        <Transition
          show={isOpen}
          enter='transition-opacity duration-500 ease-out'
          enterFrom='opacity-0 translate-y-2'
          enterTo='opacity-100 translate-y-0'
          leave='transition-opacity duration-250 ease-in'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-2'
        >
          <div
            className='absolute top-12 right-0 bg-[#2A2A2A]/50 rounded-md shadow-md w-50 z-20'
          >
            <ul
              className='text-sm'
            >
              <li
                className='flex items-center px-4 py-2 cursor-pointer gap-4 hover:bg-[#3A3A3A]/30 rounded-md'
                onClick={() => changeLanguage('br')}
              >
                <span>Português</span>
              </li>
              <li
                className='flex items-center px-4 py-2 cursor-pointer gap-4 hover:bg-[#3A3A3A]/30 rounded-md'
                onClick={() => changeLanguage('us')}
              >
                <span>English</span>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </>
  )
}