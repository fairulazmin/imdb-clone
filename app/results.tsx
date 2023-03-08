import { Results } from './page'

type Wrapper = {
  results: Results[]
}

const SearchResults = ({ results }: Wrapper) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  )
}

export default SearchResults
