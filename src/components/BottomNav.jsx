import Link from 'next/link'

function BottomNav() {
  const menuItems = [
    { id: 1, menuItem: 'home', url: '/' },
    { id: 2, menuItem: 'projects', url: 'projects' },
    { id: 3, menuItem: 'about', url: 'about' },
    { id: 4, menuItem: 'contact', url: 'contact' },
  ]
  return (
    <nav className='fixed bottom-0 left-0 right-0 z-20 py-[14px] capitalize bg-zinc-300 dark:bg-zinc-700 md:hidden '>
      <ul className='flex justify-around w-full font-medium'>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link href={menuItem.url} className=''>
              {menuItem.menuItem}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BottomNav
