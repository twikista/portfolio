import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'

function About() {
  return (
    <Container>
      <Navbar />
      <Main style='flex-1'>
        <BottomNav />
      </Main>
      <Footer />
    </Container>
  )
}

export default About
