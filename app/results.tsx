import { Results } from './page'

const SearchResults = ({ results }: { results: Results[] }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  )
}

export default SearchResults
