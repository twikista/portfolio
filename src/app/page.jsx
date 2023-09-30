'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // const osTheme =
  //   typeof window !== 'undefined' &&
  //   matchMedia('(prefers-color-scheme:dark)').matches
  // const userselectedTheme = localStorage.getItem('theme')
  // const activeTheme = () =>
  //   userselectedTheme === 'dark' || (!('theme' in localStorage) && osTheme)
  //     ? 'dark'
  //     : null
  // const [theme, setTheme] = useState(activeTheme())

  // const toggleTheme = () => {
  //   console.log('clicked')
  //   if (theme === 'dark') {
  //     document.documentElement.classList.remove('dark')
  //     setTheme(null)
  //   } else {
  //     document.documentElement.classList.add('dark')
  //     setTheme('dark')
  //   }
  // }

  // useLayoutEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  //   localStorage.setItem('theme', theme)
  //   console.log(theme)
  // }, [theme])

  return (
    <main className='flex flex-col items-center min-h-screen px-4 text-zinc-700 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200 md:px-6'>
      <Navbar />
      <section className='flex flex-1 mt-10 md:mt-0 md:items-center'>
        <div className='flex flex-col items-center max-w-4xl py-8 mx-auto md:space-x-8 md:h-[400px] md:flex-row rounded-3xl dark:bg-transparent bg-transparent md:border-2 md:border-solid md:border-zinc-300 dark:md:border-zinc-800 px-0 md:px-6'>
          <Image
            src='/aaron.jpeg'
            width={320}
            height={320}
            alt="aaron's profile image"
            className='hidden shadow rounded-xl md:block'
          />
          <Image
            src='/aaron.jpeg'
            width={240}
            height={240}
            alt="aaron's profile image"
            className='block shadow rounded-xl md:hidden'
          />

          <div className='flex-col items-center w-4/5 pt-5 space-y-4'>
            <div className='mx-auto space-y-3 text-lg text-center md:text-left md:text-xl'>
              <h4 className='text-2xl font-medium md:text-3xl'>
                Hi there, it&rsquo;s Aaron here
              </h4>
              <p>Thank you for stopping by my personal website</p>
              <p>
                I am a software engineer with a focus on frontend development.
              </p>
              <p>Follow the links below to learn more </p>
            </div>
            <div>
              <div className='h-[2px] bg-zinc-300 dark:bg-zinc-700' />
              <nav className='my-4'>
                <ul className='flex items-center justify-around gap-2 text-sm capitalize list-none md:text-xl'>
                  <li className='flex-1 border-2 border-solid rounded shadow-sm border-zinc-300 hover:border-purple-500 dark:border-zinc-700 dark:hover:hover:border-purple-400'>
                    <Link
                      href='projects'
                      className='flex items-center justify-center w-full px-4 py-3'
                    >
                      projects
                    </Link>
                  </li>
                  <li className='flex-1 border-2 border-solid rounded shadow-sm border-zinc-300 hover:border-purple-500 dark:border-zinc-700 dark:hover:hover:border-purple-400'>
                    <Link
                      href='resume'
                      className='flex items-center self-stretch justify-center w-full px-4 py-3'
                    >
                      skills
                    </Link>
                  </li>
                  <li className='flex-1 border-2 border-solid rounded shadow-sm border-zinc-300 hover:border-purple-500 dark:border-zinc-700 dark:hover:hover:border-purple-400'>
                    <Link
                      href='about '
                      className='flex items-center self-stretch justify-center w-full px-4 py-3 '
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
