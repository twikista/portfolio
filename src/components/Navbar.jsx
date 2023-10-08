'use client'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

function Navbar() {
  const path = usePathname()
  console.log(path)
  const navItems = [
    { id: 1, item: 'home', url: '/' },
    { id: 2, item: 'projects', url: 'projects' },
    { id: 3, item: 'about', url: 'about' },
    { id: 4, item: 'contact', url: 'contact' },
  ]

  return (
    <header className='w-full px-4 py-3 border-b border-b-solid md:py-5 lg:px-16 border-b-zinc-300 dark:border-b-zinc-700'>
      <nav className='flex justify-between items-center mx-auto max-w-[1380px]'>
        <Link href='/'>
          <Logo style='text-orange-600 dark:text-orange-600' />
        </Link>
        <div className='flex items-center gap-2 md:gap-10'>
          {path !== '/' && (
            <ul className='hidden grid-cols-4 gap-3 md:grid '>
              {navItems.map((i) => (
                <li key={i.id}>
                  <Link
                    href={i.url}
                    className='flex items-center text-sm capitalize md:text-lg gap-[2px] justify-center border-solid border-[2px] border-zinc-500 dark:border-zinc-500 hover:bg-zinc-500 hover:text-zinc-100 px-2 rounded-[10px] py-[2px] dark:hover:border-zinc-400 dark:hover:bg-zinc-400 text-zinc-500 dark:text-zinc-500 font-semibold dark:hover:text-zinc-900 transition-all ease-in duration-200 active:border-orange-400'
                  >
                    {i.item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className='flex gap-3'>
            <Link
              href='/Aaron_Anama_resume.pdf'
              download='Aaron_Anama_Resume'
              target='_blank'
              className='flex font-semibold items-center text-sm capitalize md:text-lg gap-[2px] justify-center border-solid border-[2px] border-zinc-500 dark:border-zinc-500  hover:bg-zinc-500 hover:text-zinc-100 px-2 rounded-[10px] py-[2px] dark:hover:border-zinc-400 dark:hover:bg-zinc-400 text-zinc-500 dark:text-zinc-500  dark:hover:text-zinc-900 transition-all ease-in duration-200'
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
