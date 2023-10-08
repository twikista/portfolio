import React from 'react'

function Container({ children, style }) {
  return (
    <div
      className={`flex flex-col items-center min-h-screen transition-all duration-100 ease-linear text-zinc-600 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 ${style}`}
    >
      {children}
    </div>
  )
}

export default Container
