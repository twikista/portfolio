'use client'

import { useThemeContext } from '@/context/ThemeContext'

function Toggler() {
  const { theme, toggleTheme } = useThemeContext()
  return (
    <div
      onClick={toggleTheme}
      className={`cursor-pointer p-[2px] flex items-center transition-all ease-in duration-500`}
    >
      <div>
        {theme == 'dark' ? (
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[18px] h-[18px] md:h-6 md:w-6 text-zinc-500 dark:text-zinc-400'
          >
            <path
              d='M12 3v1m0 16v1m-8-9H3m3.314-5.686L5.5 5.5m12.186.814L18.5 5.5M6.314 17.69l-.814.81m12.186-.81.814.81M21 12h-1m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        ) : (
          <svg
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5 md:w-6 md:h-6 text-zinc-500 dark:text-zinc-400'
          >
            <path
              d='M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9.004 9.004 0 0 1 12 21 9 9 0 0 1 9.386 3.386 8.999 8.999 0 0 0 9 6Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </div>
    </div>
  )
}

export default Toggler
