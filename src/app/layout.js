import './globals.css'
import ThemeContextProvider from '@/context/ThemeContext'
import { barlow } from '@/font/font'

export const metadata = {
  title: 'Aaron Anama',
  description: "Aaron Anama's porfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={barlow.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  )
}
