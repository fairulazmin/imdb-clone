import Link from 'next/link'
import Image from 'next/image'
import { Results } from './page'
import { FiThumbsUp } from 'react-icons/fi'

const Card = ({ result }: { result: Results }) => {
  const {
    id,
    backdrop_path: backdrop,
    poster_path: poster,
    original_title,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = result

  return (
    <Link
      href={`/movies/${id}`}
      className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${backdrop || poster}`}
        width={500}
        height={300}
        className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
        style={{ maxWidth: '100%', height: 'auto' }}
        alt={`${original_title || title}`}
        placeholder='blur'
        blurDataURL='/dual_ring.svg'
      ></Image>
      <p className='line-clamp-2 text-md'>{overview}</p>
      <h2 className='truncate text-lg font-bold'>{title || name}</h2>
      <div className='flex items-center space-x-2'>
        <p>{release_date || first_air_date}</p>
        <FiThumbsUp />
        <p>{vote_count}</p>
      </div>
    </Link>
  )
}

export default Card
