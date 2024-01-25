import MoviesCarousel from '@/components/MoviesCarousel'
import {
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
} from '@/lib/getMovies'
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'

export default async function Home() {
  const upComingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()
  return (
    <main>
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={upComingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  )
}
