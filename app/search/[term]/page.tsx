import MoviesCarousel from '@/components/MoviesCarousel'
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    term: string
  }
}
async function SearchPage({ params: { term } }: Props) {
  if (!term) return notFound()

  const termToUse = decodeURI(term) //this will transfrom the url part from ...search/movie name =>  ...movie%20name to ..movie name

  const movies = await getSearchedMovies(termToUse)
  const popularMovies = await getPopularMovies()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Showing Results for {termToUse}
        </h1>
        movies?
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        popularMovies?
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  )
}

export default SearchPage
