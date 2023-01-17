import Banner from "../components/Banner";
import Row from "../components/Row";
import {
  fetchTrending,
  fetchTopRated,
  fetchNetflixOriginals,
  fetchHorror,
} from "@/utils/fetchMovies";

export default async function Home() {
  const trendingMovies = await fetchTrending();
  const topRatedMovies = await fetchTopRated();
  const netflixOrginalMovies = await fetchNetflixOriginals();
  const horrorMovies = await fetchHorror();
  // console.log(trendingMovies);

  const randomMovie =
    topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)];

  return (
    <main className="space-y-10 pb-20">
      <Banner movies={randomMovie} />
      <Row title="Popular movies" movies={trendingMovies} />
      <Row title="Top rated" movies={topRatedMovies} />
      <Row title="Netflix Original" movies={netflixOrginalMovies} />
      <Row title="Horror" movies={horrorMovies} />
    </main>
  );
}
