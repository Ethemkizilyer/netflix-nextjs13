import axios from "axios";

export const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY!;
export const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = async () => {
  const { data } = await axios(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
export const fetchNetflixOriginals = async () => {
  const { data } = await axios(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`
  );

  return data.results;
};
export const fetchMorror = async () => {
  const { data } = await axios(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
  );

  return data.results;
};
export const fetchTopRated = async () => {
  const { data } = await axios(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
export const fetchMovie = async (id: string) => {
  const { data } = await axios(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};
