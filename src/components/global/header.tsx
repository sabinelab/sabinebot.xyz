import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import LanguageMenu from './language-menu'
import {
  CopySlash,
  BookCheck,
  NotebookText,
  Users
} from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import MobileMenuWrapper from './mobile-menu-wrapper'

export default async function Header() {
  const t = await getTranslations()

  return (
    <>
      <header
        className='flex justify-between p-4'
      >
        <div
          className='flex items-center md:px-10 gap-10'
        >
          <Link
            href='/'
            className='transition duration-300 hover:scale-125'
          >
            <Image
              src='/header/sabine.png'
              width={80}
              height={80}
              alt='sabine'
              className='rounded-full'
            />
          </Link>

          <ul
            className='hidden text-2xl md:flex'
          >
            <li
              className='transition duration-300 hover:scale-105 hover:bg-[#333333] rounded-2xl'
            >
              <Link
                href='/commands'
                className='flex gap-2 px-4 py-2'
              >
                <CopySlash
                  width={30}
                  height={30}
                />
                {t('header.commands')}
              </Link>
            </li>

            <li
              className='transition duration-300 hover:scale-105 hover:bg-[#333333] rounded-2xl'
            >
              <Link
                href='/wiki'
                className='flex gap-2 px-4 py-2'
              >
                <BookCheck
                  width={30}
                  height={30}
                />
                Wiki
              </Link>
            </li>

            <li
              className='transition duration-300 hover:scale-105 hover:bg-[#333333] rounded-2xl'
            >
              <Link
                href='/changelog'
                className='flex gap-2 px-4 py-2'
              >
                <NotebookText
                  width={30}
                  height={30}
                />
                {t('header.changelog')}
              </Link>
            </li>
            <li
              className='transition duration-300 hover:scale-105 hover:bg-[#333333] rounded-2xl'
            >
              <Link
                href='/cards'
                className='flex gap-2 px-4 py-2'
              >
                <Users
                  width={30}
                  height={30}
                />
                {t('header.cards')}
              </Link>
            </li>
          </ul>
        </div>
        <div
          className='flex items-center md:px-10'
        >
          <ul
            className='hidden text-2xl md:flex items-center gap-2'
          >
            <li
              className='transition duration-300 hover:scale-105 hover:bg-[#333333] rounded-2xl'
            >
              <Link
                href={process.env.SUPPORT}
                className='flex gap-2 px-4 py-2'
              >
                <FaDiscord
                  size={40}
                />
              </Link>
            </li>
            <li>
              <LanguageMenu />
            </li>
          </ul>
        </div>
        <div
          className='flex md:hidden'
        >
          <MobileMenuWrapper />
        </div>
      </header>
    </>
  )
}