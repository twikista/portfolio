'use client'
import { useState, useLayoutEffect, createContext, useContext } from 'react'

const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
  const osTheme =
    typeof window !== 'undefined' &&
    matchMedia('(prefers-color-scheme:dark)').matches
  const userTheme = localStorage.getItem('theme')

  const activeTheme = () =>
    userTheme === 'dark' || (!('theme' in localStorage) && osTheme)
      ? 'dark'
      : null
  const [theme, setTheme] = useState(activeTheme())

  const toggleTheme = () =>
    theme === 'dark' ? setTheme(null) : setTheme('dark')

  useLayoutEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw Error(`context can't be used outside of the context`)
  return context
}
