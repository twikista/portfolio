'use client'
import { useThemeContext } from '@/context/ThemeContext'

function Navbar() {
  const { toggleTheme } = useThemeContext()
  return (
    <header>
      <nav>
        <h1>Aaron</h1>
        <div onClick={toggleTheme}>toggle</div>
      </nav>
    </header>
  )
}

export default Navbar
