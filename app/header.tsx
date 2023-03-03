import Link from 'next/link'
import DarkModeSwitch from './darkModeSwitch'
import MenuItems from './menuItems'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between max-w-6xl mx-auto items-center py-6'>
        <div>
          <MenuItems />
        </div>
        <div className='flex items-center space-x-2 mx-4 lg:mx-6'>
          <DarkModeSwitch />
          <Link href='/' className='space-x-2 '>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
