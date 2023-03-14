import SearchResults from '@/components/results'
const API_KEY = process.env.API_KEY

type Data = {
  page: number
  results: Results[]
  total_pages: number
  total_results: number
}

export type Results = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  name?: string
  original_language: string
  original_title?: string
  original_name?: string
  overview: string
  popularity: number
  poster_path: string
  media_type?: string
  release_date?: string
  title?: string
  video?: boolean
  first_air_date?: string
  vote_average: number
  vote_count: number
  origin_country?: string[]
}

type SearchParams = {
  searchParams: {
    genre: string
  }
}

const Home = async ({ searchParams }: SearchParams) => {
  let genre =
    searchParams.genre === 'fetchTopRated'
      ? 'movie/top_rated'
      : 'trending/all/week'

  const res = await fetch(
    `https://api.themoviedb.org/3/${genre}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: Data = await res.json()
  const results: Results[] = data.results

  return (
    <div>
      <SearchResults results={results} />
    </div>
  )
}

export default Home
