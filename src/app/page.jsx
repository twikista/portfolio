'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {
  const menuItems = [
    { id: 1, menuItem: 'projects' },
    { id: 2, menuItem: 'about' },
    { id: 3, menuItem: 'contact' },
  ]

  return (
    <Container>
      <Navbar />
      <Main style='flex flex-col flex-1'>
        <section className='flex justify-center flex-1 mt-14 sm:mt-0 md:items-center'>
          <div className='flex flex-col items-center max-w-4xl py-8 mx-auto md:space-x-8 md:h-[400px] md:flex-row rounded-3xl dark:bg-transparent bg-transparent md:border-2 md:border-solid md:border-zinc-400 dark:md:border-zinc-700 px-3 md:px-6'>
            <Image
              src='/aaron.jpeg'
              width={320}
              height={320}
              alt="aaron's profile image"
              className='hidden shadow rounded-xl md:block'
            />
            <Image
              src='/aaron.jpeg'
              width={280}
              height={240}
              alt="aaron's profile image"
              className='block shadow rounded-xl md:hidden'
            />

            <div className='flex-col items-center pt-4 space-y-4 md:pt-0'>
              <div className='mx-auto space-y-2 text-base md:text-xl dark:text-zinc-400'>
                <h4 className='text-2xl font-semibold text-center text-orange-600 md:text-left md:text-3xl dark:text-orange-400'>
                  Hi there, it&rsquo;s Aaron here
                </h4>
                <p>
                  I am a Frontend Developer. I use web and web-related
                  technologies to build exceptional digital experiences for the
                  web.
                </p>
                <p>Follow the links below to see more about me </p>
              </div>
              <div>
                <div className='h-[2px] bg-zinc-400 dark:bg-zinc-700' />
                <nav className='mt-4'>
                  <ul className='flex items-center justify-around gap-2 capitalize list-none'>
                    {menuItems.map((item) => (
                      <li key={item.id} className='flex-1 '>
                        <Link
                          href={item.menuItem}
                          className='flex items-center justify-center w-full px-4 py-2 sm:py-3 text-base font-semibold hover:scale-95 transition-all duration-200 ease-linear border-2 border-solid rounded-[10px] shadow-sm text-zinc-400 dark:text-zinc-400 md:text-xl border-zinc-400 hover:border-zinc-500 hover:text-zinc-600 dark:border-zinc-700 dark:hover:border-zinc-400 dark:hover:text-zinc-300'
                        >
                          {item.menuItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Main>
      <Footer style='mb-[10px]' />
    </Container>
  )
}
