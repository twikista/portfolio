'use client'
import Navbar from '@/components/Navbar'
import { useState, useLayoutEffect } from 'react'

export default function Home() {
  const osTheme =
    typeof window !== 'undefined' &&
    matchMedia('(prefers-color-scheme:dark)').matches
  const userselectedTheme = localStorage.getItem('theme')
  const activeTheme = () =>
    userselectedTheme === 'dark' || (!('theme' in localStorage) && osTheme)
      ? 'dark'
      : null
  const [theme, setTheme] = useState(activeTheme())

  const toggleTheme = () => {
    console.log('clicked')
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      setTheme(null)
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }

  useLayoutEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
    console.log(theme)
  }, [theme])

  return (
    <main className='flex-col items-center justify-between min-h-screen p-24 text-black bg-white dark:bg-black dark:text-white'>
      <Navbar toggleTheme={toggleTheme} />
    </main>
  )
}
