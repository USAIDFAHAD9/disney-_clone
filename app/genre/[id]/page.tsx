import MoviesCarousel from '@/components/MoviesCarousel'
import { getDiscoverMovies } from '@/lib/getMovies'

type Props = {
  params: {
    id: string
  }
  searchParams: {
    genre: string
  }
}
async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id)
  return (
    <div className="max-w-7xl mx-auto">
      {/* Azure OpenAI suggestion*/}
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Showing Results for {genre}
        </h1>
      </div>
      <MoviesCarousel title={'Genre'} movies={movies} isVertical />
    </div>
  )
}

export default GenrePage
