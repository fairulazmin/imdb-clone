import { DataResults } from "./page"

const Results = ({ results }: DataResults[]) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  )
}

export default Results
