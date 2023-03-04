const API_KEY = process.env.API_KEY

const Home = async ({ searchParams }: any) => {
  let genre =
    searchParams.genre === 'fetchTopRated'
      ? 'movie/top_rated'
      : 'trending/all/week'

  const req = await fetch(
    `https://api.themoviedb.org/3/${genre}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  )
  const data = await req.json()
  console.log(data)

  return <main className='underline text-blue-700'>Home</main>
}

export default Home
