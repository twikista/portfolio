'use client'

function Navbar({ toggleTheme }) {
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
