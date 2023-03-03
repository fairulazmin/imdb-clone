import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const MenuItems = () => {
  return (
    <div className='flex space-x-2'>
      <Link href='/' className='mx-4 lg:mx-6 hover:text-amber-600'>
        <AiFillHome className='text-2xl sm:hidden' />{' '}
        <span className='hidden sm:inline'>HOME</span>
      </Link>
      <Link href='/about' className='mx-4 lg:mx-6 hover:text-amber-600'>
        <BsFillInfoCircleFill className='text-2xl sm:hidden' />{' '}
        <span className='hidden sm:inline'>ABOUT</span>
      </Link>
    </div>
  )
}

export default MenuItems
