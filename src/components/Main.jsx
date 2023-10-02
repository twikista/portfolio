function Main({ children, style }) {
  return (
    <main className={`w-full max-w-5xl px-4 md:px-6 mx-auto ${style}`}>
      {children}
    </main>
  )
}

export default Main
