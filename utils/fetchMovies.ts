import axios from "axios";

export const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY!;
export const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
export const fetchNetflixOriginals = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`
  );

  return data.results;
};
export const fetchHorror = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
  );

  return data.results;
};
export const fetchTopRated = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
export const fetchMovie = async (id: string) => {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
const data=await res.json()
  return data;
};
export const fetchVideo = async (movie: Movie) => {
  const res= await fetch(
    `${BASE_URL}/movie/${movie?.id}/videos?api_key=${API_KEY}&language=en-US`
  );
const data =await res.json()
  return data?.results;
};


