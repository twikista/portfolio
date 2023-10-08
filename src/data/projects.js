import webmart from '../../public/webmart.png'
import weda from '../../public/weda-app.jpg'
import havilla from '../../public/havilla.png'
import sketchpadi from '../../public/sketchpadi.png'
import resumebuilder from '../../public/resumebuilder.png'
import phonenumberinput from '../../public/phone-input.png'
import portfolio from '../../public/portfolio.jpg'

export const projectData = [
  // {
  //   id: 1,
  //   title: 'Portfolio',
  //   description:
  //     'A portfolio website that showcase my projects and provide useful information about me ',
  //   technologies: ['Nextjs', , 'Tailwind CSS', 'Netlify'],
  //   imageUrl: portfolio,
  //   demoUrl: 'https://web-mart.netlify.app/',
  //   githubUrl: 'https://github.com/twikista/web-shop',
  // },
  {
    id: 1,
    title: 'Web-Mart',
    description:
      'A protoype of a fashion ecommerce website, which leverages the fakestore REST API.  ',
    technologies: [
      'Typescript',
      'React',
      'Styled-Components',
      'REST API',
      'Netlify',
      'Vite',
    ],
    imageUrl: webmart,
    demoUrl: 'https://web-mart.netlify.app/',
    githubUrl: 'https://github.com/twikista/web-shop',
  },
  {
    id: 2,
    title: 'Weda',
    description:
      'A vanilla JavaScript app that leverages the Openweather API to provide current weather details',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'REST API', 'Webpack'],
    imageUrl: weda,
    demoUrl: 'https://twikista.github.io/weather-app/',
    githubUrl: 'https://github.com/twikista/weather-app',
  },
  {
    id: 3,
    title: 'SmartCV',
    description:
      'A protoype of a free online resume builder, with functionality to download generated CV',
    technologies: ['React', 'React Router', 'CSS Module', 'Netlify'],
    imageUrl: resumebuilder,
    demoUrl: 'https://smartcvbuilder.netlify.app/',
    githubUrl: 'https://github.com/twikista/cv-project',
  },
  {
    id: 4,
    title: 'Havilla Restaurant',
    description:
      'A protoype website for a Nigerian Restaurant that list popular Nigerian food',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    imageUrl: havilla,
    demoUrl: 'https://twikista.github.io/Restaurant-Page/',
    githubUrl: 'https://github.com/twikista/Restaurant-Page',
  },
  {
    id: 5,
    title: 'Sketch-Padi',
    description:
      'A browser based sketchpad, that mimics the featurs of Etch-A-Sketch and a sketch pad',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: sketchpadi,
    demoUrl: 'https://twikista.github.io/Etch-a-Sketch/',
    githubUrl: 'https://github.com/twikista/Etch-a-Sketch',
  },
  {
    id: 6,
    title: 'Phonenumber Input',
    description:
      'A custom Phonenumber input which dispays country code and flag based on country selected',
    technologies: ['React', 'Styled-Components', 'Replit'],
    imageUrl: phonenumberinput,
    demoUrl: 'https://twikista.github.io/PhoneInputField/',
    githubUrl: 'https://github.com/twikista/Etch-a-Sketch',
  },
]
