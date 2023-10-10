'use client'
import {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
} from 'react'

const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsdarkMode] = useState(false)

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', null)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsdarkMode(!isDarkMode)
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        matchMedia('(prefers-color-scheme:dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsdarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', null)
      setIsdarkMode('false')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className=''>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw Error(`context can't be used outside of the context`)
  return context
}
