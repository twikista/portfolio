'use client'
import { useState } from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'
import CopyIcon from '@/components/CopyIcon'
import { GitHubIcon, LinkedinIcon, Twitter } from '@/components/Icons'
import a from 'next/link'
function Contact() {
  const [copyStatus, setCopyStatus] = useState(null)

  const copyEmailToClipboard = async (email) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(email)
    } else {
      document.execCommand('copy', true, email)
    }
  }
  const handleCopyClick = async (email) => {
    try {
      await copyEmailToClipboard(email)
      setCopyStatus('copied!')
      setTimeout(() => setCopyStatus(null), 2000)
    } catch {
      setCopyStatus('Try again')
      setTimeout(() => setCopyStatus(null), 2000)
    }
  }

  return (
    <Container>
      <Navbar />
      <Main style='flex-1 flex flex-col mt-20 space-y-12 text-center '>
        <h1 className='text-3xl font-bold text-center capitalize md:text-5xl dark:text-zinc-200'>
          Get in Touch
        </h1>
        <div className='flex-1 space-y-14 '>
          <div className='space-y-8'>
            <p className='text-lg sm:text-xl'>
              Want share an opportunity or just say hi? send me an email at:
            </p>
            <div className='flex justify-between gap-2 px-2 sm:pr-3 py-2 sm:py-2 border border-solid border-zinc-300 dark:border-zinc-700/60 rounded-[30px] max-w-sm mx-auto dark:text-zinc-400 '>
              <span className='flex-1 text-base font-medium text-center sm:text-xl'>
                aaronanama@gmail.com
              </span>
              <div className='relative flex items-center'>
                <button
                  type='button'
                  onClick={() => handleCopyClick('aaronanama@gmail.com')}
                  className='flex items-center px-2 py-[2px] text-sm sm:text-base rounded-[30px] dark:hover:bg-zinc-700 bg-zinc-400/60 text-zinc-800 dark:text-zinc-400 hover:bg-zinc-300 dark:bg-zinc-700/50 dark:hover:text-zinc-200'
                >
                  <span>copy</span>
                  <CopyIcon style='w-6 h-6 sm:w-5 sm:h-4 hidden sm:inline-block' />
                </button>
                {copyStatus && (
                  <span className='absolute top-[-28px] right-2 text-zinc-200 text-base'>
                    {copyStatus}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className='space-y-5'>
            <p className='text-lg font-medium sm:text-2xl dark:text-zinc-300'>
              Let&rsquo;s conntect on socials
            </p>
            <article className='flex items-center justify-center gap-8 text-zinc-600'>
              <a
                href='https://github.com/twikista'
                target='_blank'
                className='inline-block'
              >
                <GitHubIcon style='w-9 h-9 sm:w-12 sm:h-12' />
              </a>

              <a
                href='https://www.linkedin.com/in/aaronanama'
                target='_blank'
                className='inline-block'
              >
                <LinkedinIcon style='w-9 h-9 sm:w-12 sm:h-12 ' />
              </a>
              <a
                href='https://twitter.com/aaronanama'
                target='_blank'
                className='inline-block'
              >
                <Twitter style='w-9 h-9 sm:w-12 sm:h-12 ' />
              </a>
            </article>
          </div>
        </div>
        <BottomNav />
      </Main>
      <Footer style='mb-[60px] md:mb-[10px]' />
    </Container>
  )
}

export default Contact
