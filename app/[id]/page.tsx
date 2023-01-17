import CustomPlayer from "@/components/CustomPlayer";
import PlayButton from "@/components/PlayButton";
import { fetchMovie, fetchVideo } from "@/utils/fetchMovies";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: Props) => {
  const movie: Movie = await fetchMovie(params.id);
const videos = await fetchVideo(movie)
console.log(videos);
  return (
    <div className="h-screen bg-transparent w-full relative ">
      <CustomPlayer />
      <div className=" relative w-full h-full opacity-40">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie?.backdrop_path || movie?.poster_path
          }`}
          className="rounded-sm object-cover md-rounded"
          layout="fill"
          alt="Film"
        />
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 left-5">
        <h1 style={{ color: "red" }} className="text-5xl font-semibold">
          {movie?.title}
        </h1>
        <p
          style={{ color: "#642c2c" }}
          className="text-sm pt-5 w-96 line-clamp-6"
        >
          {movie?.overview}
        </p>
        <div className="flex items-center space-x-1 text-xs pt-5">
          <h3 style={{ color: "#642c2c" }} className="font-bold">
            Genre:
          </h3>
          {movie?.genres.map((genre, index) => (
            <p style={{ color: "#a75959" }} key={index}>
              {genre.name}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-5 pt-5">
          <PlayButton videos={videos} movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
