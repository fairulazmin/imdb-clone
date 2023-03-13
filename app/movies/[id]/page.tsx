import Image from 'next/image'

const MoviePage = async ({
  params: { id: pageId },
}: {
  params: { id: string }
}) => {
  const API_KEY = process.env.API_KEY

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${pageId}?api_key=${API_KEY}`,
    {
      next: { revalidate: 10000 },
    }
  )

  const movie = await res.json()
  const {
    // id,
    backdrop_path: backdrop,
    poster_path: poster,
    original_title,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = movie

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop || poster}`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
          alt={`${original_title || title}`}
          placeholder='blur'
          blurDataURL='/dual_ring.svg'
        ></Image>
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>{title || name}</h2>
          <p className='text-lg mb-3'>
            <span className='font-semibold mr-1'>Overview:</span>
            {overview}
          </p>
          <p>
            <span className='font-semibold mr-1'>Release Date:</span>
            {release_date || first_air_date}
          </p>
          <p>
            <span className='font-semibold mr-1'>Rating:</span>
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
