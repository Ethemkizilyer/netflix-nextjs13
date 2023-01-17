
import Banner from "../components/Banner";
import Row from "../components/Row";
import { fetchTrending } from "@/utils/fetchMovies";



export default async function Home() {
  const trendingMovies = await fetchTrending();
  console.log(trendingMovies);
  return (
    <main className="space-y-10 pb-20">
      <Banner />
      <Row title="Popular movies" movies={trendingMovies} />
    </main>
  );
}
