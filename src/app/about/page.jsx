import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'

function About() {
  const technologies = [
    { id: 1, item: 'HTML' },
    { id: 2, item: 'CSS' },
    { id: 3, item: 'JavaScript (ES6+)' },
    { id: 4, item: 'TypeScript' },
    { id: 5, item: 'React/Next' },
    { id: 6, item: 'Node.js' },
    { id: 7, item: 'MongoDB' },
  ]

  const tools = [
    { id: 1, item: 'Git/GitHub' },
    { id: 2, item: 'Webpack' },
    { id: 3, item: 'NPM' },
    { id: 4, item: 'Jest' },
    { id: 5, item: 'ES-Lint' },
    { id: 6, item: 'Storybook' },
  ]

  const frameworkandLibraries = [
    { id: 1, item: 'React/Next' },
    { id: 2, item: 'Express' },
    { id: 3, item: 'Tailwind CSS' },
    { id: 4, item: 'Styled-components' },
    { id: 5, item: 'CSS Modules' },
    { id: 6, item: 'React-Hook Form' },
    { id: 7, item: 'Tanstack-Query' },
  ]

  const listItems = (category, list) => (
    <div className='space-y-1'>
      <h4 className='text-base font-semibold'>{category}</h4>
      <ul className='flex flex-wrap items-center gap-2'>
        {list.map((i) => (
          <li
            key={i.id}
            className='rounded-3xl border border-solid border-zinc-400  px-2 text-xs sm:text-base flex items-center py-[1px]'
          >
            {i.item}
          </li>
        ))}
      </ul>
    </div>
  )
  return (
    <Container>
      <Navbar />
      <Main style='flex-1 pt-10 sm:pt-16'>
        <h1 className='text-3xl font-bold text-center capitalize md:text-5xl dark:text-zinc-200'>
          About me
        </h1>
        <section className='max-w-2xl mx-auto mt-4 space-y-8 text-sm text-justify md:mb-10 sm:text-lg'>
          <p>
            Hello, I am Aaron Anama, a frontend developer from Benin City,
            Nigeria. My initial contact with web development dates back to the
            early 2000s, but I actively started coding in 2021. Today, building
            exceptional digial experiences on the the web is at the center of
            everything I do.
          </p>
          <div>
            <h2 className='text-2xl font-semibold md:text-3xl dark:text-zinc-300'>
              Where I Work
            </h2>
            <p>
              I am currently a frontend developer intern at World Worldwide
              Techies (WWT), where I&rsquo;m part of the team that builds and
              maintains the user interfaces of the Talentyard platform. My job
              at WWT involves using Next.JS, Storybook and Jest to write and
              test reusable user interfaces. I also implement dynamic email
              templates using HTML and Handlebars.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold md:text-3xl dark:text-zinc-300'>
              Technologies and Tools
            </h2>
            <p>
              Here are some of the technologies, tools, and frameworks
              I&rsquo;ve worked with:
            </p>
            <div className='mt-2 space-y-3'>
              {listItems('Technologies', technologies)}
              {listItems('Tools', tools)}
              {listItems('Framework/Libraries', frameworkandLibraries)}
            </div>
          </div>
        </section>
        <BottomNav />
      </Main>
      <Footer style='mb-[60px] md:mb-[10px]' />
    </Container>
  )
}

export default About
