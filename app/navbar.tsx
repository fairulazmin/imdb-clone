'use client'

import Link from 'next/link'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'

const Navbar = () => {
  const searchParams: ReadonlyURLSearchParams = useSearchParams()
  const genre: string | null = searchParams.get('genre')

  return (
    <div className='flex justify-center space-x-4 font-semibold h-12 dark:bg-gray-600 items-center bg-amber-100 lg:text-lg'>
      <Link
        href='/?genre=fetchTrending'
        className={`hover:text-amber-600 cursor-pointer border-amber-600 ${
          genre === 'fetchTrending' &&
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`}
      >
        Trending
      </Link>
      <Link
        href='/?genre=fetchTopRated'
        className={`hover:text-amber-600 cursor-pointer border-amber-600 ${
          genre === 'fetchTopRated' &&
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
        }`}
      >
        Top Rated
      </Link>
    </div>
  )
}

export default Navbar
