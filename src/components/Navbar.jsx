'use client'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const path = usePathname()
  console.log(path)
  const navItems = [
    { id: 1, item: 'home' },
    { id: 2, item: 'projects' },
    { id: 3, item: 'skills' },
    { id: 4, item: 'about' },
  ]

  return (
    <header className='w-full px-4 py-3 border-b border-b-solid md:py-5 lg:px-16 border-b-zinc-300 dark:border-b-zinc-700'>
      <nav className='flex justify-between items-center mx-auto max-w-[1380px]'>
        {/* <div className='flex items-start justify-center w-10 h-10 text-3xl font-semibold border-b-8 border-purple-600 border-solid rounded-full text-zinc-200 dark:ext-purple-600 bg-zinc-900 dark:bg-white'>
          <h1 className='text-3xl font-semibold '>a_</h1>
        </div> */}
        <h1 className='text-3xl font-semibold '>
          A<span className=' text-zinc-600'>&#95;</span>
        </h1>

        <div className='flex items-center gap-2 md:gap-10'>
          {path !== '/' && (
            <ul className='hidden grid-cols-4 gap-3 md:grid '>
              {navItems.map((i) => (
                <li
                  key={i.id}
                  className='flex items-center text-sm capitalize md:text-lg gap-[2px] justify-center border-solid border-[2px] border-zinc-500 dark:border-zinc-500 hover:bg-zinc-500 hover:text-zinc-100 px-2 rounded-[10px] py-[2px] dark:hover:border-zinc-500 dark:hover:bg-zinc-500 text-zinc-500 dark:text-zinc-500 font-semibold dark:hover:text-zinc-800 transition-all ease-in duration-200'
                >
                  <Link href='/'>{i.item}</Link>
                </li>
              ))}
              {/* <li className='flex items-center text-sm apitalize md:text-lg gap-[2px] justify-center border-solid border-[2px] border-zinc-500 dark:border-zinc-700 hover:border-zinc-400 px-2 rounded-3xl py-[2px] dark:hover:border-zinc-500 dark:hover:bg-zinc-800 text-zinc-600 hover:text-zinc-500'>
              <Link href='/'>home</Link>
            </li>
            <li>projects</li>
            <li>skill</li>
            <li>about</li> */}
            </ul>
          )}

          <div className='flex gap-3'>
            <Link
              href='/Aaron_Anama_resume.pdf'
              download='Aaron_Anama_Resume'
              target='_blank'
              className='flex font-semibold items-center text-sm capitalize md:text-lg gap-[2px] justify-center border-solid border-[2px] border-zinc-500 dark:border-zinc-500  hover:bg-zinc-500 hover:text-zinc-100 px-2 rounded-[10px] py-[2px] dark:hover:border-zinc-500 dark:hover:bg-zinc-500 text-zinc-500 dark:text-zinc-500  dark:hover:text-zinc-800 transition-all ease-in duration-200'
            >
              <span className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-[18px] h-[20px] '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                  />
                </svg>
              </span>
              <span className='items-center hidden md:flex'>resume</span>
            </Link>
            <ThemeToggler />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
