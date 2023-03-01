import Link from 'next/link'
import MenuItems from './menuItems'

const Header = () => {
  return (
    <div className='bg-gray-300'>
      <div className='flex justify-between max-w-6xl mx-auto items-center py-6'>
        <div>
          <MenuItems />
        </div>
        <div>
          <Link href='/' className='space-x-2 mx-4 lg:mx-6'>
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
