import './globals.css'
import { Barlow } from 'next/font/google'
import ThemeContextProvider from '@/context/ThemeContext'

const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

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
