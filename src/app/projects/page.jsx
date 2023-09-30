import Navbar from '@/components/Navbar'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

function Projects() {
  return (
    <div className='relative flex flex-col items-center min-h-screen transition-all duration-200 ease-in text-zinc-700 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-200'>
      <Navbar />
      {/* <NavBar /> */}
      <main className='px-4 md:px-6'>
        <nav className='fixed bottom-0 left-0 right-0 z-20 py-3 bg-zinc-300 dark:bg-zinc-800 sm:hidden '>
          <ul className='flex justify-around w-full font-medium'>
            <li>
              <Link href='/'>home</Link>
            </li>
            <li>projects</li>
            <li>skill</li>
            <li>about</li>
          </ul>
        </nav>
      </main>
    </div>
  )
}

export default Projects
