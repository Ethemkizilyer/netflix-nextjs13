import Image from "next/image";
import MoreButton from "./MoreButton";
import PlayButton from "./PlayButton";

interface Props {
  movies: Movie;
}

const Banner = ({ movies }: Props) => {
  return (
    <section className="h-screen bg-transparent w-full relative">
      <div className="relative  w-full h-full opatiy-40">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movies.backdrop_path || movies.poster_path
          }`}
          className="rounded-sm object-cover  md:rounded"
          fill
          alt="Film"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <h1 className="text-5xl font-semibold">{movies.title}</h1>
        <p className="text-sm pt-5 w-96 line-clamp-6">{movies.overview}</p>
        <div className="flex items-center space-x-5 pt-5">
          <PlayButton movie={movies} />
          <MoreButton movie={movies} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
