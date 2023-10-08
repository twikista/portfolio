'use client'
import Navbar from '@/components/Navbar'
// import NavBar from '@/components/NavBar'
import Link from 'next/link'
import Image from 'next/image'
import { projectData } from '@/data/projects'
import Container from '@/components/Container'
import Main from '@/components/Main'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'

function Projects() {
  return (
    <Container>
      <Navbar />
      {/* <NavBar /> */}
      <Main>
        <section className='max-w-[820px] mx-auto mt-12 space-y-12 mb-[20px] md:mb-10'>
          <h1 className='text-4xl font-semibold text-center capitalize text-zinc-600 dark:text-zinc-200'>
            featured projects
          </h1>
          <ul className='grid auto-rows-fr sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 w-full max-w-[340px] md:max-w-full mx-auto'>
            {projectData.map((item) => (
              <li
                key={item.id}
                className='flex flex-col pb-3 space-y-1 overflow-hidden border border-solid sm:space-y-2 border-zinc-400 dark:border-zinc-600 rounded-xl bg-zinc-700/0'
              >
                <div className='hidden sm:inline-block w-full h-[200px] object-cover object-center relative'>
                  <Image
                    src={item.imageUrl}
                    // sizes='100vw'
                    // width={400}
                    // height={200}
                    fill
                    alt='thumbnail'
                  />
                  <div className='absolute top-0 bottom-0 left-0 right-0 bg-zinc-900/10' />
                </div>
                <div className='flex flex-col justify-between flex-1 h-full px-3 pt-3 sm:gap-2 sm:pt-0'>
                  <h3 className='text-xl font-semibold text-orange-600 sm:text-2xl dark:text-orange-400'>
                    {item.title}
                  </h3>
                  <div className='flex flex-col justify-between flex-1 gap-2 sm:gap-2'>
                    <p className='text-base text-zinc-600 dark:text-zinc-400 sm:text-base'>
                      {item.description}
                    </p>
                    <ul className='flex flex-wrap items-center gap-2'>
                      {item.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className='rounded-3xl border border-solid border-zinc-400   px-2 text-xs flex items-center py-[1px]'
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className='flex flex-col gap-2 mt-5 font-semibold sm:mt-1 sm:gap-4 sm:flex-row'>
                      <Link
                        href={item.demoUrl}
                        target='_blank'
                        className='flex items-center justify-center flex-1 px-5 py-2 text-sm transition-all duration-200 ease-linear rounded-lg sm:py-3 bg-zinc-500 dark:bg-zinc-700 hover:bg-zinc-600 dark:hover:bg-zinc-600 text-zinc-100 dark:text-zinc-200 sm:text-base'
                      >
                        <span>Demo</span>
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 sm:w-6 sm:h-6'
                        >
                          <path
                            d='M5 12V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6m-3.889-7H12m0 0v3.889M12 12l-7 7'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </Link>
                      <Link
                        href={item.githubUrl}
                        target='_blank'
                        className='flex items-center justify-center flex-1 px-5 py-2 text-sm transition-all duration-200 ease-linear rounded-lg sm:py-3 bg-zinc-500 dark:bg-zinc-700 hover:bg-zinc-600 dark:hover:bg-zinc-600 text-zinc-100 dark:text-zinc-200 sm:text-base'
                      >
                        <svg
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 sm:w-6 sm:h-6'
                        >
                          <path
                            opacity='.1'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M12 3c-7.412 0-9 1.588-9 9s1.588 9 9 9 9-1.588 9-9-1.588-9-9-9Zm2.27 6.035c.917-.69 1.45-.782 1.66-.785a3.555 3.555 0 0 1 .043 2.053.377.377 0 0 0 .064.33v.002l.044.057c.438.603.68 1.377.669 2.18v.003c0 1.699-.442 2.69-1.05 3.283-.614.6-1.437.836-2.286.939l-.024.003-.012.001a8.613 8.613 0 0 1-2.77.028h-.004l-.035-.006c-.845-.114-1.664-.361-2.274-.966-.606-.6-1.045-1.593-1.045-3.282v-.004a3.637 3.637 0 0 1 .716-2.241.367.367 0 0 0 .062-.323l-.002-.008a3.575 3.575 0 0 1 .04-2.05c.21.004.746.095 1.664.786l.11.083a.355.355 0 0 0 .324.059h.002c.06-.02.122-.037.184-.054a6.162 6.162 0 0 1 3.475.05l.003.002a.374.374 0 0 0 .34-.062l.102-.078Z'
                            fill='currentColor'
                          />
                          <path
                            d='M13.717 8.882a6.412 6.412 0 0 0-3.492.016.392.392 0 0 1-.344-.063v0c-1.188-.893-1.808-.853-1.962-.823v0a.07.07 0 0 0-.052.046 3.82 3.82 0 0 0-.082 2.308l.003.009a.117.117 0 0 1-.02.103v0A3.886 3.886 0 0 0 7 12.875c0 3.465 1.803 4.26 3.534 4.496l.036.005a8.863 8.863 0 0 0 2.848-.028l.025-.003c1.74-.211 3.556-.986 3.556-4.47a3.886 3.886 0 0 0-.764-2.392v-.002a.127.127 0 0 1-.022-.11v0a3.8 3.8 0 0 0-.08-2.298l-.006-.014a.072.072 0 0 0-.053-.048v0c-.154-.03-.77-.067-1.956.824v0a.393.393 0 0 1-.344.063 5.723 5.723 0 0 0-.058-.016Z'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9Z'
                            stroke='currentColor'
                            strokeWidth='2'
                          />
                        </svg>
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <BottomNav />
      </Main>
      <Footer style='mb-[60px] md:mb-[10px]' />
    </Container>
  )
}

export default Projects
