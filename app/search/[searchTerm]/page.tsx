import { Results } from '@/app/page'
import SearchResults from '@/components/results'

const SearchTermPage = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string }
}) => {
  const API_KEY = process.env.API_KEY

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const searchMovies = await res.json()
  const results: Results[] = searchMovies.results

  return (
    <div>
      {results.length === 0 ? (
        <h1 className='text-center pt-6'>No results found</h1>
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  )
}

export default SearchTermPage
