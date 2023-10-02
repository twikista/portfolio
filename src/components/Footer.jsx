function Footer({ style }) {
  return (
    <footer className={`w-full ${style}`}>
      <div className='flex justify-around max-w-xs mx-auto'>
        <span>&copy;2023</span>
        <span>Aaron Anama</span>
      </div>
    </footer>
  )
}

export default Footer
